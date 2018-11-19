import { connect } from "react-redux"

import InputDisplay from "./InputDisplay"
import { Cell, StoreState } from "../../types/spreadsheet"
import { Dispatch } from "redux"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"

const mapStateToProps = (state: StoreState, ownProps: Cell) => ({
  columnNames: state.spreadsheet.columnNames,
  numberOfRows: state.spreadsheet.numberOfRows,
  cellIndex: ownProps.cellIndex,
  value: ownProps.value,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCellValue(cell: Cell) {
    dispatch(SpreadsheetActions.setCellValue(cell))
  },
  fetchWeather(city: string) {
    dispatch(SpreadsheetActions.fetchWeather(city))
  },
})

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDisplay)

export default InputContainer
