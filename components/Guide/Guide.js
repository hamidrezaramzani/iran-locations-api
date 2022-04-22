import { Container, Grid } from '@mui/material'
import React from 'react'
import GuideItem from './GuidItem'
import Item from './GuidItem'

const Guide = ({ domain }) => {
  return (
    <Grid width="100%" paddingY="50px" id="guide">
      <Container>
        <GuideItem>
          <GuideItem.Title>تمامی استان های ایران</GuideItem.Title>
          <GuideItem.Description>با استفاده از دستور زیر میتوانید به تمامی استان های ایران به صورت یکجا دسترسی داشته باشید</GuideItem.Description>
          <GuideItem.Url domain={domain}>/api/v1/states</GuideItem.Url>
        </GuideItem>

        <GuideItem>
          <GuideItem.Title>شهر های یک استان</GuideItem.Title>
          <GuideItem.Description>شما میتوانید شهر های ایران را با وارد کردن نام استان به عنوان ورودی دریافت کنید</GuideItem.Description>

          <GuideItem.Inputs>
            <GuideItem.InputItem>{"{state}"}</GuideItem.InputItem>
            <GuideItem.InputItem>نام استانی که شهر های آن را میخواهید</GuideItem.InputItem>
            <GuideItem.InputItem>بله</GuideItem.InputItem>
          </GuideItem.Inputs>


          <GuideItem.Url domain={domain}>/api/v1/cities?state={"{state}"}</GuideItem.Url>
        </GuideItem>


        <GuideItem>
          <GuideItem.Title>دریافت استان با آیدی</GuideItem.Title>
          <GuideItem.Description>هر استانی آیدی منحصر به فرد خود را دارد و با استفاده از آیدی آن به عنوان ورودی میتوانید به اون استان دسترسی داشته باشید</GuideItem.Description>

          <GuideItem.Inputs>
            <GuideItem.InputItem>{"{id}"}</GuideItem.InputItem>
            <GuideItem.InputItem>آیدی استان</GuideItem.InputItem>
            <GuideItem.InputItem>بله</GuideItem.InputItem>
          </GuideItem.Inputs>


          <GuideItem.Url domain={domain}>/api/v1/states?id={"{id}"}</GuideItem.Url>
        </GuideItem>
      </Container>
    </Grid>
  )
}

export default Guide