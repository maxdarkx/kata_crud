import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "../Store";
import HOST_API from "../HOST_API";
import { useContext, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { Form } from './todocomponents/Form';
import List from './todoComponents/List';


const FormCategories = () => {
    

    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
    const {register, errors, handleSubmit} = useForm();

    const onAdd = (event) => {
        event.preventDefault();
  
        const request = {
            nameCategoria: state.nameCategoria,
            id: null,
        };
  
  
        fetch(HOST_API + "/categoria", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((todo) => {
            dispatch({ type: "add-categoria", item: categoria });
            setState({ name: "" });
            formRef.current.reset();
        });
    }
  
    
  
    return (
        <form ref={formRef} className="form">
    
        <input
            type="text"
            name="name"
            //ref={register=(required)}
            placeholder="¿Qué piensas hacer hoy?"
            defaultValue={item.name}
            className="form-control"
            onChange={(event) => {
                setState({ ...state, name: event.target.value })
            }}  
            >
        </input>
        {!item.id && <button onClick={onAdd} className="btn btn-success">Crear nueva lista</button>}

    </form>)
}



  {/*generar los dip de las listas vacias
traer todass las filtrar
encontrar para filtrar por categoria*/}