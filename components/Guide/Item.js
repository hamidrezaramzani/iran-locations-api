import { Grid, Typography } from '@mui/material'
import React from 'react'
import Url from "./Url";
const Item = () => {
    return (
        <Grid>
            <Typography component="h3" fontSize="18px" textAlign="center" fontFamily="iran-yekan">دریافت تمامی استان های ایران</Typography>
            <Typography component="p" fontSize="14px" textAlign="center" color="#777" fontFamily="iran-yekan" paddingY="5px">با دستور زیر میتوانید تمامی استان های ایران را با مشخصات کامل دریافت کنید</Typography>
            <Url />
        </Grid>
    )
}

export default Item