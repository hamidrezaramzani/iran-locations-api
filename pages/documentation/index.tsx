import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  Header,
  Head,
  DocumentationContent,
  DocumentationHierarchy,
} from '../../components';
import { supabase } from '../../lib/supabase';
import { MdMenu } from 'react-icons/md';

export default function Documentation() {
  const router = useRouter();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const documentationNav = [
    {
      title: 'مقدمه',
      items: [
        {
          title: 'درباره پروژه',
          value: 'aboutProject',
        },
        {
          title: 'هدف و کاربردها',
          value: 'goalsAndUses',
        },
      ],
    },
    {
      title: 'مستندات دسترسی به استان‌ها',
      items: [
        {
          title: 'دریافت تمامی استان‌ها',
          value: 'getAllStates',
        },
        {
          title: 'دریافت استان با آیدی',
          value: 'getStateById',
        },
        {
          title: 'دریافت استان‌ ها با نام',
          value: 'getStateByName',
        },
        {
          title: 'دریافت استان‌ با پیش شماره',
          value: 'getStateByLandlinePrefix',
        },
        {
          title: 'دریافت استان ها با پلاک خودرو',
          value: 'getCityByLicensePlate',
        },
        {
          title: 'دریافت استان با مختصات جغرافیایی',
          value: 'getStateByLatAndLong',
          isComingSoon: true,
        },
      ],
    },
    {
      title: 'مستندات دسترسی به شهرها',
      items: [
        {
          title: 'دریافت تمامی شهر ها',
          value: 'getAllCities',
        },
        {
          title: 'دریافت شهر ها بر اساس نام',
          value: 'getCityByName',
        },
        {
          title: 'دریافت شهر ها بر اساس آیدی استان',
          value: 'getCitiesByStateId',
        },
        {
          title: 'دریافت شهر ها بر اساس نام استان',
          value: 'getCitiesByStateName',
        },
        {
          title: 'دریافت شهر با مختصات جغرافیایی',
          value: 'getCityByLatAndLong',
          isComingSoon: true,
        },
      ],
    },
    {
      title: 'ویژگی‌ها',
      items: [
        {
          title: 'اطلاعات ارائه شده در API',
          value: 'apiFeatures',
        },
        {
          title: 'انواع داده‌ها',
          value: 'dataTypes',
        },
      ],
    },
    {
      title: 'پشتیبانی',
      items: [
        {
          title: 'سوالات متداول',
          value: 'faq',
        },
        {
          title: 'تماس با من',
          value: 'contactMe',
        },
      ],
    },
  ];

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDocumentationByName = async name => {
    setLoading(true);
    const { data, error } = await supabase
      .from('documentation')
      .select(
        `
        id,
        text
      `,
      )
      .eq('name', name)
      .single();

    if (error) {
      return;
    }

    setLoading(false);

    return data;
  };

  const documentationSections = documentationNav
    .map(({ items }) => [...items.filter(({ isComingSoon }) => !isComingSoon)])
    .flat(Infinity);

  useEffect(() => {
    if (!router.isReady) return;

    if (Object.keys(router.query).length > 0) {
      const fetch = async () => {
        const name = router.query.name || 'aboutProject';
        const isValidName = documentationSections.some(
          ({ value }: any) => value === name,
        );

        if (name && isValidName && !content.length) {
          const documentationObject = await fetchDocumentationByName(name);

          router.push(
            {
              query: {
                name: name,
                parent:
                  documentationNav.findIndex(({ items }) =>
                    items.some(({ value }) => value === name),
                  ) || 0,
              },
            },
            undefined,
            { shallow: true },
          );

          if (documentationObject) {
            setContent(documentationObject.text);
          }
        }
      };

      fetch();
    } else {
      router.push(
        {
          query: {
            name: 'aboutProject',
            parent: 0,
          },
        },
        undefined,
        { shallow: true },
      );
    }
  }, [router.isReady, router.query]);

  const handleItemSelect = async (_, name) => {
    const isComingSoon = documentationNav.some(({ items }) =>
      items.some(({ isComingSoon, value }) => value === name && isComingSoon),
    );

    if (isNaN(name) && !isComingSoon) {
      const parent = documentationNav.findIndex(({ items }) =>
        items.some(({ value }) => value === name),
      );
      router.push({
        query: {
          name,
          parent,
        },
      });
      const documentationObject = await fetchDocumentationByName(name);
      if (documentationObject) {
        setContent(documentationObject.text);
      }
    } else if (!isNaN(name) && !isComingSoon) {
      router.push({
        query: {
          name: router.query.name,
          parent: name,
        },
      });
    }
  };

  return (
    <>
      <Button
        color="primary"
        onClick={() => setDrawerOpen((prevOpen: boolean) => !prevOpen)}
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 20,
          zIndex: 1000,
          display: ['flex', 'none'],
          height: '64px',
          width: '64px',
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant="contained"
      >
        <MdMenu size={24} />
      </Button>
      <Head
        title="مستندات API اطلاعات استان‌ها و شهرهای ایران"
        description={
          'مستندات کامل و جامع API برای دسترسی به اطلاعات به‌روز استان‌ها و شهرهای ایران، شامل داده‌های فارسی و انگلیسی با امکان استفاده رایگان و اوپن سورس.'
        }
      />
      <Box width="100%" height="100vh" display="flex" justifyContent="center">
        <Header />
        <Box width={['95%', '80%']}>
          <Box display="flex" flexDirection="column" py="50px">
            <Box display="flex" gap="10px">
              <DocumentationHierarchy
                items={documentationNav}
                onItemSelect={handleItemSelect}
                expandedItem={Number(router.query.parent) || 0}
                selectedItem={router.query.name || 'aboutProject'}
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
              />

              <DocumentationContent
                loading={loading}
                documentationSections={documentationSections}
                content={content}
                onItemSelect={handleItemSelect}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
