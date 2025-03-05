import { FacilityItem } from './facility-item';
import { GoCode, GoDatabase, GoLock, GoRocket } from 'react-icons/go';
import { MdLanguage } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../section-title';
import * as SC from './facilities.style';

export const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      title: 'اطلاعات جامع و دقیق',
      description: 'اطلاعات کامل و دقیق از شهر و استان‌های ایران',
      icon: GoDatabase,
    },
    {
      title: 'رابط کاربرپسند',
      description: 'طراحی شده برای استفاده آسان توسعه‌دهندگان',
      icon: GoCode,
    },
    {
      title: 'پاسخ‌دهی سریع',
      description: 'داده‌ها را با سرعت بالا دریافت کنید',
      icon: GoRocket,
    },
    {
      title: 'امن و پایدار',
      description: 'اطمینان از عملکرد پایدار و امن',
      icon: GoLock,
    },
    {
      title: 'پشتیبانی از زبان انگلیسی',
      description: 'امکان استفاده از داده‌ها به زبان انگلیسی',
      icon: MdLanguage,
    },
    {
      title: 'انعطاف‌پذیری بالا',
      description: 'سازگاری با نیازهای مختلف توسعه‌دهندگان',
      icon: AiOutlineSetting,
    },
  ];
  return (
    <SC.Facilities>
      <SectionTitle
        title={t('facilities:title')}
        description={t('facilities:description')}
      />
      <div className="facilities__container">
        {facilities.map((facility, index) => (
          <FacilityItem {...facility} key={index} />
        ))}
      </div>
    </SC.Facilities>
  );
};
