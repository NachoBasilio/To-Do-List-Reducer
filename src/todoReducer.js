


const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add Todo":
            return [...state, action.payload];
        case "delete Todo":
            return state.filter((todo) => todo.id !== action.payload);
        case "toggle Todo":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
}

 export default todoReducer