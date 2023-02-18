import {MarkView} from "../MainScreen/ExhausterCard/DropDownList/MarkView";
import {Utils} from "src/utils/utils";
import empty = Utils.empty;


export namespace ExausterDetailedDataTypes {
  
  export type StateType = 'ok'|'caution'|'danger'
  export type LocationType =
    'bearer-1'|'bearer-2'|'bearer-3'|'bearer-4'|
    'bearer-5'|'bearer-6'|'bearer-7'|'bearer-8'|
    'bearer-9'
  export type MarkType = {
    id: 'temperature'|'vertical-vibration'|'horizontal-vibration'|'axial-vibration'|
      'level'|'pressure'
    value: number
    state: StateType
    minCaution?: number|undefined
    maxCaution?: number|undefined
    minDanger?: number|undefined
    maxDanger?: number|undefined
  }
  export type BearerDataType = {
    temperature: MarkType
    verticalVibration?: MarkType|undefined
    horizontalVibration?: MarkType|undefined
    axialVibration?: MarkType|undefined
  }
  export type OilDataType = {
    level: MarkType
    pressure: MarkType
  }
  export type BearerElementType = {
    id: string
    type: 'bearer'
    name: string
    location: LocationType
    state: StateType
    temperature?: empty|StateType
    vibration?: empty|StateType
    data: BearerDataType
  }
  export type OilElementType = {
    id: string
    type: 'oil'
    name: string
    state: StateType
    oil: StateType
    data: OilDataType
  }
  export type ElementType = BearerElementType|OilElementType
  export type ElementsType = {
    'oil' : OilElementType
    'bearer-1': BearerElementType
    'bearer-2': BearerElementType
    'bearer-3': BearerElementType
    'bearer-4': BearerElementType
    'bearer-6': BearerElementType
    'bearer-7': BearerElementType
    'bearer-8': BearerElementType
    'bearer-9': BearerElementType
  }
  
}