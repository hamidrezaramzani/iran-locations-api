import { Grid } from '@mui/material'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <Grid display="flex" justifyContent="center" paddingY="10px" fontSize="13px" fontFamily="iran-yekan" color="#888" gap="10px">
            <Link href="https://github.com/hamidrezaramzani">
               حمیدرضا رمضانی
            </Link>

            <Link href="/#guide">
                راهنمایی
            </Link>

            <Link href="https://github.com/pesarkhobeee/iran-states-and-cities-json-and-sql-including-area-coordinations.git">
               مخزن داده ها
            </Link>
        </Grid>
    )
}

export default Navbar