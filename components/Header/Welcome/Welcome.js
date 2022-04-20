import { Grid } from '@mui/material'
import React from 'react'
import Example from './Example';
import Introduction from './Introduction';
import styles from "./styles.module.css";
const Welcome = () => {
    return (
        <Grid xs="12" md="10" lg="10" container>
            <Example />
            <Introduction />
        </Grid>
    )
}

export default Welcome