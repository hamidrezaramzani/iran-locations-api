import { Box, Typography } from "@mui/material";
import { FaqItem } from "./FaqItem";

export const Faq = () => {
  const faqItems = [
    {
      title: "این پروژه چه کاربردی دارد؟",
      description:
        "این پروژه یک API اوپن سورس است که اطلاعات دقیق و به‌روز از شهرها و استان‌های ایران را در اختیار کاربران قرار می‌دهد.",
    },
    {
      title: "چگونه می‌توانم از این API استفاده کنم؟",
      description:
        "برای استفاده از این API کافی است به مستندات موجود در وب‌سایت مراجعه کرده و درخواست‌های مورد نظر خود را ارسال کنید.",
    },
    {
      title: "آیا این API رایگان است؟",
      description:
        "بله، این API کاملاً رایگان است و برای استفاده عمومی در دسترس قرار دارد.",
    },
    {
      title: "آیا می‌توانم داده‌ها را شخصی‌سازی کنم؟",
      description:
        "بله، شما می‌توانید داده‌ها را بر اساس نیاز خود فیلتر کرده و اطلاعات مورد نظر خود را دریافت کنید.",
    },
    {
      title: "آیا این پروژه قابل توسعه و تغییر است؟",
      description:
        "بله، این پروژه اوپن سورس است و شما می‌توانید آن را توسعه دهید یا تغییرات مورد نظر خود را اعمال کنید. می‌توانید از گیت‌هاب برای مشاهده کد منبع و مشارکت استفاده کنید.",
    },
    {
      title: "چگونه می‌توانم در این پروژه مشارکت کنم؟",
      description:
        "برای مشارکت در این پروژه می‌توانید به مخزن گیت‌هاب پروژه مراجعه کرده و درخواست‌های کش (Pull Requests) خود را ارسال کنید.",
    },
  ];

  return (
    <Box alignItems="center" flexDirection="column" display="flex" py="50px">
      <Box
        my="50px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="10px"
      >
        <Typography variant="h4">سوالات متداول</Typography>
        <Typography variant="body1" color="#cdcdcd">
          سوالات متداولی که ممکنه جواب سوال شما هم باشه
        </Typography>
      </Box>
      {faqItems.map((faq, index) => (
        <FaqItem {...faq} key={index} />
      ))}
    </Box>
  );
};
