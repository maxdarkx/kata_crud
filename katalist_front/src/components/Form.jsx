import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "./Store";
import HOST_API from "./HOST_API";
import { useContext, useRef, useState } from 'react';


export const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
  
    const onEdit = (event) => {
        event.preventDefault();
  
        const request = {
            name: state.name,
            id: item.id,
            isCompleted: item.isCompleted
        };
  
  
        fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((todo) => {
            dispatch({ type: "update-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
        });
    }


    const onAdd = (event) => {
        event.preventDefault();
  
        const request = {
            name: state.name,
            id: null,
            completed: false
        };
  
  
        fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((todo) => {
            dispatch({ type: "add-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
        });
    }
  
    
  
    return <form ref={formRef}>
        <input
            type="text"
            name="name"
            placeholder="¿Qué piensas hacer hoy?"
            defaultValue={item.name}
            onChange={(event) => {
                setState({ ...state, name: event.target.value })
            }}  >
        </input>
        {item.id && <button onClick={onEdit} className="btn btn-success">Actualizar</button>}
        {!item.id && <button onClick={onAdd} className="btn btn-success">Crear</button>}
    </form>
}