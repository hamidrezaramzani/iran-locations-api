/* eslint-disable react/display-name */
import { Alert, Button, Grid, IconButton, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const GuideItem = ({ children }) => {
    return (
        <Grid width="100%" paddingY="50px">
            {children}
        </Grid>
    )
}

GuideItem.Title = ({ children }) => {
    return <Typography component="h3" fontSize="18px" textAlign="center" paddingY="10px" fontFamily="iran-yekan"
    >
        {children}
    </Typography>
}

GuideItem.Description = ({ children }) => {
    return <Typography component="p" fontSize="14px" textAlign="center" color="#777" fontFamily="iran-yekan" paddingY="10px">{children}</Typography>
}

GuideItem.Url = ({ children, domain }) => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleCopyUrl = () => {
        navigator.clipboard.writeText(domain + children);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return <Alert severity="info" sx={{ direction: "ltr", fontFamily: "Roboto Mono", position: "relative" }}>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontFamily: "iran-yekan" }}>
                کپی شد
            </Alert>
        </Snackbar>
        {domain}{children}

        <Button sx={{ position: "absolute", right: "0", top: "0" }} onClick={handleCopyUrl}>
            <ContentCopyIcon />
        </Button>
    </Alert>
}

export default GuideItem