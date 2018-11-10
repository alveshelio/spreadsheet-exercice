import { connect } from "react-redux"
import { Dispatch } from "redux"

import SpreadsheetDisplay from "./SpreadsheetDisplay"
import { SpreadsheetActions } from "../actions/spreadsheetActions"
import { StoreState } from "../types/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: state.spreadsheet.numberOfColumns,
  numberOfRows: state.spreadsheet.numberOfRows,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  buildColumns(numberOfColumns: number) {
    dispatch(SpreadsheetActions.buildColumns(numberOfColumns))
  },
})

const SpreadsheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpreadsheetDisplay)

export default SpreadsheetContainer
