import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as SC from './navbar.style';


export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <SC.Navbar>
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
    </SC.Navbar>
  );
};
