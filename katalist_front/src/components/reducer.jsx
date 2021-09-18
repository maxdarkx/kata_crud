function reducer(state, action) {
    switch (action.type) {
    
      case 'add-item':
        const todoUp = state.todo.list;
        todoUp.push(action.item);
        return { ...state, todo: {list: todoUp, item: {}} }
    
      case 'update-item':
        const todoUpItem = state.todo;
        const listUpdateEdit = todoUpItem.list.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        });
        todoUpItem.list = listUpdateEdit;
        todoUpItem.item = {};
        return { ...state, todo: todoUpItem }
    
      case 'edit-item':
          const todoUpEdit = state.todo;
          todoUpEdit.item = action.item;
          return { ...state, todo: todoUpEdit }
        
      case 'delete-item':
        const todoUpDelete = state.todo;
        const listUpdate = todoUpDelete.list.filter((item) => {
          return item.id !== action.id;
        });
        todoUpDelete.list = listUpdate;
        return { ...state, todo: todoUpDelete }

      case 'update-list':
          const todoUpList = state.todo;
          todoUpList.list = action.list;
          return { ...state, todo: todoUpList }
    
//cases para categorias
      case 'add-categoria':
            const categoriaListAdd = state.categoria.list;
            categoriaListAdd.push(action.item);
            return{...state, categoriaList:{list: categoriaListAdd}};

      case 'delete-categoria':
          const categoriaListDelete = state.categoria;
          const categoriaListIsUpdate = categoriaListDelete.list.filter((item) => {
              return item.id!==action.id;
          });
          categoriaListDelete.list = categoriaListIsUpdate;
          return { ...state, categoria: categoriaListDelete }

      default:
        return state;
    }
  }
  
  export default reducer;