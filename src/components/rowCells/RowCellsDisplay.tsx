import * as React from "react"
import { isEqual } from "lodash"
import { Cell } from "../../types/spreadsheet"
import CellItemContainer from "../cells/CellItemContainer"

interface OwnProps {
  cells: Cell[]
}

class RowCellsDisplay extends React.Component<OwnProps> {
  shouldComponentUpdate(nextProps: OwnProps) {
    return nextProps.cells.some((cell, index) => !isEqual(this.props.cells[index], cell))
  }

  render() {
    return this.props.cells.map((cell: Cell) => (
      <CellItemContainer
        key={cell.cellIndex}
        rowIndex={cell.rowIndex}
        cellIndex={cell.cellIndex}
        value={cell.value}
        selected={cell.selected}
      >
        {cell.value}
      </CellItemContainer>
    ))
  }
}

export default RowCellsDisplay
