import { Grid } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Grid
      display="flex"
      justifyContent="center"
      paddingY="10px"
      fontSize="13px"
      fontFamily="iran-yekan"
      color="#888"
      gap="10px"
    >
      <Link href="https://github.com/hamidrezaramzani">
        {t('footer:nav.hamidrezaRamzani')}
      </Link>

      <Link href="/#guide">{t('footer:nav.help')}</Link>

      <Link href="https://github.com/pesarkhobeee/iran-states-and-cities-json-and-sql-including-area-coordinations.git">
        {t('footer:nav.dataRepository')}
      </Link>

      <Link href="https://t.me/iranlocationsapi">
        {t('footer:nav.announcementChannel')}
      </Link>
    </Grid>
  );
};

export default Navbar;
