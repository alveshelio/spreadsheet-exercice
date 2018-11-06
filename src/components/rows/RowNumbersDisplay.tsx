import * as React from "react"

import RowNumbersColumn from "./RowNumbersColumn"
import RowNumbersItem from "./RowNumbersItem"

interface OwnProps {
  numberOfRows: number
}

interface OwnState {
  rowNames: string[]
}

class RowsContainer extends React.PureComponent<OwnProps, OwnState> {
  state: OwnState = {
    rowNames: [],
  }
  buildRows = (numberOfRows: number) => {
    const rowNames: string[] = []
    for (let i = 1; i <= numberOfRows; i++) {
      rowNames.push(`${i}`)
    }
    return rowNames
  }

  componentDidMount() {
    this.setState({ rowNames: this.buildRows(this.props.numberOfRows) })
  }

  render() {
    const { rowNames } = this.state
    return (
      <RowNumbersColumn>
        {rowNames.map((row: string, index: number) => (
          <RowNumbersItem key={index}>{row}</RowNumbersItem>
        ))}
      </RowNumbersColumn>
    )
  }
}

export default RowsContainer
