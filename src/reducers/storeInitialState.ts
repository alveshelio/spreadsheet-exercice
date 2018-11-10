import { StoreState } from "../types/spreadsheet"

const storeInitialState: StoreState = {
  spreadsheet: {
    columnNames: [],
    numberOfColumns: 50,
    numberOfRows: 25,
    selectedCells: [],
    cells: [],
  },
}

export default storeInitialState
