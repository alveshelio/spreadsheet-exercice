import * as React from "react"

import ColumnsHeader from "./ColumnsHeader"
import ColumnItem from "./ColumnItem"

interface OwnProps {
  numberOfColumns: number
}

interface OwnState {
  columnNames: string[]
}
class Columns extends React.PureComponent<OwnProps, OwnState> {
  state: OwnState = {
    columnNames: [],
  }

  buildColumns = (numberOfColumns: number = 50) => {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]

    if (numberOfColumns > 500) {
      numberOfColumns = 500
    }
    const rowIndex = Math.floor(numberOfColumns / alphabet.length)
    const rowNames = []
    let columns = alphabet.length

    for (let i = 0; i <= rowIndex; i++) {
      for (let col = 0; col < columns; col++) {
        console.log("col", col)
        console.log("columns", columns)
        if (i === 0) {
          rowNames.push(alphabet[col].toUpperCase())
        } else {
          rowNames.push(`${alphabet[i - 1].toUpperCase()}${alphabet[col].toUpperCase()}`)
        }
      }
      if (numberOfColumns - alphabet.length < alphabet.length) {
        columns = numberOfColumns - alphabet.length
      }
    }
    return rowNames
  }

  componentDidMount() {
    this.setState({ columnNames: this.buildColumns(this.props.numberOfColumns) })
  }

  render() {
    const { columnNames } = this.state
    return (
      <ColumnsHeader columns={columnNames.length}>
        {console.log(columnNames.length)}
        {columnNames.map((row: string, index: number) => {
          return <ColumnItem key={index}>{row}</ColumnItem>
        })}
      </ColumnsHeader>
    )
  }
}

export default Columns
