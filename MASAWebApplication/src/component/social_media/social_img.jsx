import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function social_img({ items }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }}
    variant="quilted"
    cols={4}
    rowHeight={121}>
      <ImageListItem>
        <img src={items.img} alt={items.title} />
      </ImageListItem>
    </ImageList>
      // <img
      //   src={items.img}
      //   alt={items.title}
      //   height="300"
      //   display="block"
      //   position="relative"
      //   margin="10"
      // />
  )
}

export default social_img
