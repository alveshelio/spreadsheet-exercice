import { connect } from "react-redux"
import { Dispatch } from "redux"
import { StoreState } from "../../types/spreadsheet"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"
import CellItemDisplay from "./CellItemDisplay"
import { getSelectedCells } from "../../selectors/spreadsheet"

const mapStateToProps = (state: StoreState) => ({
  selectedCells: getSelectedCells(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedCells(selectedCells: number[]) {
    dispatch(SpreadsheetActions.setSelectedCells(selectedCells))
  },
  selectMultipleCells(firstCellIndex: number, lastCellIndex: number) {
    dispatch(SpreadsheetActions.selectMultipleCells(firstCellIndex, lastCellIndex))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellItemDisplay)
