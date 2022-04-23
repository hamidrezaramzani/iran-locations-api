import { Button, Grid, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import React from 'react'
import styles from "./styles.module.css"

const useStyles = makeStyles(() => ({
    button: {
        background: "#2b3de2",
        fontFamily: "iran-yekan",
        "&:hover": {
            background: "#1d2fd4"
        }
    }
}))
const Introduction = () => {
    const classes = useStyles();

    return (
        <Grid xs={12} md={6} flexDirection="column" justifyContent="center" display="flex" paddingX="10px" item className={styles.welcome}>
            <div>
                <Typography component="h1" fontFamily="iran-yekan-bold" fontSize="35px"> وب سرویس
                    <span>‌شهر و استان </span>
                    های ایران
                </Typography>
                <Typography
                    color="#686868"
                    textAlign="right"
                    paddingY="15px"
                    fontSize="14px"
                    fontFamily="iran-yekan"
                >
                    با استفاده از سرویس API ما به‌راحتی میتوانید به اطلاعات تمامی استان‌ها و تمامی شهر‌ها در شرایط مختلف دست یابید. استفاده از این سرویس کامل رایگان است.
                </Typography>

                <Button variant="contained" color="info" className={classes.button}>
                    <Link href="/#guide">ادامه مطلب</Link>
                </Button>
            </div>
        </Grid >
    )
}

export default Introduction