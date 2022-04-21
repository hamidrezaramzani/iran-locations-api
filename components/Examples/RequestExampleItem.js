/* eslint-disable react/display-name */
import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';



const RequestExampleItem = ({ children }) => {
    return (
        <Grid xs={12} container paddingY="25px" alignItems="center">
            {children}
        </Grid>

    )
}

RequestExampleItem.Description = ({ title, description }) => (
    <Grid xs={12} md={6} paddingX="20px">
        <Typography component="h2" fontSize="18px" fontFamily="iran-yekan">
            {title}
        </Typography>
        <Typography component="p" fontSize="13px" color="#666" paddingY="10px" fontFamily="iran-yekan">
            {description}
        </Typography>
    </Grid>
)



RequestExampleItem.Code = ({data}) => {
    const handleChangeTab = (e, newValue) => {
        setValue(newValue);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(0);


    function a11yProps(index) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    const renderTab = () => {
        const item = data.find(item => item.value === value);
        return <Box>
            <SyntaxHighlighter wrapLongLines language={item.syntax} style={vscDarkPlus} customStyle={{ direction: "ltr" }}>
                {item.code}
            </SyntaxHighlighter>

        </Box>
    }
    return <Grid xs={12} md={6}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangeTab} sx={{ direction: "ltr" }} >
                {data.map(item => (
                    <Tab label={item.title} {...a11yProps(item.value)} key={item.value} />
                ))}
            </Tabs>
        </Box>
        {renderTab()}
    </Grid>
}

export default RequestExampleItem