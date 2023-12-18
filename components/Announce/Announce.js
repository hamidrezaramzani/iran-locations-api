import { Link, Stack, Typography } from "@mui/material";

const Announce = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "60px" }}
    >
      <Typography fontFamily="iran-yekan">
        جهت ارسال هرگونه انتقاد و پیشنهاد میتوانید به{" "}
        <Link underline="hover" href="https://t.me/hamidrezaramzani">
          اکانت تلگرام
        </Link>{" "}
        مراجعه کنید
      </Typography>
    </Stack>
  );
};

export default Announce;
