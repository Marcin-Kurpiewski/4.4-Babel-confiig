import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }

        this.inputChange = this.inputChange.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    inputChange(e) {
        this.setState({inputValue: e.target.value});
    }

    onClickHandler(event) {
        this.props.add(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" value={this.state.inputValue} onChange={this.inputChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={(e) => this.onClickHandler(e)} >Add new task</button>
            </form>
        );
    }
};
export default TodoForm;