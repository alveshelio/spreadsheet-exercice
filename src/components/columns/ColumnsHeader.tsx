import * as React from "react"
import styled from "../../templages/styled"

const ColumnsHeaderWrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 100px);
  grid-template-rows: 30px;
  grid-gap: 2px;
  color: ${({ theme }) => theme.primary};
  border-right: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
  padding-bottom: 2px;
`

interface OwnProps {
  children: React.ReactNode
  columns: number
}

const ColumnsHeader: React.SFC<OwnProps> = ({ children, columns }) => (
  <ColumnsHeaderWrapper columns={columns}>{children}</ColumnsHeaderWrapper>
)

export default ColumnsHeader
