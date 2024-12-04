'use client';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Radio,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  darcula,
  materialLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { ThemeContext } from '../../context/ThemeProvider';
import GuideItem from '../Guide/GuidItem';

export const QueryBuilder = ({ domain }) => {
  const { state } = useContext(ThemeContext);

  const { t } = useTranslation();

  const [checked, setChecked] = useState(1);

  const [tab, setTab] = useState(0);
  const [currentEndpoint, setCurrentEndpoint] = useState('/api/v1/fa/states');

  const rows = [
    {
      id: 1,
      type: 'states',
      title: 'تمام استان ها',
      description: 'دریافت لیست تمامی استان ها',
      isDefaultTrue: true,
      example: {
        response: {
          title: 'json',
          code: `
            [
                {
                  "name": "تهران",
                  "latitude": "35.410",
                  "longitude": "51.240"
                },
                ...
            ]
          `,
          syntax: 'json',
        },
      },
      endpoint: '/api/v1/fa/states',
    },
    {
      id: 2,
      type: 'states',
      title: 'دریافت استان با آیدی',
      description: 'دریافت استان مربوط به آیدی ورودی',
      isDefaultTrue: false,
      example: {
        parameter: {
          responseType: 'آبجکت',
          isRequired: true,
          description: 'آیدی استان',
          title: '{id}',
        },
        response: {
          title: 'json',
          code: `
            {
                "name": "تهران",
                "latitude": "35.410",
                "longitude": "51.240"
            }
          `,
          syntax: 'json',
        },
      },
      endpoint: '/api/v1/fa/states?id={id}',
    },
    {
      id: 3,
      type: 'states',
      title: 'دریافت استان با نام',
      description: 'دریافت استان مربوط به نام ورودی',
      isDefaultTrue: false,
      example: {
        parameter: {
          responseType: 'آبجکت',
          isRequired: true,
          description: 'نام استان',
          title: '{state}',
        },
        response: {
          title: 'json',
          code: `
            {
                "name": "تهران",
                "latitude": "35.410",
                "longitude": "51.240"
            }
          `,
          syntax: 'json',
        },
      },
      endpoint: '/api/v1/fa/states?state={state}',
    },
    {
      id: 4,
      type: 'cities',
      title: 'تمام شهر ها',
      description: 'دریافت لیست تمامی شهر ها',
      isDefaultTrue: true,
      endpoint: '/api/v1/fa/cities',
    },
    {
      id: 5,
      type: 'cities',
      title: 'دریافت شهر با نام',
      description: 'دریافت شهر مربوط به آیدی ورودی',
      isDefaultTrue: false,
      example: {
        parameter: {
          responseType: 'Array',
          isRequired: true,
          description: 'نام شهر یا شهر هایی که شهر‌های آن را می‌خواهید',
          title: '{city}',
        },
      },
      endpoint: '/api/v1/fa/cities?city={city}',
    },
    {
      id: 6,
      type: 'cities',
      title: 'شهر های یک استان بر اساس آیدی استان',
      description:
        'دریافت لیست شهر های مربوط به استان با استفاده از آیدی استان ورودی',
      isDefaultTrue: false,
      example: {
        parameter: {
          responseType: 'Array',
          isRequired: true,
          description: 'آیدی استانی که شهر‌های آن را می‌خواهید',
          title: '{state_id}',
        },
      },
      endpoint: '/api/v1/fa/cities?state_id={state_id}',
    },

    {
      id: 7,
      type: 'cities',
      title: 'شهر های یک استان بر اساس نام استان',
      description:
        'دریافت لیست شهر های مربوط به استان با استفاده از نام استان ورودی',
      isDefaultTrue: false,
      example: {
        parameter: {
          responseType: 'Array',
          isRequired: true,
          description: 'آیدی استانی که شهر‌های آن را می‌خواهید',
          title: '{state}',
        },
      },
      endpoint: '/api/v1/fa/cities?state={state}',
    },
  ];

  const Row = ({ row }) => {
    const [collapse, setCollapse] = useState(false);

    const handleRowChange = (_, checked) => {
      if (checked) {
        setCurrentEndpoint(row.endpoint);
        setChecked(row.id);
      }
    };

    return (
      <>
        <TableRow>
          <TableCell
            align="right"
            onClick={() => setCollapse((prevCollapse) => !prevCollapse)}
          >
            <IconButton aria-label="expand row" size="small">
              {collapse ? <ArrowDropUp /> : <ArrowDropDown />}
            </IconButton>
          </TableCell>
          <TableCell align="right">
            <Radio
              checked={row.id === checked}
              name="select-option"
              onChange={handleRowChange}
            />
          </TableCell>
          <TableCell style={{ fontSize: 13 }} align="right">
            {row.title}
          </TableCell>
          <TableCell align="right" style={{ fontSize: 13 }}>
            {row.description}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={collapse} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 5 }}>
                {row.example && row.example.parameter ? (
                  <>
                    <Typography
                      align="right"
                      variant="h6"
                      gutterBottom
                      component="div"
                    >
                      {t('queryBuilder:table.expand.inputs')}
                    </Typography>
                    <GuideItem.Inputs>
                      <GuideItem.InputItem>
                        {row.example.parameter.title}
                      </GuideItem.InputItem>
                      <GuideItem.InputItem>
                        {row.example.parameter.description}
                      </GuideItem.InputItem>
                      <GuideItem.InputItem>
                        {row.example.parameter.isRequired
                          ? t('queryBuilder:table.expand.yes')
                          : t('queryBuilder:table.expand.no')}
                      </GuideItem.InputItem>
                      <GuideItem.InputItem>
                        {row.example.parameter.responseType}
                      </GuideItem.InputItem>
                    </GuideItem.Inputs>
                  </>
                ) : null}
                {row.example && row.example.response ? (
                  <>
                    <Typography
                      align="right"
                      variant="h6"
                      gutterBottom
                      component="div"
                    >
                      {t('queryBuilder:table.expand.exampleResponse')}
                    </Typography>
                    <SyntaxHighlighter
                      wrapLongLines
                      language="json"
                      style={state === 'dark' ? darcula : materialLight}
                    >
                      {row.example.response.code}
                    </SyntaxHighlighter>
                  </>
                ) : null}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  const selectedRows = rows.filter((row) =>
    tab === 0 ? row.type === 'states' : row.type === 'cities'
  );

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding={['0', '80px']}
      fontFamily="iran-yekan"
      marginTop="-250px"
    >
      <Box
        width={['90%', '90%', '50%']}
        bgcolor={state === 'dark' ? 'black' : 'white'}
        borderRadius={4}
        border={`1px solid ${state === 'dark' ? '#050505' : '#efefef'}`}
        padding="10px"
        zIndex="999"
      >
        <Tabs value={tab} width="100%" onChange={(_, newTab) => setTab(newTab)}>
          <Tab label={t('queryBuilder:tab.state')} style={{ fontSize: 12 }} />
          <Tab label={t('queryBuilder:tab.city')} style={{ fontSize: 12 }} />
        </Tabs>

        <br />
        <GuideItem.Url domain={domain}>{currentEndpoint}</GuideItem.Url>
        <br />

        <TableContainer elevation={0} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell style={{ fontSize: 13 }} width="20%" align="right">
                  {t('queryBuilder:table.column.title')}
                </TableCell>
                <TableCell style={{ fontSize: 13 }} width="60%" align="right">
                  {t('queryBuilder:table.column.description')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflowX: 'scroll' }}>
              {selectedRows.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
