export const FETCHSTART = 'fetchStart';
export const FETCHSUCCESS = 'fetchSuccess';
export const FETCHERROR = 'fetchError';
export const SENDING = '';
export const SENDSUCCESS = '';
export const SENDFAIL = '';

export function fetchStart(){
  return{
    type: FETCHSTART
  }
}

export function fetchSuccess(state){
  return{
    type: FETCHSUCCESS,
    payload: state,
  }
}

export function fetchError(error){
  return{
    type: FETCHERROR,
    payload: error
  }
}

export function posting() {
  return {
    type: SENDING,
  }
}

export function postSuccess(response) {
  return {
    type: SENDSUCCESS,
    payload: response
  }
}

export function postFailed(response) {
  return {
    type: SENDFAIL,
    payload: response
  }
}

export function fetching(){
  return (dispatch) => {
    dispatch(fetchStart());
    fetch(`https://stream-vanadium.glitch.me/messages`)
      // .then(response => {
      //   if(response.status !== 200){
      //     dispatch(fetchError(response.status))
      //   }
      // })
      .then(response => response.json())
      .then(response => dispatch(fetchSuccess(response.messages)))
  }
}