import { Container } from '@mui/material'
import RequestExampleItem from './RequestExampleItem'

const Examples = () => {


    const REQUEST_DATA = [
        {
            value: 0,
            title: "JavaScript",
            code: `fetch('https://iran-locations-api.vercel.app/api/v1/cities?state=تهران')
            .then(response => response.json())
            .then(json => console.log(json));`,
            syntax: "javascript"
        },
        {
            value: 1,
            title: "Php",
            code: `$ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, "https://iran-locations-api.vercel.app/api/v1/cities?state=تهران");
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, POST DATA);
            $result = curl_exec($ch);            
            print_r($result);
            curl_close($ch);`,
            syntax: "php"
        },
        {
            value: 2,
            title: "python",
            code: `import requests
            
            response = requests.get("https://iran-locations-api.vercel.app/api/v1/cities?state=تهران")
            data = response.json()
            `,
            syntax: "python"
        }
    ]

    const RESPONSE_DATA = [
        {
            value: 0,
            title: "json",
            code: `
[
    {
      "name": "تهران",
      "latitude"	"35.410"
      "longitude"	"51.240"
    },
    ...
]
            `,
            syntax: "json"
        },
    ]


    const ERROR_DATA = [
        {
            value: 0,
            title: "json",
            code: `{ message: "invalid request - please send  a valid city name with 'city' param"}
            `,
            syntax: "json"
        },
    ]

    return (
        <Container sx={{ paddingTop: "50px" }}>
            <RequestExampleItem>
                <RequestExampleItem.Description title="نمونه ارسال درخواست" description=".شما می‌توانید با ابزار‌های متفاوت و به‌راحتی از وب‌سرویس ما استفاده کنید" />
                <RequestExampleItem.Code data={REQUEST_DATA} />
            </RequestExampleItem>

            <RequestExampleItem>
                <RequestExampleItem.Description title="نمونه جواب دریافت شده" description=".نمونه‌جوابی که در صورت درست بودن درخواست دریافت می‌کنید" />
                <RequestExampleItem.Code data={RESPONSE_DATA} />
            </RequestExampleItem>

            <RequestExampleItem>
                <RequestExampleItem.Description title="نمونه خطای دریافتی" description=".در صورت درست نبودن پارامتر ورودی خطای فوق را دریافت می‌کنید" />
                <RequestExampleItem.Code data={ERROR_DATA} />
            </RequestExampleItem>
        </Container>
    )
}

export default Examples