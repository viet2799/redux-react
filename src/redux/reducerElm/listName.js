const initState = {}

const listName = (state = initState, action) => {
    switch (action.type) {
        case 'listName/addName':
            return [...state, action.payload];

        case'listName/editName':
            return [...state, action.payload];

        default:
            return state;
    }
}