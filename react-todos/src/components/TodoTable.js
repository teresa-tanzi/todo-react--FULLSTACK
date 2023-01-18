import TodoRowItem from './TodoRowItem';

function TodoTable(props){
    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th>Description</th>
                    <th>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem 
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber} 
                        rowDescription={todo.rowDescription} 
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable