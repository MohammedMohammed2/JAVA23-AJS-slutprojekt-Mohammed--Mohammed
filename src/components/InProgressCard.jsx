import { ref, update } from "firebase/database";
import { db } from "../utils/firebaseConfig";


function InProgressCard({ todo }) {

//moves an assignment from in progress into done
    function handleSubmit(event){
        event.preventDefault();
        const status = 'Done';

        const updateRef = ref(db, 'assignments/' + todo.id);
    
        const newStatus = status;
        update(updateRef, {status: newStatus});

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