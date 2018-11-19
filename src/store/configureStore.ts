import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import DevTools from "./DevTools"
import rootReducer from "../reducers"
import rootSaga from "../sagas"
import { StoreState } from "../types/spreadsheet"

export default (initialState: StoreState) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      DevTools.instrument()
    )
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
