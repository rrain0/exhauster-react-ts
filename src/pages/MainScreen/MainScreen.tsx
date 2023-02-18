import styled from "styled-components";
import {StyledCommon} from "../../style/styled-common";
import page = StyledCommon.page;
import Space from "src/components/Space";
import pageElement = StyledCommon.pageElement;
import rowWrap = StyledCommon.rowWrap;
import center = StyledCommon.center;
import row = StyledCommon.row;
import DocumentIc from "src/components/icons/DocumentIc";
import ThermometerIc from "src/components/icons/ThermometerIc";
import RadioIc from "src/components/icons/RadioIc";
import WaterDropIc from "src/components/icons/WaterDropIc";
import ExhausterCard from "src/components/ExhausterCard/ExhausterCard";



const MainScreen = ()=>{
  
  return <Page>
    <Space h={16}/>
    <PageElement>
      <MainCard>
        <Header.Header/>
        <Legend.Legend/>
        <SinteringMachines.SinteringMachinesView/>
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

namespace Header {
  
  export const Header = ()=>{
    
    return <Frame>
      <IconBox><Icon/></IconBox>
      <Title>Главный экран</Title>
    </Frame>
  }
  
  const Frame = styled.div`
    width: 100%;
    height: fit-content;
    background: #FAFAFA;
    border-bottom: 1px solid #EAEAEA;
    ${rowWrap};
    padding: 7px 14px;
    align-items: center;
    gap: 7px 14px;
  `
  const IconBox = styled.div`
    width: 26px;
    height: 26px;
    background: #FAB82E;
    border-radius: 4px;
    ${center}
  `
  const Icon = styled(DocumentIc).attrs({
    mainColor: '#FFE3B4'
  })`
    width: 12px;
  `
  const Title = styled.h2`
    font: 500 14px/129% Roboto;
    color: black;
  `
}

namespace Legend {
  export const Legend = ()=>{
    return <Row>
      
      <Element>
        <LetterIcon>
          <Letter>T</Letter>
          <Thermometer/>
        </LetterIcon>
        <Title>Температура</Title>
      </Element>
      
      <Element>
        <LetterIcon>
          <Letter>V</Letter>
          <Radio/>
        </LetterIcon>
        <Title>Вибрация</Title>
      </Element>
      
      <Element>
        <LetterIcon>
          <Letter>L</Letter>
          <WaterDrop/>
        </LetterIcon>
        <Title>Уровень масла</Title>
      </Element>
      
      <Element>
        <YellowSquare/>
        <Title>Предупреждение</Title>
      </Element>
      
      <Element>
        <RedSquare/>
        <Title>Опасность</Title>
      </Element>
      
    </Row>
  }
  const Row = styled.section`
    ${rowWrap};
    padding: 16px;
    gap: 16px 20px;
    align-content: center;
    justify-content: end;
  `
  const Element = styled.div`
    ${row};
    gap: 8px;
    align-items: center;
  `
  const LetterIcon = styled.div`
    ${row};
    //gap: 8px;
    align-items: center;
  `
  const Letter = styled.div`
    font: 400 13px/129% Roboto;
    color: #2B2B2A;
  `
  const Thermometer = styled(ThermometerIc).attrs({ mainColor: 'black' })`
    height: 1em;
  `
  const Radio = styled(RadioIc).attrs({ mainColor: 'black' })`
    height: 1em;
    margin-left: 2px;
    translate: 0 0.04em;
  `
  const WaterDrop = styled(WaterDropIc).attrs({ mainColor: 'black' })`
    height: 1em;
  `
  const YellowSquare = styled.div`
    height: 1em;
    aspect-ratio: 1;
    background: #F9A823;
    border-radius: 2px;
  `
  const RedSquare = styled(YellowSquare)`
    background: #E32112;
  `
  const Title = styled.div`
    font: 300 13px/129% Roboto;
    color: #2B2B2A;
  `
}


namespace SinteringMachines {
  
  import col = StyledCommon.col;
  
  export function SinteringMachinesView(){
    return <MachinesList>
      
      <Machine>
        <Title>Агломашина №1</Title>
        <ExhausterList>
          <ExhausterCard/>
          <ExhausterCard/>
        </ExhausterList>
      </Machine>
      
      <Machine>
        <Title>Агломашина №2</Title>
        <ExhausterList>
          <ExhausterCard/>
          <ExhausterCard/>
        </ExhausterList>
      </Machine>
      
    </MachinesList>
  }
  
  const MachinesList = styled.section`
    ${rowWrap};
    padding: 0 16px;
    gap: 16px 48px;
  `
  const Machine = styled.div`
    ${col};
    gap: 10px;
  `
  const Title = styled.h4`
    grid-area: t;
    justify-self: stretch;
    padding: 10px 20px;
    font: 400 15px/129% Roboto;
    color: #6E6E6D;
    background: #F4F4F4;
    border-radius: 4px 4px 0px 0px;
  `
  const ExhausterList = styled.div`
    ${rowWrap};
    gap: 10px;
  `
}