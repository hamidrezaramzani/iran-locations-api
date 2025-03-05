'use client';
import { FaqItem } from './faq-item';
import { faqItems } from './faq.constant';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../section-title';
import * as SC from './faq.style';

export const Faq = () => {
  const { t } = useTranslation();
  return (
    <SC.Faq>
      <SectionTitle title={t('faq:title')} description={t('faq:description')} />
      {faqItems.map((faq, index) => (
        <FaqItem {...faq} key={index} />
      ))}
    </SC.Faq>
  );
};
