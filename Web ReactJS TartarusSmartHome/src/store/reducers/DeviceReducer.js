//balance reducer
// reducer adalah function yang menerima 2 parameter
// parameter pertama itu adalah state
// parameter kedua adalah action => { type: untuk_unique_key, payload: data yang ingin diubah/ditambah}
const balanceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      console.log('mau withdraw');
      return state - action.payload;
      break;
    case 'DEPOSIT': 
      console.log("mau deposit dengan nilai: ", action.payload);
      return state + action.payload;
    default:
      return state
      break;
  }
}

export default balanceReducer;