<Form
                            onSubmit={this.handleSubmit}
                            render={(formRenderProps) => (
                                <FormElement style={{ width: 400 }} horizontal={true}>
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

{/* 
cardNo : "2222220100000159" ,
            expDat : "012024" ,
            cardHolderStatus : "NW" ,
            cvv : "519" ,
            langCode : "en" ,
		    tranId : "500000000000000000000002393711" ,
		    hkey : "df751659-57a1-1db5-a2ab-0abddead5944" ,
		    userId: "Test" , 
		    password: "test123$" */}
                                       
                                        
                                        <Field
                                            id={'userId'}
                                            name={'userId'}
                                            ref={'userId'}
                                            label={'User Name'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'password'}
                                            name={'password'}
                                            ref={'password'}
                                            label={'Password'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormPasswordInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'cardNo'}
                                            name={'cardNo'}
                                            label={'Card Number'}
                                            ref={'cardNo'}
                                            hint={'Hint: Your Credit Card Number'}
                                            mask={'0000-0000-0000-0000'}
                                            component={FormMaskedTextBox}
                                            validator={cardValidator}
                                        />
                                       <Field
                                            id={'month'}
                                            name={'month'}
                                            label={'Month'}
                                            ref={'month'}
                                            hint={'Hint: The last 2 digits on the the Card'}
                                            mask={'00'}
                                            component={FormMaskedTextBox}
                                            validator={cvcValidator}
                                        />
                                        <Field
                                            id={'year'}
                                            name={'year'}
                                            label={'Year'}
                                            ref={'year'}
                                            hint={'Hint: The last 4 digids on the  Card'}
                                            mask={'0000'}
                                            component={FormMaskedTextBox}
                                            validator={cvcValidator}
                                        />
                                        <Field
                                            id={'cvv'}
                                            name={'cvv'}
                                            ref={'cvv'}
                                            label={'CVV Number'}
                                            hint={'Hint: The last 3 digids on the back of the Card'}
                                            mask={'000'}
                                            component={FormMaskedTextBox}
                                            validator={cvcValidator}
                                        />
                                        <Field
                                            id={'langCode'}
                                            name={'langCode'}
                                            ref={'langCode'}
                                            label={'Language Code'}
                                            component={FormComboBox}
                                            textField={'text'}
                                            data={langCode}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'cardholderstatus'}
                                            name={'cardholderstatus'}
                                            ref={'cardholderstatus'}
                                            label={'Card Holder Status'}
                                            component={FormDropDownList}
                                            data={Cardholderstatus}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'tranId'}
                                            name={'tranId'}
                                            ref={'tranId'}
                                            label={'Tran Id'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'hkey'}
                                            name={'hkey'}
                                            ref={'hkey'}
                                            label={'h-key'}
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