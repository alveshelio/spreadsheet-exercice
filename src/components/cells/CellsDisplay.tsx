import * as React from "react"

import styled from "../../templages/styled"
import CellItem from "./CellItem"

interface OwnProps {
  columns: number
  rows: number
}

interface Cell {
  x: number
  y: number
  value: any
}

interface OwnState {
  cells: Cell[]
}

const CellsWrapper = styled.div<OwnProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 100px);
  grid-auto-rows: 30px;
  grid-gap: 2px;
  border-right: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  max-height: calc(100vh - 60px);
`

class CellsContainer extends React.PureComponent<OwnProps, OwnState> {
  state: OwnState = {
    cells: [],
  }

  buildCells = (columns: number, rows: number) => {
    const cells = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        cells.push({ x: c, y: r, value: "" })
      }
    }
    this.setState({ cells })
  }

  onCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("cell", e.target)
  }

  componentDidMount() {
    this.buildCells(this.props.columns, this.props.rows)
  }

  render() {
    const { cells } = this.state
    return (
      <CellsWrapper columns={this.props.columns} rows={this.props.rows}>
        {cells.map((cell: Cell) => (
          <CellItem key={`${cell.y}-${cell.x}`} onClick={this.onCellClick}>
            {cell.value}
          </CellItem>
        ))}
      </CellsWrapper>
    )
  }
}

export default CellsContainer
