import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/Register.css';
import ConfirmDailog from "react-confirm-bootstrap";
import Modal from 'react-bootstrap/es/Modal';
import DatePicker from "react-bootstrap-date-picker";
import countries from "i18n-iso-countries";
import countryJson from "i18n-iso-countries/langs/en.json";
import NavBar from './NavBar';
import { Button, TextField } from '@material-ui/core/';
// import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import SelectM from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

countries.registerLocale(countryJson);

class RegisterNew extends React.Component {

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
        dateOfBirth: new Date().toISOString().split('.')[0] + "Z",
        country: "IN",
        reason: null,
        accountValidity: new Date().toISOString().split('.')[0] + "Z",
        ageOpen: false,
        age: null
    }

    handleDateChangeJq = (name, date) => {
        var change = {};
        change[name] = date;
        this.setState(change);
    };

    handleSelectChange = (selectedOption, meta) => {
        const { name } = meta.name;
        this.setState({ [name]: selectedOption.value });
        console.log(meta, JSON.stringify({ ...this.state }));
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

    buildReactSelect = (label, name, options) => {
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-4 col-form-label">{label}:</label>
                <div className="col-sm-8">
                    <Select
                        options={options}
                        value={options.filter(option => option.value === this.state[name])}
                        onChange={
                            (selectedOption, meta) => {
                                meta.name = { name };
                                this.handleSelectChange(selectedOption, meta);
                            }}
                        name={name}
                        isSearchable={true}
                    />
                </div>
            </div>
        );
    };

    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);

    handleAgeChange = (event) => {
        this.setState({ age: event.target.value });
    };

    handleAgeClose = () => {
        this.setState({ ageOpen: false });
    };

    handleOpen = () => {
        this.setState({ ageOpen: true });
    }

    buildReactMatSelect = () => {
        return (

            <SelectM
                open={this.ageOpen}
                onOpen={this.handleOpen}
                onClose={this.handleAgeClose}
                value={this.state.age}
                onChange={this.handleAgeChange}
                inputProps={{
                    name: 'age',
                    id: 'demo-controlled-open-select',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectM>
        );
    };

    buildDatePicker = (label, name, minDate, maxDate) => {
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-4 col-form-label">{label}:</label>
                <div className="col-sm-8">
                    <DatePicker
                        name={name}
                        id={name}
                        value={this.state[name]}
                        onChange={this.handleDateChangeJq.bind(this, name)}
                        dateFormat="DD/MM/YYYY"
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
            </div>
        );
    };

    render() {
        // const styles = theme => ({
        //     container: {
        //       backgroundColor: 'blue',
        //       color: 'red',
        //       width: '75%',
        //       height: 5 * theme.spacing.unit
        //     }
        //   });
        const genderOptions = [
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
            { label: "Other", value: "O" }
        ];
        const currentDate = new Date().toISOString();
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
                <NavBar />
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="box display-table">
                                <div className="box-header with-border"> <h3 className="box-title">Fill out details</h3>
                                </div>
                                <div className="box-body">
                                    <form action="/success" method="GET">
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-sm-4 col-form-label">Email address:</label>
                                            <div className="col-sm-8">
                                                <TextField placeholder="Input your email" label="Email" name="email" onChange={this.inputChangedHandler} />
                                            </div>
                                        </div>
                                        {this.buildDatePicker("Date of Birth", "dateOfBirth", "", currentDate)}
                                        {this.buildDatePicker("Account Valid Till", "accountValidity", currentDate, "")}
                                        {this.buildReactSelect("Gender", "gender", genderOptions)}
                                        {this.buildReactSelect("Country", "country", countryOptions)}
                                        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                                        {this.buildReactMatSelect()}
                                        <div className="checkbox">
                                            <label className="col-sm-6 col-form-label"><input type="checkbox" /> Remember me</label>
                                        </div>
                                        <Button variant="contained" color="primary" mini="fab">Submit</Button>
                                    </form>
                                    <Button variant="outlined" color="default" onClick={this.handleShow}>Fill More Info</Button>
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
                        <Button variant="contained" color="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}
export default RegisterNew;