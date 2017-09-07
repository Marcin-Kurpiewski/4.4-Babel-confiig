import React from 'react';

const Title = props => {
    return (
        <div className={"style.Title"}>
            <h1>{props.title}</h1>
            <div>number of tasks  {props.number}</div>
        </div>
    );
}
export default Title;