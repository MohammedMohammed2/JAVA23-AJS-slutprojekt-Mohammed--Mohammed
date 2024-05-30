import { ref, update } from "firebase/database";
import { db } from "../utils/firebaseConfig";


function InProgressCard({ todo }) {

    //moves an assignment from in progress into done
    function handleSubmit(event) {
        event.preventDefault();

        const updateRef = ref(db, 'assignments/' + todo.id);
        const newStatus = 'Done';



        update(updateRef, { status: newStatus })
        .then(() => { alert("The assginment:" + " " + todo.assignment + " " + "has been completed") })

    }

    if (todo.status == 'in Progress') {
        return (
            <form onSubmit={handleSubmit} id={todo.category}>
                <h2>{todo.assignment}</h2>
                <h3>{todo.category}</h3>
                <h4>{todo.assigned}</h4>
                <button>Done</button>
            </form>);
    }
}
export default InProgressCard;