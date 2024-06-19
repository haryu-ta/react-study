const countReducer = (state,action) => {
    const newState = {...state};
    switch(action.type){
        case "up":
            newState.count = newState.count + newState.step;
            return newState;
        case "down":
            newState.count = newState.count - newState.step;
            return newState;
        case "change":
            newState.step = parseInt(action.payload);
            return newState;
    }

}
export default countReducer;