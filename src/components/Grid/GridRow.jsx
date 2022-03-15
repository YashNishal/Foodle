import React from 'react'
import s from './GridRow.module.scss'
import GridBox from './GridBox'

export default function GridRow() {
  return (
    <div style={s.row}>
        <GridBox/>
        <GridBox/>
        <GridBox/>
        <GridBox/>
        <GridBox/>
    </div>  
    )
}
