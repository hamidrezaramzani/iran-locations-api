import { Container, Grid } from '@mui/material'
import React from 'react'
import Item from './Item'

const Guide = () => {
  return (
    <Grid width="100%" paddingY="50px">
      <Container>
        <Item />
      </Container>
    </Grid>
  )
}

export default Guide