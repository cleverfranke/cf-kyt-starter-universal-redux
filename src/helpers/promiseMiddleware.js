export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const SUCCESS = `${type}_FULFILLED`;
    const REQUEST = `${type}_PENDING`;
    const FAILURE = `${type}_FAILED`;

    next({ ...rest, type: REQUEST });
    return promise
      .then(result => next({ ...rest, result, type: SUCCESS }))
      .catch(error => next({ ...rest, error, type: FAILURE }));
  };
}
