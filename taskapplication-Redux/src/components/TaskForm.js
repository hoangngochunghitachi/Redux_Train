
import React, { Component } from "react";

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        } else if (!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onExitForm = () => {
        this.props.onCloseForm();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onExitForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        const { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id === '' ? 'Add Job' : 'Update Job'}
                    </h3>
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onExitForm}
                    ></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onHandleChange} />
                        </div>
                        <label>Status :</label>
                        <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onHandleChange}>
                            <option value={true}>Active</option>
                            <option value={false}>Hide</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}