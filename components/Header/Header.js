import Link from "next/link"
import { Grid } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Grid container fontFamily="iran-yekan" xs="12" height="50px" padding="20px" justifyContent="center" gap="10px">
      <Link href="" >راهنما</Link>
      <Link href="" >بلاگ</Link>
      <Link href="" >گیت هاب </Link>
    </Grid>
  )
}

export default Header