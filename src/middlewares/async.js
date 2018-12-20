export default ({ dispatch }) => next => action => {
  //Check to see if the action has a promise
  //on its 'payload' property

  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // if it does , then wait for it to solve
  //1-get it's data and then create new action
  //with that data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });

  // if it doesn't, then send the action on the
  // next middleware
};
