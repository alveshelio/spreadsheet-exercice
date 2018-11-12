import * as React from "react"

import ColumnsHeader from "./ColumnsHeader"
import ColumnItem from "./ColumnItem"

interface StateToProps {
  columnNames: string[]
}

type ColumnsProps = StateToProps & {}

const Columns: React.SFC<ColumnsProps> = ({ columnNames }) => (
  <ColumnsHeader columns={columnNames.length}>
    {columnNames.map((row: string, index: number) => (
      <ColumnItem key={index}>{row}</ColumnItem>
    ))}
  </ColumnsHeader>
)

export default Columns
