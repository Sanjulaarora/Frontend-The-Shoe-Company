import React from 'react';
import Card from './Card';

const Feed = ({items}) => {
  return (
    <>
      { items.map((item) =>(
        <Card key={item.id} item={item} />
      )) }
    </>
  )
}

export default Feed;