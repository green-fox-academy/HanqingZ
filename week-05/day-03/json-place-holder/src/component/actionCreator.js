export const FETCHSTART = 'fetchStart';
export const FETCHSUCCESS = 'fetchSuccess';
export const FETCHERROR = 'fetchError';

//const url = `https://jsonplaceholder.typicode.com/post/`;

export const fetchStart = () => ({
  type: FETCHSTART,
})

export const fetchSuccess = (state) => ({
  type: FETCHSUCCESS,
  payload: state,
})

export const fetchError = (error) => ({
  type: FETCHERROR,
  payload: error,
})

export function fetching() {
  return dispatch=> {
    dispatch(fetchStart);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      // .then(response => {
      //   if(response.status !== 200){
      //     dispatch(fetchError(response.status));
      //   }})
      .then(response => response.json())
      .then(response => dispatch(fetchSuccess(response)))
      // .catch((error)=> dispatch(fetchError(error)));
  }
}