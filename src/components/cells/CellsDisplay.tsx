import * as React from "react"

import styled from "../../templages/styled"
import { Cell, Row } from "../../types/spreadsheet"
import RowCellsDisplay from "../rowCells/RowCellsDisplay"

interface StateToProps {
  numberOfColumns: number
  numberOfRows: number
  rows: Row
}

type CellsContainerProps = StateToProps

const CellsWrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 100px);
  grid-auto-rows: 30px;
  border-right: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  max-height: calc(100vh - 60px);
`

class CellsContainer extends React.PureComponent<CellsContainerProps> {
  renderCells = (numberOfColumns: number) => {
    if (this.props.rows) {
      const rowValues = Object.values(this.props.rows)
      return rowValues.map((cells: Cell[], index) => (
        <CellsWrapper key={index} columns={numberOfColumns}>
          <RowCellsDisplay cells={cells} />
        </CellsWrapper>
      ))
    }
    return null
  }

  render() {
    return this.renderCells(this.props.numberOfColumns)
  }
}

export default CellsContainer
