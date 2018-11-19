import { SpreadSheetTypes } from "../constants/spreadsheet"
import {
  BuildCells,
  BuildColumns,
  Cell,
  DeleteMultipleCellsValue,
  FetchWeather,
  Row,
  SelectMultipleCells,
  SetRows,
  SetCellValue,
  SetColumns,
  SetMultipleCellsValue,
  SetSelectedCells,
} from "../types/spreadsheet"

const buildColumns = (numberOfColumns: number): BuildColumns => ({
  type: SpreadSheetTypes.BUILD_COLUMNS,
  numberOfColumns,
})

const setColumns = (columnNames: string[]): SetColumns => ({
  type: SpreadSheetTypes.SET_COLUMNS,
  columnNames,
})

const buildCells = (numberOfColumns: number, numberOfRows: number): BuildCells => ({
  type: SpreadSheetTypes.BUILD_CELLS,
  numberOfColumns,
  numberOfRows,
})

const setRows = (rows: Row[]): SetRows => ({
  type: SpreadSheetTypes.SET_ROWS,
  rows,
})

const setCellValue = (cell: Cell): SetCellValue => ({
  type: SpreadSheetTypes.SET_CELL_VALUE,
  cell,
})

const setMultipleCellsValue = (cells: Cell[]): SetMultipleCellsValue => ({
  type: SpreadSheetTypes.SET_MULTIPLE_CELLS,
  cells,
})

const selectMultipleCells = (
  firstRowIndex: number,
  firstCellIndex: number,
  lastRowIndex: number,
  lastCellIndex: number
): SelectMultipleCells => ({
  type: SpreadSheetTypes.SELECT_MULTIPLE_CELLS,
  firstRowIndex,
  firstCellIndex,
  lastRowIndex,
  lastCellIndex,
})

const setSelectedCells = (selectedCells: Cell[]): SetSelectedCells => ({
  type: SpreadSheetTypes.SET_SELECTED_CELLS,
  selectedCells,
})

const deleteMultipleCellsValue = (selectedCells: Cell[]): DeleteMultipleCellsValue => ({
  type: SpreadSheetTypes.DELETE_MULTIPLE_CELLS_VALUE,
  selectedCells,
})

const fetchWeather = (city: string): FetchWeather => ({
  type: SpreadSheetTypes.FETCH_WEATHER,
  city,
})

const buildColumnNamesHandler = (numberOfColumns: number = 50) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  if (numberOfColumns > 500) {
    numberOfColumns = 500
  }
  const rowIndex = Math.floor(numberOfColumns / alphabet.length)
  const rowNames = []
  let columns = alphabet.length

  for (let i = 0; i <= rowIndex; i++) {
    for (let col = 0; col < columns; col++) {
      if (i === 0) {
        rowNames.push(alphabet[col].toUpperCase())
      } else {
        rowNames.push(`${alphabet[i - 1].toUpperCase()}${alphabet[col].toUpperCase()}`)
      }
    }
    if (numberOfColumns - alphabet.length < alphabet.length) {
      columns = numberOfColumns - alphabet.length
    }
  }
  return rowNames
}

export const buildCellsHandler = (numberOfColumns: number, numberOfRows: number): Row => {
  const rows: any = {}
  let cells: Cell[] = []

  for (let row = 1; row <= numberOfRows; row++) {
    for (let col = 0; col < numberOfColumns; col++) {
      cells.push({ rowIndex: row, cellIndex: col, value: "", selected: false })
    }
    rows[row] = cells
    cells = []
  }
  return rows
}

const buildRowsHandler = (numberOfRows: number) => {
  const rowNames: number[] = []
  for (let i = 1; i <= numberOfRows; i++) {
    rowNames.push(i)
  }
  return rowNames
}

export const SpreadsheetActions = {
  buildColumns,
  setColumns,
  buildColumnNamesHandler,
  buildCells,
  setCells: setRows,
  buildCellsHandler,
  selectMultipleCells,
  setSelectedCells,
  setCellValue,
  setMultipleCellsValue,
  buildRowsHandler,
  fetchWeather,
  deleteMultipleCellsValue,
}
