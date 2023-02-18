import {MarkView} from "../MainScreen/ExhausterCard/DropDownList/MarkView";


export namespace ExausterDetailedDataTypes {
  
  import StateType = MarkView.StateType;
  export type LocationType =
    'bearer-1'|'bearer-2'|'bearer-3'|'bearer-4'|
    'bearer-5'|'bearer-6'|'bearer-7'|'bearer-8'|
    'bearer-9'
  export type MarkType = {
    id: 'temperature'|'vertical-vibration'|'horizontal-vibration'|'axial-vibration'
    value: number
    state: StateType
  }
  export type BearerDataType = {
    temperature: MarkType
    verticalVibration?: MarkType|undefined
    horizontalVibration?: MarkType|undefined
    axialVibration?: MarkType|undefined
  }
  export type BearerElementType = {
    type: 'bearer'
    name: string
    location: LocationType
    data: BearerDataType
  }
  export type ElementType = BearerElementType
  export type ElementsType = {
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