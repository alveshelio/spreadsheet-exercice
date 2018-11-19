import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Cell, StoreState } from "../../types/spreadsheet"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"
import CellItemDisplay from "./CellItemDisplay"

const mapStateToProps = (state: StoreState) => ({
  selectedCells: state.spreadsheet.selectedCells,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedCells(selectedCells: Cell[]) {
    dispatch(SpreadsheetActions.setSelectedCells(selectedCells))
  },
  setCellValue(cell: Cell) {
    dispatch(SpreadsheetActions.setCellValue(cell))
  },
  selectMultipleCells(
    firstRowIndex: number,
    firstCellIndex: number,
    lastRowIndex: number,
    lastCellIndex: number
  ) {
    dispatch(
      SpreadsheetActions.selectMultipleCells(
        firstRowIndex,
        firstCellIndex,
        lastRowIndex,
        lastCellIndex
      )
    )
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellItemDisplay)
