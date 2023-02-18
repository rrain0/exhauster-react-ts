import {Utils} from "src/utils/utils";
import nextId = Utils.nextId;
import {DateTime} from "src/utils/DateTime";
import {Item} from "../components/ExhausterCard/DropDownList/Item";
import { MarkView } from "../components/ExhausterCard/DropDownList/MarkView";
import OilType = Item.OilType;
import StateType = MarkView.StateType;
import BearerType = Item.BearerType;




export namespace MockApi {


// состояние масла эксгаустера
  const oils: OilType[] = [
    {
      id: nextId(),
      type: 'oil',
      title: 'Уровень масла',
      oil: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'oil',
      title: 'Уровень масла',
      oil: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'oil',
      title: 'Уровень масла',
      oil: 'danger' as StateType,
    },{
      id: nextId(),
      type: 'oil',
      title: 'Уровень масла',
      oil: 'ok' as StateType,
    },
  ]
  
  // состояние подшипников эксгаустера
  const bearers: BearerType[] = [
    {
      id: nextId(),
      type: 'bearer',
      title: '№ 1 п-к',
      position: 1,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 2 п-к',
      position: 2,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 3 п-к',
      position: 3,
      temperature: 'caution' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 4 п-к',
      position: 4,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 5 п-к',
      position: 5,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 6 п-к',
      position: 6,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 7 п-к',
      position: 7,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 8 п-к',
      position: 8,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 9 п-к',
      position: 9,
      temperature: 'caution' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 1 п-к',
      position: 1,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 2 п-к',
      position: 2,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 3 п-к',
      position: 3,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 4 п-к',
      position: 4,
      temperature: 'ok' as StateType,
      vibration: 'danger' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 5 п-к',
      position: 5,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 6 п-к',
      position: 6,
      temperature: 'ok' as StateType,
      vibration: 'danger' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 7 п-к',
      position: 7,
      temperature: 'caution' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 8 п-к',
      position: 8,
      temperature: 'danger' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 9 п-к',
      position: 9,
      temperature: 'caution' as StateType,
      vibration: 'danger' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 1 п-к',
      position: 1,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 2 п-к',
      position: 2,
      temperature: 'caution' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 3 п-к',
      position: 3,
      temperature: 'caution' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 4 п-к',
      position: 4,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 5 п-к',
      position: 5,
      temperature: 'caution' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 6 п-к',
      position: 6,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 7 п-к',
      position: 7,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 8 п-к',
      position: 8,
      temperature: 'ok' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 9 п-к',
      position: 9,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 1 п-к',
      position: 1,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 2 п-к',
      position: 2,
      temperature: 'danger' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 3 п-к',
      position: 3,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 4 п-к',
      position: 4,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 5 п-к',
      position: 5,
      temperature: 'caution' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 6 п-к',
      position: 6,
      temperature: 'caution' as StateType,
      vibration: 'caution' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 7 п-к',
      position: 7,
      temperature: 'ok' as StateType,
      vibration: 'ok' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 8 п-к',
      position: 8,
      temperature: 'danger' as StateType,
      vibration: 'danger' as StateType,
    },{
      id: nextId(),
      type: 'bearer',
      title: '№ 9 п-к',
      position: 9,
      temperature: 'caution' as StateType,
      vibration: 'danger' as StateType,
    },
  ]
  
  
  // роторы эксгаустеров
  export type RotorType = typeof rotors[number]
  const rotors = [
    {
      id: nextId(),
      name: 'Ротор № 35к',
      // дата последней замены
      replacementDate: '12-02-2023',
      // сколько дней прошло с момента последней замены
      replacementWere: function(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      // через сколько дней заменить (прогноз замены)
      replacementForecast: 12,
      // текущее состояние ротора, зависит от прогноза замены
      replacementForecastState: function(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      name: 'Ротор № 47',
      replacementDate: '14-02-2023',
      replacementWere: function(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 9,
      replacementForecastState: function(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      name: 'Ротор № 37',
      replacementDate: '1-02-2023',
      replacementWere: function(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 3,
      replacementForecastState: function(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      name: 'Ротор № 32',
      replacementDate: '30-01-2023',
      replacementWere: function(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 1,
      replacementForecastState: function(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },
  ]
  
  // эксгаустеры
  export type ExhausterType = typeof exhausters[number]
  const exhausters = [
    {
      id: nextId(),
      name: 'Эксгаустер № 1 (У-171)',
      isWorking: true,
      rotor: rotors[0],
      // уровень масла
      oil: oils[0],
      bearers: bearers.slice(0,9),
    },{
      id: nextId(),
      name: 'Эксгаустер № 2 (У-172)',
      isWorking: true,
      rotor: rotors[1],
      oil: oils[1],
      bearers: bearers.slice(9,18),
    },{
      id: nextId(),
      name: 'Эксгаустер № 3 (Ф-171)',
      isWorking: false,
      rotor: rotors[2],
      oil: oils[2],
      bearers: bearers.slice(18,27),
    },{
      id: nextId(),
      name: 'Эксгаустер № 4 (Ф-172)',
      isWorking: false,
      rotor: rotors[3],
      oil: oils[3],
      bearers: bearers.slice(27,36),
    },
  ]
  
  // агломашины
  export type SinteringMachineType = typeof sinteringMachines[number]
  export const sinteringMachines = [
    { id: nextId(), name: 'Агломашина №1', exhausters: exhausters.slice(0,2) },
    { id: nextId(), name: 'Агломашина №2', exhausters: exhausters.slice(2,4) },
  ]
  
}