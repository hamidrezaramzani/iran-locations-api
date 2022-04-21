import { Button, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import styles from "./styles.module.css"
const Introduction = () => {
    return (
        <Grid xs={12} md={6} flexDirection="column" justifyContent="center" display="flex" paddingX="10px" item className={styles.welcome}>
            <div>
                <Typography component="h1" fontFamily="iran-yekan-bold" color="#3b4057" fontSize="35px"> وب سرویس
                    <span> شهر و استان </span>
                    های ایران
                </Typography>
                <Typography
                    color="#686868"
                    textAlign="right"
                    paddingY="15px"
                    fontSize="14px"
                    fontFamily="iran-yekan"
                >
                    به وسیله سرویس ای پی آی ما به راحتی میتوانید به اطلاعات تمامی استان ها و تمامی شهر ها در شرایط مختلف دست یابید. استفاده از این سرویس کامل رایگان است
                </Typography>
            </div>
        </Grid>
    )
}

export default Introduction