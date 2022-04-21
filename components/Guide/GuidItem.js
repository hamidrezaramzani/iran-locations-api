/* eslint-disable react/display-name */
import { Button, Grid, IconButton, Snackbar, Typography } from '@mui/material'
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

GuideItem.Url = ({ children }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleCopyUrl = () => {
        navigator.clipboard.writeText(children);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return <Box width="100%" padding="10px" marginTop="10px" textAlign="left" borderRadius="10px" position="relative" bgcolor="#e2e7ff">
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="کپی شد"
            sx={{ fontFamily: "iran-yekan" }}
        />

        <Typography fontSize="13px" fontFamily="Roboto Mono" sx={{ direction: "ltr" }}>
            {children}
        </Typography>

        <Button sx={{ position: "absolute", right: "0", top: "0" }} onClick={handleCopyUrl}>
            <ContentCopyIcon />
        </Button>
    </Box>
}

export default GuideItem