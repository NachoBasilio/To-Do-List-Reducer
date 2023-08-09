


const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ABC":
            throw new Error("Error in ABC");

        default:
            return state;
    }
}

 export default todoReducer