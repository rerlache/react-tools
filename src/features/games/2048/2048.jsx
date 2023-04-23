import React from 'react'
import BoardView from './components/Board'
import Style from './2048.module.scss'

export default function Game2048() {
  return (
    <div className={`${Style.body}`}><BoardView /></div>
  )
}
