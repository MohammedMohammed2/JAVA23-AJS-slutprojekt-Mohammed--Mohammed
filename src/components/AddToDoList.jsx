import { ref, push, update } from "firebase/database";
import { assignmentsRef } from "../utils/firebaseConfig";



function AddToDoList() {

//function that adds a todo assignment 
    function handleSubmit(event) {
        event.preventDefault();
        

        const category = document.getElementById('category').value;
        const assignment = document.getElementById('input').value;
        const status = 'toDo';
        

        const newAssignmentID = push(assignmentsRef).key;
        const newAssignment = {};
        newAssignment[newAssignmentID] = { status, assignment, category }
        console.log(newAssignment);


        update(assignmentsRef, newAssignment).then(()=>{alert ('The assignment' + " " + assignment +" has been added")})

        event.target.reset();

    }

    return (
        <div id="addToDo">
            <h1>Scum Board</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="task" pattern="[a-zäöåA-ZÄÖÅ ]*" id="input" required/>
                <select id="category">
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UX">UX</option>
                </select>
                <button id="Add">Add</button>
            </form>
        </div>);
}

export default  AddToDoList;