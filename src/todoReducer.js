


const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add Todo":
            return [...state, action.payload];

        default:
            return state;
    }
}

 export default todoReducer