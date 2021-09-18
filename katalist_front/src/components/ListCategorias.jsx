import Store from './Store';
import { useContext, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HOST_API from "./HOST_API";
//import FormCategorias from './FormCategorias';
import Form from './Form';
import List from './List';

export const ListCategorias = () => {
    const { dispatch, state: { categoria } } = useContext(Store);
    const currentCategoria = categoria.list;
  
    useEffect(() => {
        fetch(HOST_API + "/categorias")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "categoria", list })
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
    console.log("hola soy una categoria:"+currentCategoria)
    return(
        
        currentCategoria.map((item) =>{
            
            return( 
                <div key={item.id}>
                        <div>
                            {/*<span >Que quieres hacer hoy?</span>*/}
                            <input disabled = {true} value={item.name}/>
                            
                            <button onClick = {() => onDelete(item.id)}>Eliminar Categoria</button>
                        </div>
                        
                        
                        <List categoriaId = {item.id}/>
                        <Form categoriaId = {item.id}/>
                </div>    
            )})
          
    )
    
}