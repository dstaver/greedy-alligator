export function initApp() {
  return function (dispatch) {
    return dispatch({
        type: 'INIT',
        payload: {name:'some awesome payload'},
    });
  };
}