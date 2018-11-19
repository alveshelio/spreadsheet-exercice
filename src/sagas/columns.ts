import { takeEvery, put, call, fork, select, all } from "redux-saga/effects"
import { SpreadSheetTypes } from "../constants/spreadsheet"
import { SpreadsheetActions } from "../actions/spreadsheetActions"

// worker
function* buildColumnsHeader() {
  const state = yield select()

  const columnNames = yield call(
    SpreadsheetActions.buildColumnNamesHandler,
    state.spreadsheet.numberOfColumns
  )

  yield put(SpreadsheetActions.setColumns(columnNames))
  yield put(
    SpreadsheetActions.buildCells(state.spreadsheet.numberOfColumns, state.spreadsheet.numberOfRows)
  )
}

// watcher
function* buildColumnsHeaderWatcher() {
  yield takeEvery(SpreadSheetTypes.BUILD_COLUMNS, buildColumnsHeader)
}

// root
export default function* rootColumnsSaga() {
  yield all([fork(buildColumnsHeaderWatcher)])
}
