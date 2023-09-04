import { combineReducers } from 'redux';
import deviceReducer from './DeviceReducer';

const reducers = combineReducers({
  device: deviceReducer,
})

export default reducers;