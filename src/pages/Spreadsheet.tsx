import * as React from "react"

import styled from "../templages/styled"
import MainTemplate from "../templages/MainTemplate"
import ColumnNamesContainer from "../components/columns/ColumnNamesDisplay"
import RowNamesDisplay from "../components/rows/RowNumbersDisplay"
import CellsDisplay from "../components/cells/CellsDisplay"
import ContentDisplay from "../components/content/ContentDisplay"

const SpreadSheetPage = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: 50px auto;
  max-height: 100vh;
`

const SpreadSheet = () => (
  <MainTemplate>
    <SpreadSheetPage>
      <RowNamesDisplay numberOfRows={50} />
      <ContentDisplay>
        <ColumnNamesContainer numberOfColumns={50} />
        <CellsDisplay columns={50} rows={50} />
      </ContentDisplay>
    </SpreadSheetPage>
  </MainTemplate>
)

export default SpreadSheet
