import { Button, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import TypeAnimation from "react-type-animation";
import styles from "./styles.module.css"
const Introduction = () => {
    return (
        <Grid xs="12" md="6" lg="6" flexDirection="column" justifyContent="center" display="flex" paddingX="10px" item className={styles.welcome}>
            <div>
                <Typography component="h1" fontFamily="iran-yekan-bold" color="#3b4057" fontSize="35px"> به راحتی
                    <TypeAnimation
                        cursor={false}
                        sequence={[' استان ', 3000, ' شهر ', 2000]}
                        wrapper="span"
                        repeat={Infinity}
                    />

                    های ایران را پیدا کنید
                </Typography>
                <Typography
                    color="#686868"
                    textAlign="right"
                    paddingY="15px"
                    fontSize="14px"
                    fontFamily="iran-yekan"
                >
                    به وسیله سرویس ای پی آی ما به راحتی میتوانید به اطلاعات تمامی استان ها و تمامی شهر ها در شرایط مختلف دست یابید. استفاده از این سرویس کامل رایگان است و به راحتی هرچه تمام تر صورت میگیرد
                </Typography>

                <Button variant="contained" sx={{ background: "#2b3de2", fontFamily: "iran-yekan" }} color="primary">
                    ادامه مطلب
                </Button>
            </div>
        </Grid>
    )
}

export default Introduction