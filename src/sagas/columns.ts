import { takeEvery, put, call, fork, select, all } from "redux-saga/effects"
import { SpreadSheetTypes } from "../constants/spreadsheet"
import { getNumberOfColumns, getNumberOfRows } from "../selectors/spreadsheet"
import { SpreadsheetActions } from "../actions/spreadsheetActions"

// worker
function* buildColumnsHeader() {
  const numberOfColumns = yield select(getNumberOfColumns)
  const numberOfRows = yield select(getNumberOfRows)
  const columnNames = yield call(SpreadsheetActions.buildColumnNamesHandler, numberOfColumns)
  yield put(SpreadsheetActions.setColumns(columnNames))
  yield put(SpreadsheetActions.buildCells(numberOfColumns, numberOfRows, columnNames))
}

// watcher
function* buildColumnsHeaderWatcher() {
  yield takeEvery(SpreadSheetTypes.BUILD_COLUMNS, buildColumnsHeader)
}

// root
export default function* rootColumnsSaga() {
  yield all([fork(buildColumnsHeaderWatcher)])
}
