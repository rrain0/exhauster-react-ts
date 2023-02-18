import styled, {keyframes} from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import row = StyledCommon.row;
import resetButton = StyledCommon.resetButton;
import center = StyledCommon.center;
import Arrow1Right from "../icons/Arrow1Right";
import Space from "../Space";
import ThreeDotsIc from "../icons/ThreeDotsIc";


function ExhausterCard(){
  
  return <Exhauster>
    <Header.Header/>
    <MainContentFrame>
      <Space h={10}/>
      <RotorTitle.Row />
      <Space h={15}/>
      <Line/>
      Эксгаустер
    </MainContentFrame>
  </Exhauster>
}
export default ExhausterCard

const Exhauster = styled.section`
  width: 288px;
  height: fit-content;
  ${col};
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  overflow: hidden;
`

namespace Header {
  
  export function Header(){
    return <Frame>
      { false && <IndicatorGreen/> }
      { false && <IndicatorYellow/> }
      { true && <IndicatorRed/> }
      <Title>Эксгаустер У-171</Title>
      <Button><Arrow/></Button>
    </Frame>
  }
  
  const Frame = styled.div`
    width: 100%;
    min-height: 40px;
    background: #6E6E6D;
    ${row};
    padding: 8px;
    gap: 10px;
    align-items: center;
  `
  
  const IndicatorGreen = styled.div`
    height: 26px;
    aspect-ratio: 1;
    background: #6EA566;
    border-radius: 4px;
  `
  const IndicatorYellow = styled(IndicatorGreen)`
    background: #F9A823;
  `
  const blinking = keyframes`
    0% { opacity: 1 }
    50% { opacity: 0.2 }
    100% { opacity: 1 }
  `
  const IndicatorRed = styled(IndicatorGreen)`
    background: #E32112;
    animation: ${blinking} infinite 1.5s linear;
  `
  
  const Title = styled.div`
    flex: 1;
    font: 500 15px/129% Roboto;
    color: white;
  `
  
  const Button = styled.button`
    ${resetButton};
    ${center};
    width: 26px;
    aspect-ratio: 1;
    background: #FAFAFA;
    border: 1px solid #EAEAEA;
    border-radius: 4px;
    cursor: pointer;
    &:hover, &:active, &:focus-visible, &:focus {
      border: 1px solid #EAEAEA;
    }
  `
  const Arrow = styled(Arrow1Right).attrs({
    mainColor: '#B1B1B2',
    height: 9.5,
  })``
}


const MainContentFrame = styled.div`
  ${col};
  padding: 0 10px;
`


namespace RotorTitle {
  export function Row(){
    return <Row_>
      <TitleFrame><Title>Ротор № 35к</Title></TitleFrame>
      <Date>12-02-2022</Date>
      <ThreeDotsBox>
        <ThreeDots />
      </ThreeDotsBox>
    </Row_>
  }
  const Row_ = styled.div`
    ${row};
    align-items: center;
    gap: 10px;
  `
  const Title = styled.h4`
    font: 500 15px/129% Roboto;
    color: #2B2B2A;
  `
  const TitleFrame = styled.div`
    flex: 1;
  `
  const Date = styled.div`
    width: fit-content;
    font: 400 13px/129% Roboto;
    color: black;
    padding: 4px 10px;
    background: #F4F4F4;
    border-radius: 4px;
  `
  const ThreeDotsBox = styled.div`
    width: 30px;
    height: 30px;
    margin: -7px 0;
    border-radius: 50%;
    background: none;
    ${center};
    transition: background-color 0.3s linear;
    cursor: pointer;
    &:hover {
      background: #F4F4F4;
    }
  `
  const ThreeDots = styled(ThreeDotsIc).attrs({ mainColor: 'black', height: 18 })`
  `
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #EFEFEF;
`

namespace RotorReplacement {
  export function Card(){
    return <Card_>
    <Row><Title>Последняя замена ротора</Title></Row>
    <Row><TimePassed>6 сут</TimePassed></Row>
    </Card_>
  }
  const Card_ = styled.div`
    background: #FAFAFA;
    border-radius: 4px;
    padding: 5px 20px;
    ${col}
  `
  const Row = styled.div`
    ${row};
  `
  const Title = styled.h5`
    font: 500 13px/129% Roboto;
    color: #2B2B2A;
  `
  const TimePassed = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 4px 10px;
    background: #F4F4F4;
    border-radius: 4px;
    font: 500 18px/129% Roboto;
    color: black;
  `
  const Forecast = styled.div`
  
  `
}