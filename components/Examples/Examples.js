import { Box, Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const ReactJson = dynamic(import('react-json-view'), { ssr: false });
const Examples = () => {

    const [value, setValue] = useState(0);

    const DATA = [
        {
            value: 0,
            title: "JavaScript",
            code: `fetch('https://iran-locations-api.vercel.app/api/v1/?cities?city=تهران')
            .then(response => response.json())
            .then(json => console.log(json));`,
            syntax: "javascript"
        }
    ]
    const handleChangeTab = (e, newValue) => {
        setValue(newValue);
    }


    function a11yProps(index) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    const renderTab = () => {
        const item = DATA.find(item => item.value === value);
        return <Box> 
            <SyntaxHighlighter showLineNumbers language={item.syntax} style={materialDark} customStyle={{ direction: "ltr" }}>
                {item.code}
            </SyntaxHighlighter>

        </Box>
    }

    return (
        <Container>
            <Grid xs={12} container paddingY="100px" alignItems="center">
                <Grid xs={12} md={6} paddingX="20px">
                    <Typography component="h2" fontSize="18px" fontFamily="iran-yekan">
                        دسترسی راحت و آسان
                    </Typography>
                    <Typography component="p" fontSize="13px" color="#666"> 
                        با ابزار های متفاوت و متنوع میتوانید به راحتی از این ای پی آی استفاده کنید. کافی است از آدرس هایی که در قسمت راهنما وجود دارد استفاده کنید
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChangeTab} sx={{ direction: "ltr" }} >
                            {DATA.map(item => (
                                <Tab label={item.title} {...a11yProps(item.value)} key={item.value} />
                            ))}
                        </Tabs>
                    </Box>
                    {renderTab()}
                </Grid>

            </Grid>
        </Container>
    )
}

export default Examples