import React from 'react'
import Card from './Card';

const Feed = ({searchResult}) => {
  return (
    <>
      { searchResult.map(item =>(
        <Card key={item.id} item={item} />
      )) }
    </>
  )
}

export default Feed;