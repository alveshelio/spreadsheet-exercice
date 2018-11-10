import { SpreadSheetTypes } from "../constants/spreadsheet"
import {
  BuildCells,
  BuildColumns,
  Cell,
  HandleCellUpdate,
  SelectCell,
  SetCells,
  SetCellValue,
  SetColumns,
} from "../types/spreadsheet"
import { getCellValue } from "../selectors/spreadsheet"

const buildColumns = (numberOfColumns: number): BuildColumns => ({
  type: SpreadSheetTypes.BUILD_COLUMNS,
  numberOfColumns,
})

const setColumns = (columnNames: string[]): SetColumns => ({
  type: SpreadSheetTypes.SET_COLUMNS,
  columnNames,
})

const buildCells = (
  numberOfColumns: number,
  numberOfRows: number,
  columnNames: string[]
): BuildCells => ({
  type: SpreadSheetTypes.BUILD_CELLS,
  numberOfColumns,
  numberOfRows,
  columnNames,
})

const setCells = (cells: Cell[]): SetCells => ({
  type: SpreadSheetTypes.SET_CELLS,
  cells,
})

const handleCellUpdate = (col: string, row: number): HandleCellUpdate => ({
  type: SpreadSheetTypes.HANDLE_CELL_UPDATE,
  col,
  row,
})

const setCellValue = (col: string, row: number, value: string): SetCellValue => ({
  type: SpreadSheetTypes.SET_CELL_VALUE,
  col,
  row,
  value,
})

const selectCell = (): SelectCell => ({
  type: SpreadSheetTypes.SELECT_CELL,
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

export const buildCellsHandler = (
  numberOfColumns: number,
  numberOfRows: number,
  columnNames: string[]
): Cell[] => {
  const cells: Cell[] = []
  for (let row = 1; row <= numberOfRows; row++) {
    for (const columnName of columnNames) {
      cells.push({ col: columnName, row, value: "" })
    }
  }
  return cells
}

const buildRowsHandler = (numberOfRows: number) => {
  const rowNames: number[] = []
  for (let i = 1; i <= numberOfRows; i++) {
    rowNames.push(i)
  }
  return rowNames
}

const isValidCell = (
  columns: string[],
  numberOfRows: number,
  value: string,
  col: string,
  row: number
) => {
  const valueChars = value.split("")
  if (valueChars[0] === "=") {
    const numberVal = value.match(/\d/g)
    const colName = value.match(/[A-Za-z]/g).join()
    const rowNumber = parseInt(numberVal.join(""), 10)
    return rowNumber >= 0 && rowNumber <= numberOfRows && columns.includes(colName as string)
  }
}

export const SpreadsheetActions = {
  buildColumns,
  setColumns,
  buildColumnNamesHandler,
  buildCells,
  setCells,
  buildCellsHandler,
  selectCell,
  handleCellUpdate,
  setCellValue,
  buildRowsHandler,
  isValidCell,
}
