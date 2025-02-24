import { Box, Typography } from "@mui/material";
import { FacilityItem } from "./facility-item/facility-item.component.jsx";
import { GoCode, GoDatabase, GoLock, GoRocket } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import * as SC from "./facilities.style.js";
import { useTranslation } from "react-i18next";

export const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      title: "اطلاعات جامع و دقیق",
      description: "اطلاعات کامل و دقیق از شهر و استان‌های ایران",
      icon: GoDatabase,
    },
    {
      title: "رابط کاربرپسند",
      description: "طراحی شده برای استفاده آسان توسعه‌دهندگان",
      icon: GoCode,
    },
    {
      title: "پاسخ‌دهی سریع",
      description: "داده‌ها را با سرعت بالا دریافت کنید",
      icon: GoRocket,
    },
    {
      title: "امن و پایدار",
      description: "اطمینان از عملکرد پایدار و امن",
      icon: GoLock,
    },
    {
      title: "پشتیبانی از زبان انگلیسی",
      description: "امکان استفاده از داده‌ها به زبان انگلیسی",
      icon: MdLanguage,
    },
    {
      title: "انعطاف‌پذیری بالا",
      description: "سازگاری با نیازهای مختلف توسعه‌دهندگان",
      icon: AiOutlineSetting,
    },
  ];
  return (
    <SC.Facilities>
      <div className="facilities__title">
        <Typography variant="h4" className="title__h4">
          {t("facilities:title")}
        </Typography>
        <Typography variant="body1" className="title__body">
          {t("facilities:description")}
        </Typography>
      </div>
      <div className="facilities__container">
        {facilities.map((facility, index) => (
          <FacilityItem {...facility} key={index} />
        ))}
      </div>
    </SC.Facilities>
  );
};
