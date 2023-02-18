

export namespace Utils {
  
  export type empty = null|undefined
  
  
  
  let id = 1
  export const nextId = () => ''+id++
  
}