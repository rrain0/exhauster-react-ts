import WaterDropIc from "../../icons/WaterDropIc";
import BearerIc from "../../icons/BearerIc";
import styled from "styled-components";
import {StyledCommon} from "../../../style/styled-common";
import {Utils} from "../../../utils/utils";
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
  
  
}