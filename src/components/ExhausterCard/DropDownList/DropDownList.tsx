import {useState} from "react";
import Arrow1Right from "../../icons/Arrow1Right";
import WaterDropIc from "../../icons/WaterDropIc";
import BearerIc from "../../icons/BearerIc";
import ThermometerIc from "../../icons/ThermometerIc";
import RadioIc from "../../icons/RadioIc";
import styled from "styled-components";
import {StyledCommon} from "../../../style/styled-common";
import {Utils} from "../../../utils/utils";
import { Item } from "./Item";


export namespace DropDownList {
  
  import col = StyledCommon.col;
  import row = StyledCommon.row;
  import resetButton = StyledCommon.resetButton;
  import center = StyledCommon.center;
  export type DropDownListProps = {
    title: string
    items: Item.ItemType[]
  }
  export function DropDownList(props: DropDownListProps){
    
    const [isOpened, setIsOpened] = useState(false)
    
    return <View>
      
      <TitleFrame onClick={()=>setIsOpened(!isOpened)}>
        <TitleButton>{ isOpened ? <ArrowOpened/> : <ArrowClosed/> }</TitleButton>
        <Title>{props.title}</Title>
      </TitleFrame>
      
      { isOpened && <ItemList>
        { props.items.map(it=><Item.Item key={it.id} item={it}/>) }
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
  
  
}