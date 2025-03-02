import {
  Header,
  Introduction,
  Facilities,
  Faq,
  Head,
  Footer,
  HeroContainer,
} from "../components";
export default function Home() {
  const META_TITLE =
    "وب سرویس شهرها و استان‌های ایران | اطلاعات جامع شهری و استانی";
  const META_DESCRIPTION =
    "وب سرویس شهرها و استان‌های ایران: دسترسی به اطلاعات جامع و به‌روز درباره شهرها و استان‌های ایران. انواع داده ها بر اساس دسته بندی های متفاوت را میتوانید داشته باشید.";

  return (
    <>
      <Head title={META_TITLE} description={META_DESCRIPTION} />
      <HeroContainer>
        <Header />
        <Introduction />
      </HeroContainer>
      <Facilities />
      <Faq />
      <Footer />
    </>
  );
}
