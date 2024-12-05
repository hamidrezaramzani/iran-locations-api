import { Box, Typography } from "@mui/material";
import { FacilityItem } from "./FacilityItem.jsx";
import { GoCode, GoDatabase, GoLock, GoRocket } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

export const Facilities = () => {
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
    <Box alignItems="center" flexDirection="column" display="flex" py="50px">
      <Box my="50px" display="flex" flexDirection='column' alignItems="center" gap="10px">
        <Typography variant="h4">
          چرا سرویس ما میتونه به شما کمک کنه؟
        </Typography>
        <Typography variant="body1" color="#cdcdcd">
          مزایای استفاده از سرویس ما اینجا برای شما نوشته شده
        </Typography>
      </Box>
      <Box display="flex" justifyContent='space-between' flexWrap="wrap" gap="15px" width={["90%", "50%"]}>
        {facilities.map((facility, index) => (
          <FacilityItem {...facility} key={index} />
        ))}
      </Box>
    </Box>
  );
};
