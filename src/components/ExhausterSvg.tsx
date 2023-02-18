import { ReactComponent as SvgComponent } from 'src/res/icon/exhauster.svg'
import React, {useEffect, useLayoutEffect, useRef} from 'react'
import {ReactUtils} from "src/utils/react-utils";
import ReactMemoTyped = ReactUtils.ReactMemoTyped;
import {Item} from "./ExhausterCard/DropDownList/Item";
import ItemType = Item.ItemType;


type SvgProps = React.SVGProps<SVGSVGElement> & { title?: string }
type ExhausterSvgProps = {
  size?: number|string|undefined
  bearers: ItemType[]
}
export type SvgIconProps = ExhausterSvgProps & SvgProps


const ExhausterSvg = ({ bearers, size, ...props }: SvgIconProps) => {
  
  const {style, ...restProps} = props
  
  const svgRef = useRef<SVGSVGElement>(null)
  useLayoutEffect(() => {
    const svg = svgRef.current
    if (svg) {
      for (let i = 1; i <= 9; i++) {
        svg.style.removeProperty(`--bearer-position-${i}`)
      }
      bearers.forEach(it => {
        if (it.type==='bearer'){
          if (it.temperature === 'danger' || it.vibration === 'danger') {
            svg.style.setProperty(`--bearer-position-${it.position}`, '#E32112')
          } else if (it.temperature === 'caution' || it.vibration === 'caution') {
            svg.style.setProperty(`--bearer-position-${it.position}`, '#F9A823')
          } else {
            svg.style.setProperty(`--bearer-position-${it.position}`, '#6EA566')
          }
        }
      })
    }
  }, [bearers])
  
  
  return <SvgComponent
    ref={svgRef}
    style={{
      width: size, height: size,
      maxWidth: '100%', maxHeight: '100%',
      ...style
    }}
    {...restProps}
  />
}
export default ReactMemoTyped(ExhausterSvg)