import React from 'react'
import {useSearchParams} from "react-router-dom"

export default function Detail() {
  const [search,setSearch] = useSearchParams()
  console.log(search.get('id'));
  return (
    <ul>
      <li>{search.get('id')}</li>
      <li>{search.get('title')}</li>
      <li>{search.get('content')}</li>
    </ul>
  )
}
