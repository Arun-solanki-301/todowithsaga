import * as actions from '../constant';

const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [
    { title: "Start making a presentation", checked: false, id: 1 },
    { title: "Pay for rent", checked: false, id: 2 },
    { title: "Buy a milk", checked: false, id: 3 },
    {
      title: "Don’t forget to pick up Mickael from school",
      checked: false,
      id: 4,
    },
    { title: "Buy a chocolate for Charlotte", checked: false, id: 5 },
  ],
};

  const addTodoReducer = (state = InitialState , action) => {
    console.log(action , "add todo reducer")
    switch (action.type) {
      case actions.ADD_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
          // data: [...state.data, newData],
        };
        case actions.ADD_TODO_SUCCESS:
        let newData = {title : action.payload.data, checked : false, id : Math.random()}
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: [...state.data, newData],
        };
      case actions.ADD_TODO_ERROR:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          // data: [...state.data, newData],
        };
      default:
        return state;
    }
  }

  export default addTodoReducer;