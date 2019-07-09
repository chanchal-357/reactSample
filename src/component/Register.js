import React from 'react';
import Select from 'react-select';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/Register.css';
import ConfirmDailog from "react-confirm-bootstrap";
import Modal from 'react-bootstrap/es/Modal';
var DatePicker = require("react-bootstrap-date-picker");
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

class Register extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    state = {
        email: null,
        gender: "M",
        dateOfBirth: new Date("1988-08-12").toISOString().split('.')[0] + "Z",
        country: "IN",
        reason: null,
        accountValidity: new Date("2019-12-25").toISOString().split('.')[0] + "Z"
    }

    dateChangeHandler = (value, formattedValue) => {
        this.setState({
            dateOfBirth: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        });
        console.log(JSON.stringify({ ...this.state }));
    }

    handleDateChangeJq = (name, date) => {
        var change = {};
        change[name] = date;
        this.setState(change);
    };

    handleSelectChange = (selectedOption, meta) => {
        const { name } = meta;
        this.setState({ [name]: selectedOption.value });
        console.log(JSON.stringify({ ...this.state }));
    };

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

    confirmRegistration = () => {
        console.log("Request done!");
    }

    buildRejectReason = () => {
        return (
            <div className={"form-group RejectReasonDialog"}>
                <label className="col-sm-12 control-label"> Are you sure want to continue?</label>
                <div className="radio col-sm-12" value={this.state.reason} onChange={this.reasonChangedHandler} >
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
                <br />
            </div>
        );
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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
                    <ConfirmDailog
                        onConfirm={this.confirmRegistration}
                        confirmBSStyle="success"
                        body="Please click on confirm to continue!"
                        title="Registration Approve Confirmation">
                        <button id="approvebtn" type="button" className="btn btn-sm btn-success btn-block"> Approve </button>
                    </ConfirmDailog>
                    <ConfirmDailog
                        onConfirm={this.confirmRegistration}
                        confirmBSStyle="danger"
                        visible={false}
                        body={this.buildRejectReason()}
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
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-sm-4 col-form-label">Email address:</label>
                                            <div className="col-sm-8">
                                                <input type="email" className="form-control" name="email" id="email" onChange={this.inputChangedHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="dob" className="col-sm-4 col-form-label">Date of Birth:</label>
                                            <div className="col-sm-8">
                                                <DatePicker name="dateOfBirth"
                                                    id="dateOfBirth"
                                                    value={this.state.dateOfBirth}
                                                    // onChange={this.dateChangeHandler}
                                                    onChange={this.handleDateChangeJq.bind(this, 'dateOfBirth')}
                                                    dateFormat="DD/MM/YYYY" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="country" className="col-sm-4 col-form-label">Account Valid Till:</label>
                                            <div className="col-sm-8">
                                                <DatePicker
                                                    name="accountValidity"
                                                    id="accountValidity"
                                                    value={this.state.accountValidity}
                                                    // onChange={this.dateChangeHandler}
                                                    onChange={this.handleDateChangeJq.bind(this, 'accountValidity')}
                                                    dateFormat="DD/MM/YYYY"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="gender" className="col-sm-4 col-form-label">Gender:</label>
                                            <div className="col-sm-8">
                                                <Select
                                                    options={genderOptions}
                                                    value={genderOptions.filter(option => option.value === this.state.gender)}
                                                    onChange={
                                                        (event, meta) => {
                                                            meta.name = "gender";
                                                            this.handleSelectChange(event, meta);
                                                        }}
                                                    name="gender"
                                                    id="gender"
                                                    isSearchable={true}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="country" className="col-sm-4 col-form-label">Country:</label>
                                            <div className="col-sm-8">
                                                <Select
                                                    options={countryOptions}
                                                    value={countryOptions.filter(option => option.value === this.state.country)}
                                                    onChange={(event, meta) => {
                                                        meta.name = "country";
                                                        this.handleSelectChange(event, meta);
                                                    }}
                                                    name="country"
                                                    id="country"
                                                    isSearchable={true}
                                                />
                                            </div>
                                        </div>

                                        <div className="checkbox">
                                            <label className="col-sm-6 col-form-label"><input type="checkbox" /> Remember me</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                    <button type="button" className="btn btn-primary" onClick={this.handleShow}>Fill More Info</button>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                {buttonList}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}
export default Register;