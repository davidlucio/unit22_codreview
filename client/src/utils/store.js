
import { createStore } from 'redux';
import reducers from './reducers';

// Creates the store
// This one loads the state tree for the app to access
export default createStore(reducers);