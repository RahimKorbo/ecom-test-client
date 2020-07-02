import { Component } from "react";
import React from "react";
import { authInit } from "../functions/CommonCalls";

import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormMaskedTextBox, FormInput, FormDropDownList, FormComboBox, FormDatePicker, FormPasswordInput
} from './form-component.jsx';

import {
    requiredValidator, cardValidator, cvcValidator
} from './validators.jsx'

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { Link, Redirect } from "react-router-dom";

import { cardholderstatus, langCode } from './ecomconstants';



export default class AuthInitiate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPosted: false,
            selected: 0,
            issuerGuid: null,
            cardHolderId: null,
            tranId: null,
            hkey: null,
            userId: null,
            password: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSelect = (e) => {
        this.setState({ selected: e.selected });
    }


    handleSubmit = (e) => {

        // dataItem.requestType = "Auth_Initiate";

        // console.log(dataItem)
        // console.log(dataItem.langCode.text)
        // console.log(dataItem.requestType)

        // alert(JSON.stringify(dataItem, null, 4));

        this.processForm(e)


    }



    handleSubmitOTPAuthServlet = (dataItem) => {


        console.log(dataItem)
        // console.log(dataItem.requestType)

        alert(JSON.stringify(dataItem, null, 4));




    }

    handleSubmitOTPServieURL = (dataItem) => {


        console.log(dataItem)
        // console.log(dataItem.requestType)

        alert(JSON.stringify(dataItem, null, 4));




    }



    processForm(e) {

        // const json = {
        //     cardNo : "2222220100000159" ,
        //     expDat : "012024" ,
        //     cardHolderStatus : "NW" ,
        //     cvv : "519" ,
        //     langCode : "en" ,
        //     tranId : "500000000000000000000002393711" ,
        //     hkey : "df751659-57a1-1db5-a2ab-0abddead5944" ,
        //     userId: "Test" , 
        //     password: "test123$"
        // }
        if (e) e.preventDefault();

        const json = {
            cardNo: this.refs.cardNo.value,
            expDat: this.refs.month.value + this.refs.year.value,
            cardHolderStatus: this.refs.cardHolderStatus.value,
            cvv: this.refs.cvv.value,
            langCode: this.refs.langCode.value,
            tranId: this.refs.tranId.value,
            hkey: this.refs.hkey.value,
            userId: this.refs.userId.value,
            password: this.refs.password.value
        }


        // console.log("value after auth_initiate submit button--> ", json)
        // this.setState({
        //     isPosted: true,
        //     issuerGuid: "asdfasdf",
        //     cardHolderId: "231321256500055",
        //     tranId: this.refs.tranId.value,
        //     hkey: this.refs.hkey.value
        // })

        authInit(json).then(res => {
            if (res.status === 200) {
                // res.data.issuerGuid
                // res.data.cardHolderId
                this.setState({
                    isPosted: true,
                    issuerGuid: res.data.issuerGuid,
                    cardHolderId: res.data.cardHolderId,
                    tranId: this.refs.tranId.value,
                    hkey: this.refs.hkey.value,
                    userId: this.refs.userId.value,
                    password: this.refs.password.value
                })
            }
        })



    }

    render() {
        console.log("Moving to next page", this.state.isPosted)
        return (
            <div>
                {/* , state:{item:data}} */}


                {this.state.isPosted && <Redirect to={{ pathname: "/otp", state: { issuerGuid: this.state.issuerGuid, 
                cardHolderId: this.state.cardHolderId ,hkey: this.state.hkey, tranId: this.state.tranId ,
                userId: this.state.userId, password: this.state.password} }} />}

                {/* Form Auth_Initiate  */}

                {/* month -- 01-12
                year - 4 digit */}

                <div style={{
                    width: 780,
                    margin: 'auto',
                    padding: '14px 10px',
                    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
                }}
                >
                    <h2>ECOM Test Client</h2>
                    <Link to="/OTPServiceURL">OTP Service URL</Link>

                    <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>

                        <TabStripTab title="Auth_Initiate">
                            {/* cardNo : this.refs.cardNo.value,
            expDat : this.refs.month.value+this.refs.year.value ,
            cardHolderStatus : this.refs.cardHolderStatus.value ,
            cvv : this.refs.cvv.value ,
            langCode : this.refs.langCode.value,
		    tranId : this.refs.tranId.value ,
		    hkey :this.refs.hkey.value ,
		    userId: this.refs.userId.value , 
		    password: this.refs.password.value */}
                            <label>Card Number :</label>
                            <input type="text" ref="cardNo" name="cardNo" id="cardNo"

                                placeholder="Card Number"
                                maxLength="10"
                                required /><br></br>
                            <br></br>
                            <label>Month (mm) :</label>
                            <input type="text" ref="month" name="month" id="month"

                                placeholder="mm"
                                maxLength="2"
                                required /><br></br>
                            <br></br>
                            <label>Year(yyyy) :</label>
                            <input type="text" ref="year" name="year" id="year"

                                placeholder="yy"
                                maxLength="4"
                                required /><br></br>
                            <br></br>
                            <label>card Holder Status :</label>
                            <select ref="cardHolderStatus" name="cardHolderStatus" id="cardHolderStatus"

                                required>
                                {cardholderstatus()}
                            </select><br></br>
                            <br></br>
                            <label>cvv :</label>
                            <input type="text" ref="cvv" name="cvv" id="cvv"

                                placeholder="cvv"
                                maxLength="3"
                                required /><br></br>
                            <br></br>
                            <label>langCode :</label>
                            <select ref="langCode" name="langCode" id="langCode"

                                required>
                                {langCode()}
                            </select><br></br>
                            <br></br>


                            <label>tranId :</label>
                            <input type="text" ref="tranId" name="tranId" id="tranId"

                                placeholder="Transaction ID"

                                required /><br></br>
                            <br></br>



                            <label>hkey :</label>
                            <input type="text" ref="hkey" name="hkey" id="hkey"

                                placeholder="H - key"

                                required /><br></br>
                            <br></br>


                            <label>userId:</label>
                            <input type="text" ref="userId" name="userId" id="userId"

                                placeholder="User ID"
                                maxLength="10"
                                required /><br></br>
                            <br></br>


                            <label>password :</label>
                            <input type="password" ref="password" name="password" id="password"

                                placeholder="Password"
                                maxLength="10"
                                required /><br></br>
                            <br></br>
                            <button className="button float-right" onClick={this.handleSubmit} >Submit</button>


                        </TabStripTab>
                        <TabStripTab title="Auth_Result">
                            <p>Tab 2 Content</p>
                        </TabStripTab>
                        <TabStripTab title="OTP Service URL">
                            <Form
                                onSubmit={this.handleSubmitOTPServieURL}
                                render={(formRenderProps) => (
                                    <FormElement style={{ width: 500 }} horizontal={true}>
                                        <fieldset className={'k-form-fieldset'}>
                                            {/* <legend className={'k-form-legend'}>Ecom Test Client</legend> */}

                                            {/* <Field
                                id={'requestType'}
                                name={'requestType'}
                                label={'Request Type'}
                                component={FormDropDownList}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                            {/* private String cardNo;

private String expDate;

private String cardHolderStatus;

private String cvv;

private String langCode;

private String tranId;

private String hkey;

private String userId;

private String password;

private String requestType; */}

                                            {/* <Field
                                id={'requesttype'}
                                name={'requesttype'}
                                label={'Request Type'}
                                component={FormComboBox}
                                textField={'text'}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                            <Field
                                                id={'AccuCardholderId'}
                                                name={'AccuCardholderId'}
                                                label={'AccuCardholderId'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'AccuGuid'}
                                                name={'AccuGuid'}
                                                label={'AccuGuid'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'session'}
                                                name={'session'}
                                                label={'session'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'AccuReturnURL'}
                                                name={'AccuReturnURL'}
                                                label={'AccuReturnURL'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'AccuRequestId'}
                                                name={'AccuRequestId'}
                                                label={'AccuRequestId'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />





                                            <div className="k-form-buttons">
                                                <Button
                                                    primary={true}
                                                    type={'submit'}
                                                    disabled={!formRenderProps.allowSubmit}
                                                >
                                                    Submit
                                </Button>
                                                <Button onClick={formRenderProps.onFormReset}>
                                                    Clear
                                </Button>
                                            </div>
                                        </fieldset>
                                    </FormElement>
                                )}
                            />
                        </TabStripTab>
                        <TabStripTab title="OTP Auth Servlet">
                            <Form
                                onSubmit={this.handleSubmitOTPAuthServlet}
                                render={(formRenderProps) => (
                                    <FormElement style={{ width: 500 }} horizontal={true}>
                                        <fieldset className={'k-form-fieldset'}>

                                            <Field
                                                id={'mode'}
                                                name={'mode'}
                                                label={'mode'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'cardNum'}
                                                name={'cardNum'}
                                                label={'cardNum'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'customerPin'}
                                                name={'customerPin'}
                                                label={'customerPin'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />

                                            <Field
                                                id={'guid'}
                                                name={'guid'}
                                                label={'guid'}
                                                hint={'Hint: Hint message aligned start'}
                                                component={FormInput}
                                                validator={requiredValidator}
                                            />




                                            <div className="k-form-buttons">
                                                <Button
                                                    primary={true}
                                                    type={'submit'}
                                                    disabled={!formRenderProps.allowSubmit}
                                                >
                                                    Submit
                                </Button>
                                                <Button onClick={formRenderProps.onFormReset}>
                                                    Clear
                                </Button>
                                            </div>
                                        </fieldset>
                                    </FormElement>
                                )}
                            />
                        </TabStripTab>

                    </TabStrip>
                </div>



            </div>
        )
    }
}
