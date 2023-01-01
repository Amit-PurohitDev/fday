import { combineReducers } from 'redux';
import postMessage from './rootReducers';

const reducer = combineReducers({
    postMessage
});

export default reducer;