import React, { Component } from 'react';
import './App.css';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index'

class App extends Component {

  constructor(props) {
    super(props)
  }

  onToggleForm = () => {
    let { taskEditting } = this.props;
    if (taskEditting && taskEditting.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  findIndex = (id) => {
    const { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onShowForm = () => {
    this.props.onShowForm();
  }

  render() {
    let isDisplayForm = this.props.isDisplayForm;
    return (
      <div className="container">
        <div className="text-center">
          <h1>Management Task Application</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Task Form */}
            <TaskForm />
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Add New Job
                  </button>
            {/* Task Control  */}
            <TaskControl />
            {/* Task List  */}
            <TaskList />
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditting: state.taskEditting
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onShowForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
