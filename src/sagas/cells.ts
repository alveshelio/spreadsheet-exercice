import { takeEvery, put, fork, all, call, select, takeLatest } from "redux-saga/effects"
import { SpreadSheetTypes } from "../constants/spreadsheet"
import {
  BuildCells,
  Cell,
  DeleteMultipleCellsValue,
  FetchWeather,
  SelectMultipleCells,
  SetCellValue,
} from "../types/spreadsheet"
import { SpreadsheetActions } from "../actions/spreadsheetActions"
import { fetchWeatherByCity } from "../api/weather"

/***************************************************************************************************
 *                                           Workers                                                *
 ***************************************************************************************************/

function* fetchWeatherWorker(action: FetchWeather) {
  if (action.city) {
    try {
      const temperature = yield call(fetchWeatherByCity, action.city)
      const celsiusTemp = (temperature.main.temp - 273.15).toFixed(2).toString()
      yield put(
        SpreadsheetActions.setCellValue({
          rowIndex: 1,
          cellIndex: 0,
          selected: false,
          value: `${celsiusTemp}º`,
        })
      )
    } catch {
      console.log("unable to fetch temperature")
    }
  }
}

function* buildCellsWorker(action: BuildCells) {
  const cells = yield call(
    SpreadsheetActions.buildCellsHandler,
    action.numberOfColumns,
    action.numberOfRows
  )
  yield put(SpreadsheetActions.setCells(cells))
  yield put(
    SpreadsheetActions.setCellValue({
      rowIndex: 1,
      cellIndex: 1,
      value: "Montreal",
      selected: false,
    })
  )
  yield put(SpreadsheetActions.fetchWeather("Montreal"))
}

function* setCellValueWorker(action: SetCellValue) {
  yield put(
    SpreadsheetActions.setCellValue({
      rowIndex: action.cell.rowIndex,
      cellIndex: action.cell.cellIndex,
      value: action.cell.value,
      selected: true,
    })
  )
}

/*function* selectMultipleCellsWorker(action: SelectMultipleCells) {
  const selectedCells = []
  if (action.firstCellIndex < action.lastCellIndex) {
    for (let i = action.firstCellIndex; i <= action.lastCellIndex; i++) {
      selectedCells.push("i")
    }
  } else {
    for (let i = action.lastCellIndex; i <= action.firstCellIndex; i++) {
      selectedCells.push("i")
    }
  }
  yield put(SpreadsheetActions.setSelectedCells(selectedCells))
}*/

function* deleteMultipleCellsWorker(action: DeleteMultipleCellsValue) {
  const cells: Cell[] = action.selectedCells.map(({ rowIndex, cellIndex }) => ({
    rowIndex,
    cellIndex,
    value: "",
    selected: false,
  }))
  yield put(SpreadsheetActions.setMultipleCellsValue(cells))
}

/***************************************************************************************************
 *                                           Watchers                                               *
 ***************************************************************************************************/

function* buildCellsWatcher() {
  yield takeEvery(SpreadSheetTypes.BUILD_CELLS, buildCellsWorker)
}

function* setCellValueWatcher() {
  yield takeEvery(SpreadSheetTypes.HANDLE_CELL_UPDATE, setCellValueWorker)
}

// function* selectMultipleCellsWatcher() {
//   yield takeEvery(SpreadSheetTypes.SELECT_MULTIPLE_CELLS, selectMultipleCellsWorker)
// }

function* fetchWeatherWatcher() {
  yield takeLatest(SpreadSheetTypes.FETCH_WEATHER, fetchWeatherWorker)
}

function* deleteMultipleCellsWatcher() {
  yield takeEvery(SpreadSheetTypes.DELETE_MULTIPLE_CELLS_VALUE, deleteMultipleCellsWorker)
}

export default function* rootCellsSaga() {
  yield all([
    fork(buildCellsWatcher),
    fork(setCellValueWatcher),
    // fork(selectMultipleCellsWatcher),
    fork(fetchWeatherWatcher),
    fork(deleteMultipleCellsWatcher),
  ])
}
