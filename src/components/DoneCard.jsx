import { ref,remove } from "firebase/database";
import { db } from "../utils/firebaseConfig";

function DoneCard({ todo }) {

    //removes an assignment completely fromm the database
    function handleSubmit(event) {
        event.preventDefault();
        const firebaseID = todo.id;
        const userToRemoveRef = ref(db, 'assignments/' + firebaseID);
        remove(userToRemoveRef);
    }

    if (todo.status == 'Done') {
        return (
            <form onSubmit={handleSubmit} id={todo.category}>
                <h2>{todo.assignment}</h2>
                <h3>{todo.category}</h3>
                <h4>{todo.assigned}</h4>
                <button>Remove</button>
            </form>);
    }
}
export default DoneCard;