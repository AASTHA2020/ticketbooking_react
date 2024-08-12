
const localStorageMiddleware = store => next => action => {

    // Call next reducers.
    const result = next(action);

    if (action.type.startsWith('guest')) {
        const state = store.getState().guest.value;

        localStorage.setItem('guest', JSON.stringify(state));
    };

    return result;
};

export default localStorageMiddleware;
