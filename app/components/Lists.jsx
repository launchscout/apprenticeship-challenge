import React from 'react'
import List from './List.jsx'

export default ({lists}) => {
  return (
    <div>{lists.map((list) =>
      <List key={list.id} list={list}/>
    )}</div>
  )
}
