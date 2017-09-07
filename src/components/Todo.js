import React from 'react';
import { Button } from 'reactstrap';

const Todo = ({todo, remove}) => {
    return(
        <li>
            {todo.text}
            <Button color="danger" type="button" onClick={(e) => remove(todo.id)}>remove task</Button>
        </li>
    );
}
export default Todo;