import * as React from "react"

import styled from "../../templages/styled"

const RowNamesColumn = styled.div`
  display: grid;
  padding-top: 32px;
  grid-auto-rows: 30px;
  grid-gap: 2px;
  border-bottom: ${({ theme }) => theme.border};
  border-top: ${({ theme }) => theme.border};
  border-left: ${({ theme }) => theme.border};
`
export default RowNamesColumn
