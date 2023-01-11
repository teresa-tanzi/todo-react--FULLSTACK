import React, {useState} from "react"

function NewTodoForm() {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

//    const descriptionChange = (event) => {
//        console.log('desription', event.target.value);
//        // set the description who just changed using the state
//        setDescription(event.target.value);
//    }

    const assignedChange = (event) => {
        console.log('assigned', event.target.value);
        setAssigned(event.target.value);
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required
                    onChange={assignedChange}
                    value={assigned}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm