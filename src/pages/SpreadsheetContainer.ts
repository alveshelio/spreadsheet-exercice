import { connect } from "react-redux"
import { Dispatch } from "redux"

import SpreadsheetDisplay from "./SpreadsheetDisplay"
import { SpreadsheetActions } from "../actions/spreadsheetActions"
import { Cell, StoreState } from "../types/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: state.spreadsheet.numberOfColumns,
  numberOfRows: state.spreadsheet.numberOfRows,
  selectedCells: state.spreadsheet.selectedCells,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  buildColumns(numberOfColumns: number) {
    dispatch(SpreadsheetActions.buildColumns(numberOfColumns))
  },
  deleteMultipleCellsValue(selectedCells: Cell[]) {
    dispatch(SpreadsheetActions.deleteMultipleCellsValue(selectedCells))
  },
})

const SpreadsheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpreadsheetDisplay)

export default SpreadsheetContainer
