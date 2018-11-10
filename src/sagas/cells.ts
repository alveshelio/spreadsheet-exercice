import { takeEvery, put, fork, all, call, select } from "redux-saga/effects"
import { SpreadSheetTypes } from "../constants/spreadsheet"
import { BuildCells, Cell, HandleCellUpdate, SetCellValue } from "../types/spreadsheet"
import { SpreadsheetActions } from "../actions/spreadsheetActions"
import { getColumnNames, getNumberOfColumns, getNumberOfRows } from "../selectors/spreadsheet"

// worker
function* buildCellsWorker(action: BuildCells) {
  const cells = yield call(
    SpreadsheetActions.buildCellsHandler,
    action.numberOfColumns,
    action.numberOfRows,
    action.columnNames
  )
  yield put(SpreadsheetActions.setCells(cells))
}

// Worker
function* setCellValueWorker(action: SetCellValue) {
  yield console.warn("will update cell value", action)
  const numberOfRows = yield select(getNumberOfRows)
  const columns = yield select(getColumnNames)
  if (SpreadsheetActions.isValidCell(columns, numberOfRows, action.value, action.col, action.row)) {
    yield console.warn("will update cell")
  }
  yield put(SpreadsheetActions.setCellValue(action.col, action.row, action.value))
}

// Watcher
function* buildCellsWatcher() {
  yield takeEvery(SpreadSheetTypes.BUILD_CELLS, buildCellsWorker)
}

// Watcher
function* setCellValueWatcher() {
  yield takeEvery(SpreadSheetTypes.HANDLE_CELL_UPDATE, setCellValueWorker)
}

export default function* rootCellsSaga() {
  yield all([fork(buildCellsWatcher), fork(setCellValueWatcher)])
}
