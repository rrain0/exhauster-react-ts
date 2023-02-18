import styled, {keyframes} from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import row = StyledCommon.row;
import resetButton = StyledCommon.resetButton;
import center = StyledCommon.center;
import Arrow1Right from "../icons/Arrow1Right";
import Space from "../Space";
import ThreeDotsIc from "../icons/ThreeDotsIc";
import CautionRoundIc from "../icons/CautionRoundIc";
import {useState} from "react";
import {Utils} from "../../utils/utils";
import WaterDropIc from "../icons/WaterDropIc";
import BearerIc from "../icons/BearerIc";
import ThermometerIc from "../icons/ThermometerIc";
import RadioIc from "../icons/RadioIc";


function ExhausterCard(){
  
  return <Exhauster>
    <Header.Header/>
    <MainContentFrame>
      <Space h={10}/>
      <RotorTitle.Row />
      <Space h={15}/>
      <Line/>
      <Space h={15}/>
      <RotorReplacement.Card />
      <Space h={15}/>
      
      <DropDownList.List/>
      
      <Space h={15}/>
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
    <Row>
      <TimePassed>6 сут</TimePassed>
      <Forecast>
        <ForecastTitle>Прогноз</ForecastTitle>
        { true && <CautionYellow/> } {/* 10- дней */}
        { false && <CautionRed/> } {/* 3- дней */}
        <ForecastTime>12 сут</ForecastTime>
      </Forecast>
    </Row>
    </Card_>
  }
  const Card_ = styled.div`
    background: #FAFAFA;
    border-radius: 4px;
    padding: 5px 20px;
    ${col};
    gap: 7px;
  `
  const Row = styled.div`
    ${row};
    gap: 15px;
    align-items: center;
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
    display: grid;
    gap: 1px 4px;
    grid: 't  i'
          'tm tm';
    place-items: center start;
  `
  const ForecastTitle = styled.div`
    grid-area: t;
    font: 400 13px/129% Roboto;
    color: #6E6E6D;
  `
  const CautionYellow = styled(CautionRoundIc).attrs({ mainColor: '#FAB82E', size: '1em' })``
  const CautionRed = styled(CautionRoundIc).attrs({ mainColor: '#EB5835', size: '1em' })``
  const ForecastTime = styled.div`
    grid-area: tm;
    font: 500 16px/129% Roboto;
    color: #565655;
  `
}

namespace DropDownList {
  import empty = Utils.empty;
  
  export function List(){
    
    const title = 'Предупреждения'
    const [isOpened, setIsOpened] = useState(false)
  
    const items: Item.ItemObj[] = [
      {
        type: 'oil',
        title: 'Уровень масла',
        oil: 'danger'
      },{
        type: 'bearer',
        title: '№ 1 п-к',
        temperature: 'caution',
        vibration: 'danger',
      },
    ]
    
    return <View>
      
      <TitleFrame onClick={()=>setIsOpened(!isOpened)}>
        <TitleButton>{ isOpened ? <ArrowOpened/> : <ArrowClosed/> }</TitleButton>
        <Title>{title}</Title>
      </TitleFrame>
  
      { isOpened && <ItemList>
        { items.map((it,i)=><Item.Item key={i} item={it}/>) }
      </ItemList> }
      
    </View>
  }
  const View = styled.section`
    ${col};
    width: 100%;
    height: fit-content;
    gap: 10px;
  `
  const TitleFrame = styled.div`
    ${row};
    gap: 6px;
    align-items: center;
    cursor: pointer;
  `
  const TitleButton = styled.button`
    ${resetButton};
    width: 20px; height: 20px;
    ${center};
    background: #EFEFEF;
    border-radius: 3px;
    cursor: pointer;
  `
  const ArrowClosed = styled(Arrow1Right).attrs({ mainColor: '#565655', size: 8 })``
  const ArrowOpened = styled(Arrow1Right).attrs({ mainColor: '#565655', size: 8 })`
    rotate: 90deg;
  `
  const Title = styled.h4`
    font: 500 13px/129% Roboto;
    color: #2B2B2A;
  `
  
