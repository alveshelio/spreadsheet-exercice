import * as React from "react"

import RowNumbersColumn from "./RowNumbersColumn"
import RowNumbersItem from "./RowNumbersItem"
import { SpreadsheetActions } from "../../actions/spreadsheetActions"

interface OwnProps {
  numberOfRows: number
}

interface OwnState {
  rowNames: number[]
}

class RowsContainer extends React.PureComponent<OwnProps, OwnState> {
  state: OwnState = {
    rowNames: [],
  }

  componentDidMount() {
    const rowNames = SpreadsheetActions.buildRowsHandler(this.props.numberOfRows)
    console.warn("rowNames", rowNames)
    this.setState({ rowNames })
  }

  render() {
    const { rowNames } = this.state
    return (
      <RowNumbersColumn>
        {rowNames.map((row: number) => (
          <RowNumbersItem key={row}>{row}</RowNumbersItem>
        ))}
      </RowNumbersColumn>
    )
  }
}

export default RowsContainer
