import { ref, update } from "firebase/database";
import { db } from "../utils/firebaseConfig";

function ToDoCard({ todo }) {

    //moves an assignment from "todo" status into "in progress" after a name has been assigned to the assignment 
    function handleSubmit(event) {

        event.preventDefault();

        const updateRef = ref(db, 'assignments/' + todo.id);
        const devName = document.getElementById(todo.id).value;
        console.log(devName)

        const assignDev = devName;
        update(updateRef, {
            assigned: assignDev,
            status: 'in Progress'
        });

    }

    if (todo.status == 'toDo') {
        return (
            <form onSubmit={handleSubmit} id={todo.category}>
                <h2>{todo.assignment}</h2>
                <h3>{todo.category}</h3>
                <input id={todo.id} type="text" pattern="[a-zäöåA-ZÄÖÅ ]*" placeholder="EnterName" required />
                <button>Add</button>
            </form>);
    }
}
export default ToDoCard;