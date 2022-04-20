import { Button, Grid, Link } from '@mui/material';
import React from 'react'
import TypeAnimation from "react-type-animation";
import styles from "./styles.module.css"
const Introduction = () => {
    return (
        <Grid xs="12" md="6" lg="8" item className={styles.welcome}>
            <h1> به راحتی
                <TypeAnimation
                    cursor={false}
                    sequence={[' استان ', 3000, ' شهر ', 2000]}
                    wrapper="span"
                    repeat={Infinity}
                />

                های ایران را پیدا کنید
            </h1>
            <p>در اینجا میتوانید به روش های مختلف به شهر ها و استان های ایران و موقعیت های مکانی آن ها دسترسی داشته باشید</p>

            <Button variant="contained" color="primary">
                ادامه مطلب
            </Button>
        </Grid>
    )
}

export default Introduction