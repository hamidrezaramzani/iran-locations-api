import { Grid } from '@mui/material'
import React from 'react'
import IntroductionContent from './IntroductionContent';
import IntroductionVector from './IntroductionVector';
const Welcome = () => {



    return (

        <Grid xs={12} md={10} container display="flex"  >
            <IntroductionContent />
            <IntroductionVector />
        </Grid>
    )
}

export default Welcome