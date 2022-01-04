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
    console.log(action)
    let newData = {title : action.payload, checked : false, id : Math.random()}
    switch (action.type) {
      case actions.ADD_TODO_REQUEST:
        return {
          // Data : [...state],
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
      case actions.ADD_TODO_SUCCESS:
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: [...state.data, newData],
        };
      case actions.ADD_TODO_ERROR:
        return {
          isLoading: false,
          isSuccess: false,
          isError: true,
        };
      default:
        return state;
    }
  }

  export default addTodoReducer;