

export namespace Utils {
  
  export type empty = null|undefined
  
  
  export const isPresent = <T extends {}>(value: T|empty): value is T => value!==null && value!==undefined
  
  
  let id = 1
  export const nextId = () => ''+id++
  
}