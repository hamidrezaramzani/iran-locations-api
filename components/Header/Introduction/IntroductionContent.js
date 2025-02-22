import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import React, { useContext } from 'react';

import styles from './styles.module.css';
import { ThemeContext } from '../../../context/ThemeProvider';

const Introduction = () => {
  const { state } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Grid
      xs={12}
      md={12}
      flexDirection="column"
      justifyContent="center"
      display="flex"
      item
      className={styles.welcome}
      marginTop={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          component="h1"
          textAlign="center"
          fontFamily="iran-yekan-bold"
          fontSize="35px"
          paddingX="8px"
        >
          <Trans
            i18nKey="introduction:content.title"
            components={{
              span: <span />,
            }}
          />
        </Typography>
        <Typography
          color={state === 'light' ? 'black' : 'white'}
          textAlign="center"
          paddingY="15px"
          fontSize="14px"
          fontFamily="iran-yekan"
          width={['80%', '100']}
        >
          {t('introduction:content.description')}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          LinkComponent={Link}
          href="/documentation"
        >
          شروع کنید
        </Button>
      </Box>
    </Grid>
  );
};

export default Introduction;
