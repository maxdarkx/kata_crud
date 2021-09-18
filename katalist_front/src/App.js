import React, { Fragment } from 'react';
import StoreProvider from './components/StoreProvider';
import FormCategorias from './components/FormCategorias';
import {ListCategorias} from './components/ListCategorias';


const TodoList = (props) =>
{
  return(  
            <StoreProvider>
            <h1>Categorias{props.name}</h1>
              <div className="containter input-group mb-3">
                <table>
                  <tbody>
                    <tr>
                      <td><FormCategorias/></td>
                    </tr>
                    <tr>
                      <td><ListCategorias/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </StoreProvider>)
            
}

function App() {
  
  return(  <>
            <TodoList />
          </>)
}

export default App;