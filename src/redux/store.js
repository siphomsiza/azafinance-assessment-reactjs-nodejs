import { createStore,applyMiddleware} from 'redux';
import artistsReducer from '../redux/reducer/transactions';
import logger from 'redux-logger';

const middleware = [logger];
const store = createStore(artistsReducer, applyMiddleware(...middleware));
export default store;
