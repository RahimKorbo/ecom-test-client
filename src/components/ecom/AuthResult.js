import React from "react";
import { Component } from "react";
import {otpAuthResult} from '../functions/CommonCalls';


export default class AuthResult extends Component{

    constructor(props){
        super(props)

        // get from props and set to state
        this.state = {
            guid: props.location.state.issuerGuid,
            tranId:props.location.state.tranId,
            userId:props.location.state.userId,
            password: props.location.state.password,
            resultValue: ''
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
    processForm(e){
        const json ={
            guid : this.state.guid,
	        tranId : this.state.tranId,
	        userId : this.state.userId,
	        password : this.state.password
        }

        otpAuthResult(json).then(res=>{
            if(res.status===200){
                this.setState({
                    resultValue: res
                })
                // show the result in some box
            }
        })
        
    }


    render(){
        return(
            <div style={{
                width: 780,
                marginTop: '140px',
                marginLeft: '200px',
                padding: '14px 10px',
                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
            }}
            >
                AuthResult Page
                {this.state.resultValue}

                <button className="button float-right" onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}