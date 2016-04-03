import React from 'react'
import List from './List.jsx'

export default ({lists}) => {
  return (
    <div className="lists">{lists.map((list) =>
      <List className="list" key={list.id} list={list} id={list.id} />
    )}</div>
  )
}
