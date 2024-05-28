"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import GuideItem from "../Guide/GuidItem";

const Donates = () => {
  const [donates, setDonates] = useState([]);

  useEffect(() => {
    const getDonates = async () => {
      const { data: donates } = await axios.get("/api/general/donates");
      setDonates(donates);
    };
    void getDonates();
  }, []);
  return (
    <Container sx={{ paddingTop: "50px" }}>
      <GuideItem>
        <GuideItem.Title>حمایت کنندگان</GuideItem.Title>
        <GuideItem.Description>
          ممنونم که با حمایت هاتون به پایداری این وبسایت کمک میکنید &nbsp;
          <img
            alt="Flower"
            src="/flower.png"
            style={{
              width: "15px",
            }}
          />
        </GuideItem.Description>
      </GuideItem>
      <Box display="flex" gap="12px" flexWrap="wrap" justifyContent="center">
        {donates.map((donate, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/avatar.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="iran-yekan-bold"
                >
                  {donate.donate_amount} ریال
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="text.secondary"
                  className="iran-yekan"
                >
                  نامشخص
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Donates;
