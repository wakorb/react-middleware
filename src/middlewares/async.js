const asyncMiddleware = store => next => action => {
  console.log(action);

  next(action);
};

export default asyncMiddleware;
