import styled from "styled-components";
import {StyledCommon} from "../../style/styled-common";
import page = StyledCommon.page;
import Space from "src/components/Space";
import pageElement = StyledCommon.pageElement;
import {useState} from "react";
import {MockApi} from "src/api-map/mock-api";
import sinteringMachines = MockApi.sinteringMachines;
import Header from "./Header";
import Legend from "./Legend";
import { SinteringMachines } from "./SinteringMachines";



const MainScreen = ()=>{
  
  const [machines, setMachines] = useState(sinteringMachines)
  
  return <Page>
    <Space h={16}/>
    <PageElement>
      <MainCard>
        <Header/>
        <Legend/>
        <SinteringMachines.SinteringMachinesView machines={machines}/>
      </MainCard>
    </PageElement>
    <Space h={16}/>
  </Page>
}
export default MainScreen


const Page = styled.main`
  ${page};
`
const PageElement = styled.div`
  ${pageElement}
`

const MainCard = styled.section`
  width: 100%;
  height: fit-content;
  padding-bottom: 16px;
  background: white;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
  overflow: hidden;
`

