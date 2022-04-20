import { Box, Button, Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
const ReactJson = dynamic(import('react-json-view'), { ssr: false });
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const Example = () => {

    const [value, setValue] = useState(0);

    const DATA = [
        {
            value: 0,
            title: "JavaScript",
            code: `fetch('http://apifelan.com/v1/?city=تهران')
            .then(response => response.json())
            .then(json => console.log(json));`,
            url: "http://apifelan.com/v1/?city=تهران",
            syntax: "javascript"
        },
        {
            value: 1,
            title: "curl",
            code: `http://apifelan.com/v1/?city=تهران`,
            url: "http://apifelan.com/v1/?city=تهران",
            syntax: "bash"
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
            <SyntaxHighlighter language={item.syntax} style={materialDark}>
                {item.code}
            </SyntaxHighlighter>
            <Box width="100%" position="relative" height="150px" overflow={"hidden"}>
                <Button variant='contained' style={{ position: "absolute", zIndex: "10", top: "10px", right: "10px" }} >
                   نمایش نتیجه
                </Button>
                <ReactJson theme="codeschool" style={{ padding: "10px", height: "100%" }} src={[{ name: "hamidreza" }, { name: "hamidreza" }, { name: "hamidreza" }, { name: "hamidreza" }, { name: "hamidreza" },]} />
            </Box>
        </Box>
    }

    return (
        <Grid xs="12" md="6" lg="4" borderRadius="10px" padding="10px" height="350px" bgcolor={"#3b4057"} item className={styles.example}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
                    {DATA.map(item => (
                        <Tab label={item.title} {...a11yProps(item.value)} key={item.value} />
                    ))}
                </Tabs>
            </Box>
            {renderTab()}
        </Grid>
    )
}

export default Example