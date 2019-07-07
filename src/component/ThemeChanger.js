import React from 'react';
import Select from 'react-select';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmDailog from "react-confirm-bootstrap";

var DatePicker = require("react-bootstrap-date-picker");
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

class ThemeChanger extends React.Component {

    state = {
        email: null,
        gender: null,
        dateOfBirth: null,
        country: null,
        reason: null
    }

    dateChangeHandler = (value, formattedValue) => {
        this.setState({
            dateOfBirth: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        });
        console.log(JSON.stringify({ ...this.state }));
    }

    handleChange = (selectedOption, meta) => {
        const { name } = meta;
        this.setState({ [name]: selectedOption.value });
        console.log(JSON.stringify({ ...this.state }));
    };

    handFormSubmit = () => {
        return null;
    }

    inputChangedHandler = (event) => {
        if (event && event.target) {
            const { name, value } = event.target;
            this.setState({ [name]: value });
        }
        console.log(JSON.stringify({ ...this.state }));
    };

    reasonChangedHandler = (event) => {
        if (event && event.target) {
            this.setState({ reason: event.target.value });
        }
    }

    buildRejectReason = () => {
        return (
            <div class="form-group">
                <label className="col-sm-12 control-label"> Are you sure want to continue?</label>
                <div className="radio form-inline col-sm-10" value={this.state.reason} onChange={this.reasonChangedHandler} >
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name="optoin" value="Option 1" />
                        <label className="form-check-label"> Option 1</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name="optoin" value="Option 2" />
                        <label className="form-check-label"> Option 2</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name="optoin" value="Option 3" />
                        <label className="form-check-label"> Option 3</label>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }

    render() {

        const genderOptions = [
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
            { label: "Other", value: "O" }
        ];

        const countryOptions = [];
        for (let country in countries.getNames("en")) {
            countryOptions.push({ label: countries.getName(country, "en"), value: country });
        }
        const buttonList =
            <div className="box-body">
                <div className="form-group">
                    <ConfirmDailog onConfirm={() => this.handFormSubmit}
                        confirmBSStyle="danger"
                        body="Please click on confirm to continue!"
                        title="Registration Approve Confirmation">
                        <button id="approvebtn" type="button" className="btn btn-sm btn-success btn-block"> Approve </button>
                    </ConfirmDailog>
                    <ConfirmDailog onConfirm={() => this.handFormSubmit}
                        confirmBSStyle="danger"
                        body={this.buildRejectReason}
                        title="Registration Reject Confirmation">
                        <button id="rejectbtn" type="button" className="btn btn-sm btn-danger btn-block"> Reject </button>
                    </ConfirmDailog>
                </div>
            </div>

        return (
            <div className="container">
                {/* <Container className="App">
                    <h2>Sign In</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleGender">Gender</Label>
                                <Select
                                    options={genderOptions}
                                    onChange={this.genderChangeHandler}
                                    name="gender"
                                    id="gender"
                                    isSearchable={true}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleCountry">Country</Label>
                                <Select
                                    options={countryOptions}
                                    onChange={this.countryChangeHandler}
                                    name="country"
                                    id="country"
                                    isSearchable={true}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleDob">Date of Birth</Label>
                                <DatePicker id="dob" value={this.state.dateVal} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <DatePicker id="dob1" value={this.state.dateVal} onChange={this.handleChange} />
                        <Button>Submit</Button>
                    </Form>
                </Container> */}

                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="box display-table">
                                <div className="box-header with-border"> <h3 className="box-title">Registration Form</h3>
                                </div>
                                <div className="box-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address:</label>
                                            <input type="email" className="form-control" name="email" id="email" onChange={this.inputChangedHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dob">Date of Birth:</label>
                                            <DatePicker name="dateOfBirth"
                                                id="dateOfBirth"
                                                value={this.state.dateOfBirth}
                                                onChange={this.dateChangeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="gender">Gender:</label>
                                            <Select
                                                options={genderOptions}
                                                // onChange={(event, meta) => this.handleChange(event, meta)}
                                                onChange={
                                                    (event, meta) => {
                                                        meta.name = "gender";
                                                        this.handleChange(event, meta);
                                                    }}
                                                name="gender"
                                                id="gender"
                                                isSearchable={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="country">Country:</label>
                                            <Select
                                                options={countryOptions}
                                                onChange={(event, meta) => {
                                                    meta.name = "country";
                                                    this.handleChange(event, meta);
                                                }}
                                                name="country"
                                                id="country"
                                                isSearchable={true}
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" /> Remember me</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                {buttonList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default ThemeChanger;