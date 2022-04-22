import { Grid } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import SocialMediaList from './SocialMediaList'

const Footer = () => {
    return (
        <Grid width="100%" paddingY="50px" fontFamily="iran-yekan">
            <SocialMediaList />
            <Navbar />
        </Grid>
    )
}

export default Footer   