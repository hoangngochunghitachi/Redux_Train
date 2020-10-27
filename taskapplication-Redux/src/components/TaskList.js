
import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux'

class TaskList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        );
        this.setState({
            [name]: value
        });
    }

    render() {
        const tasks = this.props.tasks;
        const { filterName, filterStatus } = this.state;
        const elmTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover mt-15">
                        <thead>
                            <tr>
                                <th className="text-center">Index</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onHandleChange} />
                                </td>
                                <td>
                                    <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onHandleChange}>
                                        <option value="-1">All</option>
                                        <option value="0">Hide</option>
                                        <option value="1">Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {/* Task Item  */}
                            {/* <TaskItem /> */}
                            {elmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};
export default connect(mapStateToProps, null)(TaskList); // connect(mapStateToProps, mapDispatchToProps)(TaskList)