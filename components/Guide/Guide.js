import { Container, Grid } from '@mui/material'
import React from 'react'
import GuideItem from './GuidItem'
import Item from './GuidItem'

const Guide = ({ domain }) => {
	return (
		<Grid width='100%' paddingY='50px' id='guide'>
			<Container>
				<GuideItem>
					<GuideItem.Title>زبان داده های ارسالی</GuideItem.Title>
					<GuideItem.Description>داده ها در فرمت فارسی</GuideItem.Description>
					<GuideItem.Url domain={domain}>/api/v1/fa/</GuideItem.Url>
					<GuideItem.Description>داده ها در فرمت انگلیسی</GuideItem.Description>
					<GuideItem.Url domain={domain}>/api/v1/en/</GuideItem.Url>
				</GuideItem>
				<GuideItem>
					<GuideItem.Title>تمامی استان‌های ایران</GuideItem.Title>
					<GuideItem.Description>
						با استفاده از دستور زیر می‌توانید به تمامی استان‌های ایران به‌صورت
						یک‌جا دسترسی داشته باشید
					</GuideItem.Description>
					<GuideItem.Url domain={domain}>/api/v1/fa/states</GuideItem.Url>
				</GuideItem>
				<GuideItem>
					<GuideItem.Title>شهر های یک استان</GuideItem.Title>
					<GuideItem.Description>
						شما می‌توانید شهر‌های ایران را با وارد کردن نام یا ایدی استان به
						عنوان ورودی دریافت کنید
					</GuideItem.Description>

					<GuideItem.Inputs>
						<GuideItem.InputItem>{'{state}'}</GuideItem.InputItem>
						<GuideItem.InputItem>
							نام استانی که شهر‌های آن را می‌خواهید
						</GuideItem.InputItem>
						<GuideItem.InputItem>بله</GuideItem.InputItem>
					</GuideItem.Inputs>
					<GuideItem.Url domain={domain}>
						/api/v1/fa/cities?state={'{state}'}
					</GuideItem.Url>

					<GuideItem.Inputs>
						<GuideItem.InputItem>{'{state_id}'}</GuideItem.InputItem>
						<GuideItem.InputItem>
							.ایدی استانی که شهر‌های آن را می‌خواهید
						</GuideItem.InputItem>
						<GuideItem.InputItem>بله</GuideItem.InputItem>
					</GuideItem.Inputs>
					<GuideItem.Url domain={domain}>
						/api/v1/fa/cities?state_id={'{state_id}'}
					</GuideItem.Url>
				</GuideItem>

				<GuideItem>
					<GuideItem.Title>دریافت استان با آیدی</GuideItem.Title>
					<GuideItem.Description>
						هر استانی آیدی منحصر‌به‌فرد خود را دارد و با استفاده از آیدی آن به
						عنوان ورودی می‌توانید به آن استان دسترسی داشته باشید
					</GuideItem.Description>

					<GuideItem.Inputs>
						<GuideItem.InputItem>{'{id}'}</GuideItem.InputItem>
						<GuideItem.InputItem>آیدی استان</GuideItem.InputItem>
						<GuideItem.InputItem>بله</GuideItem.InputItem>
					</GuideItem.Inputs>
					<GuideItem.Url domain={domain}>
						/api/v1/fa/states?id={'{id}'}
					</GuideItem.Url>
				</GuideItem>
			</Container>
		</Grid>
	)
}

export default Guide
