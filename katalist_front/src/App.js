import React, { Children, Fragment } from 'react';
import StoreProvider from './components/StoreProvider';
import Form from './components/todoComponents/Form';
import List from './components/todoComponents/List';

const TodoList = (props) =>
{
  return(  
            <StoreProvider>
            <h1>Categorias{props.name}</h1>
              <div className="containter input-group mb-3">
                <table>
                  <tr>
                    <th><Form/></th>
                  </tr>
                  <tr>
                    <th><List/></th>
                  </tr>
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