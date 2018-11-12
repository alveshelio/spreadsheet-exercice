import { fork, all } from "redux-saga/effects"

import rootColumnsSaga from "./columns"
import rootCellsSaga from "./cells"

export default function* rootSaga() {
  yield all([fork(rootColumnsSaga), fork(rootCellsSaga)])
}
