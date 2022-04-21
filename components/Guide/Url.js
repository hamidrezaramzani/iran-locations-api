import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Url = () => {
    return (
        <Box width="100%" padding="10px" marginTop="10px" textAlign="left" borderRadius="10px" position="relative" bgcolor="#e2e7ff">
            <Typography fontSize="13px" fontFamily="Roboto Mono">
                https://hamidreza.ir/api/v1/?all-states
            </Typography>

            <Button sx={{ position: "absolute", right: "0" , top:"5px" }}>
                Copy
            </Button>
        </Box>
    )
}

export default Url