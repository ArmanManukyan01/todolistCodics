import TYPE_ACTION from "./TypeAction"

export const get = (data) => ({
    type: TYPE_ACTION.TODO.GET,
    payload: {...data}
});

export const add = (data) => ({
    type: TYPE_ACTION.TODO.POST,
    payload: data
});

export const remove = (data) => ({
    type: TYPE_ACTION.TODO.DELETE,
    payload: data
});

export const update = (data) => ({
    type: TYPE_ACTION.TODO.UPDATE,
    payload: data
});

export const complete = (data) => ({
    type: TYPE_ACTION.TODO.COMPLETE_TODO,
    payload: data
});
