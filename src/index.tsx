import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./store/configureStore"
import storeInitialState from "./reducers/storeInitialState"
const store = configureStore(storeInitialState)
import DevTools from "./store/DevTools"

import SpreadsheetContainer from "./pages/SpreadsheetContainer"

ReactDOM.render(
  <Provider store={store}>
    <div>
      <SpreadsheetContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("app")
)
