import { useEffect, useState } from "react";
import { assignmentsRef } from "../utils/firebaseConfig";
import { ref, onValue } from "firebase/database";
import DoneCard from "./DoneCard";
import AddToDoList from "./AddToDoList";
import InProgressCard from "./InProgressCard";
import ToDoCard from "./ToDoCard";


function DisplayFirebase() {

    const [todos, setToDos] = useState([]);

    const [error, setError] = useState('');

    //gets data from firebase api and sets it in the todos variable
    useEffect(() => {
        onValue(assignmentsRef, (snapshot => {
            try {
                const toDosArray = Object.entries(snapshot.val())
                    .map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                setToDos(toDosArray)
                console.log(toDosArray)
            } catch {
                return (setError('true'))
            }
        }))
    }, [])

    if (error == 'true') {
        return (<div><h1>something went wrong try again later</h1></div>);
    }
    else {
        return (
            <div>
                <AddToDoList />
                <h1 id="error">{error}</h1>
                <div id="wraper">
                    <div id="toDo">
                        <h1>ToDo</h1>
                        {todos.map(todo => <ToDoCard key={todo.id} todo={todo} />)}
                    </div>
                    <div id="done">
                        <h1>Done</h1>
                        {todos.map(todo => <DoneCard key={todo.id} todo={todo} />)}
                    </div>
                    <div id="inProgress">
                        <h1>In Progress</h1>
                        {todos.map(todo => <InProgressCard key={todo.id} todo={todo} />)}
                    </div>
                </div>
            </div>);
    }
}

export default DisplayFirebase;