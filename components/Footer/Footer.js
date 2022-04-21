import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <Grid width="100%" display="flex" justifyContent="center" gap="10px" paddingY="50px" fontFamily="iran-yekan">
            <Link href="https://hamidrezaramzani.netlify.app">حمیدرضا رمضانی</Link> - <Link href="https://github.com/pesarkhobeee/iran-states-and-cities-json-and-sql-including-area-coordinations">مخرن داده ها</Link>
        </Grid>
    )
}

export default Footer   