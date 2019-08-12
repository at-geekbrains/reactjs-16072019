import { createStore } from 'redux';

import reducer from './app/reducers';

const store = createStore(reducer);

export default store;