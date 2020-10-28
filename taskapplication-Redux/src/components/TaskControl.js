
import React, { Component } from "react";
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

export default class TaskControl extends Component {

    render() {
        return (
            <div className="row mt-15">
                {/* Task Search */}
                <TaskSearchControl />
                {/* Task Sort */}
                <TaskSortControl onSort={this.props.onSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
            </div>
        );
    }
}