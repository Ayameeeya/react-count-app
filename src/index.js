import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

// 作成されたReducerをもとにstoreを作成
// アプリケーション内部の全てのstateは、このstateに集約される
const store = createStore(reducer)

// Providerによって、storeがどのコンポーネントからも参照できるようになる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
