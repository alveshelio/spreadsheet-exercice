import { connect } from "react-redux"
import { Dispatch } from "redux"

import CellDisplay from "./CellsDisplay"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"
import { StoreState } from "../../types/spreadsheet"
import { getCellsFromState, getNumberOfColumns, getNumberOfRows } from "../../selectors/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  numberOfColumns: getNumberOfColumns(state),
  numberOfRows: getNumberOfRows(state),
  cells: getCellsFromState(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectCell() {
    dispatch(SpreadsheetActions.selectCell())
  },
})

const CellsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellDisplay)

export default CellsContainer
