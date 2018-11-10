import { takeEvery, fork, all } from "redux-saga/effects"

import { SpreadSheetTypes } from "../constants/spreadsheet"
import rootColumnsSaga from "./columns"
import rootCellsSaga from "./cells"

// workers
function* selectCell() {
  yield console.log("Cell selected")
}

// Watchers
function* selectCellWatcher() {
  yield takeEvery(SpreadSheetTypes.SELECT_CELL, selectCell)
}

export default function* rootSaga() {
  yield all([fork(selectCellWatcher), fork(rootColumnsSaga), fork(rootCellsSaga)])
}
