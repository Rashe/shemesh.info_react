function data(state = [], action) {
    switch (action.type) {
        // case 'INCREMENT_LIKES' :
        //   const i = action.index;
        //   return [
        //     ...state.slice(0,i), // before the one we are updating
        //     {...state[i], likes: state[i].likes + 1},
        //     ...state.slice(i + 1), // after the one we are updating
        //   ];
        case 'WINDOW_POSITION' :
            return Object.assign({}, state, {
                windowPosition: action.position
            });
        default:
            return state;
    }
}

export default data;
