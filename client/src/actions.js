


export const getPosts = ()=> (dispatch) => {
    console.log("its in action");
    const act = {
        type: 'get',
        payload: 'not'
    };
    dispatch(act);
}
