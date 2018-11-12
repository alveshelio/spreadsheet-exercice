import { connect } from "react-redux"
import { Dispatch } from "redux"

import SpreadsheetDisplay from "./SpreadsheetDisplay"
import { SpreadsheetActions } from "../actions/spreadsheetActions"
import { StoreState } from "../types/spreadsheet"
import { getNumberOfColumns, getNumberOfRows, getSelectedCells } from "../selectors/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: getNumberOfColumns(state),
  numberOfRows: getNumberOfRows(state),
  selectedCells: getSelectedCells(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  buildColumns(numberOfColumns: number) {
    dispatch(SpreadsheetActions.buildColumns(numberOfColumns))
  },
  deleteMultipleCellsValue(selectedCells: number[]) {
    dispatch(SpreadsheetActions.deleteMultipleCellsValue(selectedCells))
  },
})

const SpreadsheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpreadsheetDisplay)

export default SpreadsheetContainer
