import WaterDropIc from "../../icons/WaterDropIc";
import BearerIc from "../../icons/BearerIc";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import {Utils} from "src/utils/utils";
import empty = Utils.empty;
import row = StyledCommon.row;
import { MarkView } from "./MarkView";


export namespace Item {
  
  export interface OilType {
    id: string
    type: 'oil'
    title: string
    oil?: empty|'ok'|'caution'|'danger'
  }
  export interface BearerType {
    id: string
    type: 'bearer'
    title: string
    position: number|string
    temperature?: empty|'ok'|'caution'|'danger'
    vibration?: empty|'ok'|'caution'|'danger'
  }
  export type ItemType = OilType|BearerType
  export interface ItemProps {
    item: ItemType
    setHovered: (item: ItemType, isHovered: boolean, ...message: string[])=>void
  }
  export function Item(props: ItemProps){
    const it = props.item
    
    return <Item_
      //onMouseOver={()=>props.setHovered(it,true, 'over')}
      onMouseEnter={()=>props.setHovered(it,true, 'enter')}
      //onMouseOut={()=>props.setHovered(it,false, 'out')}
      onMouseLeave={()=>props.setHovered(it,false, 'leave')}
    >
      { it.type==='oil' && <>
          <Oil/>
          <WrapFlex1><ItemTitle>{it.title}</ItemTitle></WrapFlex1>
        { it.oil && <MarkView.MarkView mark={{ type: 'oil', state: it.oil }} /> }
      </> }
      { it.type==='bearer' && <>
          <Bearer/>
          <WrapFlex1><ItemTitle>{it.title}</ItemTitle></WrapFlex1>
        { it.temperature && <MarkView.MarkView mark={{ type: 'temperature', state: it.temperature }} /> }
        { it.vibration && <MarkView.MarkView mark={{ type: 'vibration', state: it.vibration }} /> }
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
  
  
}