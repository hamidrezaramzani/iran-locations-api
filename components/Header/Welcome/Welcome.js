import { Grid } from '@mui/material'
import React from 'react'
import Introduction from './Introduction';
const Welcome = () => {
    return (
        <Grid xs="12" md="10" lg="10" container>
            <Introduction />
            <Grid xs="12" md="6" lg="6" borderRadius="10px" padding="10px" >
                <img src="/vector.png" width="100%" />
            </Grid>
        </Grid>
    )
}

export default Welcome