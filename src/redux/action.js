export const addName = (data) => {
    return {
        type: 'listName/addName',
        payload: data,
    };
};

export const editName = (nameId) => {
    return {
        type: 'listName/editName',
        payload: nameId,
    };
};

export const deleteName = (nameId) => {
    return {
        type: 'listName/deleteName',
        payload: nameId,
    }
};