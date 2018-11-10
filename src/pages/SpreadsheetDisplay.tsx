import * as React from "react"

import styled from "../templages/styled"
import MainTemplate from "../templages/MainTemplate"
import ColumnNamesContainer from "../components/columns/ColumnNamesContainer"
import RowNamesDisplay from "../components/rows/RowNumbersDisplay"
import CellsContainer from "../components/cells/CellsContainer"
import ContentDisplay from "../components/content/ContentDisplay"

const SpreadSheetPage = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: 50px auto;
  max-height: 100vh;
`

interface StateToProps {
  numberOfColumns: number
  numberOfRows: number
}

interface DispatchToProps {
  buildColumns: () => void
}

type SpreadsheetProps = StateToProps & DispatchToProps

export default class SpreadSheet extends React.Component<SpreadsheetProps> {
  componentDidMount() {
    this.props.buildColumns()
  }

  render() {
    return (
      <MainTemplate>
        <SpreadSheetPage>
          <RowNamesDisplay numberOfRows={this.props.numberOfRows} />
          <ContentDisplay>
            <ColumnNamesContainer />
            <CellsContainer />
          </ContentDisplay>
        </SpreadSheetPage>
      </MainTemplate>
    )
  }
}