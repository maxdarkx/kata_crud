import Store from './Store';
import React, { useContext, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FormCategorias from './FormCategorias';
import List from './List';
import HOST_API from "./HOST_API";

const ListCategorias = () => {
    const { dispatch, state: { categoria } } = useContext(Store);
    const currentCategoria = categoria.List;
  
    useEffect(() => {
        fetch(HOST_API + "/categoria")
            .then(response => response.json())
            .then((categoria) => {
                dispatch({ type: "add-categoria", categoria })
            })
    }, [dispatch]);

const onDelete = (id) => {
        fetch(HOST_API + "/categoria/"+id, {
            method: "DELETE"
            }).then((categoria) => {
                dispatch({ type: "delete-categoria", id })
            })
    };
  
    /*const onEdit = (categoria) => {
        dispatch({ type: "edit-categoria", item: categoria })
    };*/
 
    return  (<div>
        {currentCategoria.map((item) =>{
            return(
                <div key={item.id}>
                        <div>
                            <span >Nombre de la categoria</span>
                            <input disabled = {true} value={item.name}/>
                            <button onClick = {() => onDelete(item.id)}>Eliminar</button>
                        </div>
                        <FormCategorias categoriaId = {item.id}/>
                        <List Categoria = {item.id}/>
                </div>    
                        )})}
            </div>)     
}

export default ListCategorias;