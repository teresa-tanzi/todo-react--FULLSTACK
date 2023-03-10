// Components can be reused
// The function must return only one element (only one parent)
// We can pass only one element:
// props stands for properties and have a key-value pair for every item passed in
// Components can't read data from other components unless you pass in the props
function TodoRowItem(props) {
    // We need something that can help us uniquely identify each item, like the row number
    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

// To allow ut to use this component in our application
export default TodoRowItem