  const ItemList = styled.div`
    align-self: stretch;
    height: fit-content;
    margin-left: 14px;
    ${col};
    gap: 4px;
  `
  
  namespace Item {
    export interface OilItem {
      type: 'oil'
      title: string
      oil?: empty|'ok'|'caution'|'danger'
    }
    export interface BearerItem {
      type: 'bearer'
      title: string
      temperature?: empty|'ok'|'caution'|'danger'
      vibration?: empty|'ok'|'caution'|'danger'
    }
    export type ItemObj = OilItem|BearerItem
    export interface ItemProps {
      item: ItemObj
    }
    export function Item(props: ItemProps){
      const i = props.item
    
      return <Item_>
        { i.type==='oil' && <>
          <Oil/>
          <WrapFlex1><ItemTitle>{i.title}</ItemTitle></WrapFlex1>
          { i.oil && <MarkView.MarkView mark={{ type: 'oil', state: i.oil }} /> }
        </> }
        { i.type==='bearer' && <>
          <Bearer/>
          <WrapFlex1><ItemTitle>{i.title}</ItemTitle></WrapFlex1>
          { i.temperature && <MarkView.MarkView mark={{ type: 'temperature', state: i.temperature }} /> }
          { i.vibration && <MarkView.MarkView mark={{ type: 'vibration', state: i.vibration }} /> }
        </> }
      </Item_>
    }
    const Item_ = styled.div`
      ${row};
      gap: 4px;
      background: #FAFAFA;
      border-radius: 4px;
      padding: 0 10px;
      height: 30px;
      align-items: center;
    `
    const Oil = styled(WaterDropIc).attrs({ mainColor: '#262626', size: '1em' })``
    const Bearer = styled(BearerIc).attrs({ mainColor: '#262626', size: '1em' })``
    const WrapFlex1 = styled.div`
      flex: 1;
      ${row};
    `
    const ItemTitle = styled.h5`
      font: 400 13px/129% Roboto;
      color: #262626;
    `
  
    namespace MarkView {
    
      type State = 'ok'|'caution'|'danger'
      type Type = 'temperature'|'vibration'|'oil'
      export type MarkViewProps = {
        mark: {
          type: Type
          state: State
        }
      }
      export function MarkView(props: MarkViewProps) {
        return <MarkBox state={props.mark.state}>
          { props.mark.type==='temperature' && <>
              <Symbol>T</Symbol>
              <IconBox><ThermometerIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
          </> }
          { props.mark.type==='vibration' && <>
              <Symbol>V</Symbol>
              <IconBox><RadioIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
          </> }
          { props.mark.type==='oil' && <>
              <Symbol>L</Symbol>
              <IconBox><WaterDropIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
          </> }
        </MarkBox>
      }
    
      // показатель
      const MarkBox = styled.div<{ state: 'ok'|'caution'|'danger' }>`
        ${row};
        align-items: center;
        padding: 0 5px;
        gap: 3px;
        min-width: 37px;
        height: 20px;
        background: ${p=>stateToBgcColor(p.state)};
        border: 1px solid ${p=>stateToColor(p.state)};
        border-radius: 2px;
      `
      const IconBox = styled.div`
        flex: 1;
        ${center}
      `
      function stateToColor(state: State){
        switch (state){
          case 'ok': return '#CCCCCC'
          case 'caution': return '#F69112'
          case 'danger': return '#EB5835'
        }
      }
      function stateToBgcColor(state: State){
        switch (state){
          case 'ok': return '#F4F4F4'
          case 'caution': return '#FEF1DB'
          case 'danger': return '#FCDBCB'
        }
      }
      const Symbol = styled.div`
      font: 400 13px/129% Roboto;
      color: black;
    `
    }
    
  }
  
}