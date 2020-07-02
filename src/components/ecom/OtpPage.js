import React from "react";
import { Component } from "react";
import { otpService, otpAuth } from "../functions/CommonCalls";
import { Redirect } from "react-router-dom";



export default class OtpPage extends Component {

    constructor(props) {
        super(props)
        //get values from props and set into state
        this.state = {
            issuerGuid: props.location.state.issuerGuid,
            cardHolderId: props.location.state.cardHolderId,
            tranId: props.location.state.tranId,
            hkey: props.location.state.hkey,
            isOtpPage: false,
            isPosted: false,
            session: null,
            //for authResutl page
            userId: props.location.state.userId,
            password: props.location.state.password
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {

        // dataItem.requestType = "Auth_Initiate";

        // console.log(dataItem)
        // console.log(dataItem.langCode.text)
        // console.log(dataItem.requestType)

        // alert(JSON.stringify(dataItem, null, 4));

        this.processForm(e)


    }
    
    componentDidMount() {

        this.randomSession = () => {
            var length = 8;
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            this.setState({
                session: result
            })
        }

        const json = {
            accuCardholderId: this.state.cardHolderId,
            accuGuid: this.state.issuerGuid,
            session: this.state.session,//"",//random alphanumeric string
            accuReturnURL: "/",
            tranId: this.state.tranId,
            hkey: this.state.hkey
        }

        // this.setState({
        //     isOtpPage: true
        // })

        otpService(json).then(res=>{
            if(res.status===200){
                this.setState({
                    isOtpPage : true
                })
            }
        })
    }


    processForm(e) {
        const json = {
            mode: "validateOtpAction",
            cardHolderId: this.state.cardHolderId,
            otp: this.refs.otp.nodeValue,
            guid: this.state.issuerGuid,
        }

        otpAuth(json).then(res => {
            if (res.status === 200) {
                this.setState({
                    isPosted: true
                })
            }
        })


    }


    render() {

        if (this.state.isOtpPage) {

            return (
                // , state:{item:data}
                <div style={{
                    width: 780,
                    marginTop: '140px',
                    marginLeft: '200px',
                    padding: '14px 10px',
                    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
                }}
                >
                    {this.state.isPosted && <Redirect to={{ pathname: "/result" , state:{issuerGuid: this.state.issuerGuid,tranId: this.state.tranId,userId: this.state.userId,password: this.state.password} }} />}


                    <label> Otp page :</label>
                    <input type="text" ref="otp" name="otp" id="otp"

                        placeholder="OTP"
                        maxLength="4"
                        required /><br></br>
                    <br></br>

                    <button className="button float-right" onClick={this.handleSubmit} >Submit</button>

                </div>
            )
        }
        else {
            // Loader
        }
    }

}