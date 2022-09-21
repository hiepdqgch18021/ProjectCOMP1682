import Header from "../Header/Header";
import React, { useState } from "react";
import {FormGroup,Label,Input,Form,FormText,Button } from 'reactstrap';
import "./diary.css"


const DiaryForm = () => {
    return ( 
        <>
        <header className='sidebar'>
              <Header/>
        </header>
        <main className="main-diary-form-container">
            <section>
                <div className="container">
                    <div className="row">
                    <div className="col-3 d-none d-lg-block d-md-block "></div>

                    <div className="col-lg-6 col-md-6 col-sm-8 diary-form-container">
                        <Form>
                            <FormGroup className="mb-3-header">
                                <Label for="exampleEmail" className="form-label-header">
                                    Your Diary Today
                                </Label>
                                <FormText className="form-text-header">
                                    (Preserve your most memorable memories)
                                </FormText>
                            </FormGroup>

                            <FormGroup className="mb-3-middle">
                                <Label for="exampleDate" className="form-label-middle">
                                    Title
                                </Label>
                                <Input
                                id="exampleDate"
                                name="date"
                                placeholder="A title for today"
                                type="text"
                                />
                            </FormGroup>

                            <FormGroup className="mb-3-middle">
                                <Label for="exampleDate" className="form-label-middle">
                                    Date
                                </Label>
                                <Input
                                id="exampleDate"
                                name="date"
                                placeholder="date placeholder"
                                type="date"
                                />
                            </FormGroup>
                            
                            <FormGroup className="mb-3-middle">
                                <Label for="exampleTime" className="form-label-middle">
                                    Time
                                </Label>
                                <Input
                                id="exampleTime"
                                name="time"
                                placeholder="time placeholder"
                                type="time"
                                />
                            </FormGroup>

                            <FormGroup >
                                <Label for="exampleText">
                                    How about you today
                                </Label>
                                <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="exampleFile">
                                    Any picture which you want to Store
                                </Label>
                                <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                                />
                            </FormGroup>
                            <Button  color="primary">
                                Submit
                            </Button>
                                </Form>
                    </div> 

                    <div className="col-3 d-lg-block d-md-block"></div>                   
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <FormText>
                "Yesterday is history. Tomorrow is a mystery, but today is a gift. That’s why it’s called the present"
            </FormText>
        </footer>
        </>
     );
}
 
export default DiaryForm;
