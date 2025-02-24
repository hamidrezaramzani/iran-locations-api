import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo, useState } from 'react';

import { DocumentationContent } from '../../components/Documentation/DocumentationContent';
import { DocumentationHeader } from '../../components/Documentation/DocumentationHeader';
import { DocumentationHierarchy } from '../../components/Documentation/DocumentationHierarchy';
import { Head } from '../../components/Head/Head';
import Header from '../../components/Header/Header';
import { ThemeContext } from '../../context/ThemeProvider';
import { supabase } from '../../lib/supabase';
import { getMuiTheme } from '../../lib/theme';

export default function Documentation() {
  const { state } = useContext(ThemeContext);
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
          title: 'دریافت استان‌ها با نام',
          value: 'getStateByName',
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
          title: 'دریافت تمامی شهرها',
          value: 'getAllCities',
        },
        {
          title: 'دریافت شهرها بر اساس نام',
          value: 'getCityByName',
        },
        {
          title: 'دریافت شهرها بر اساس آیدی استان',
          value: 'getCitiesByStateId',
        },
        {
          title: 'دریافت شهرها بر اساس نام استان',
          value: 'getCitiesByStateName',
        },
        {
          title: 'دریافت شهر با مختصات جغرافیایی',
          value: 'getCityByLatAndLong',
          isComingSoon: true,
        },

        {
          title: 'دریافت شهر با پلاک خودرو',
          value: 'getCityByLicensePlate',
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

  const theme = useMemo(() => getMuiTheme(state), [state]);

  const fetchDocumentationByName = async (name) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('documentation')
      .select(
        `
        id,
        text
      `
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
    const fetch = async () => {
      const name = router.query.name || 'aboutProject';

      const isValidName = documentationSections.some(
        ({ value }) => value === name
      );

      if (name && isValidName && !content.length) {
        const documentationObject = await fetchDocumentationByName(name);

        router.push({
          query: {
            name: name,
            parent:
              documentationNav.findIndex(({ items }) =>
                items.some(({ value }) => value === name)
              ) || 0,
          },
        });
        if (documentationObject) {
          setContent(documentationObject.text);
        }
      }
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemSelect = async (_, name) => {
    const isComingSoon = documentationNav.some(({ items }) =>
      items.some(({ isComingSoon, value }) => value === name && isComingSoon)
    );

    if (isNaN(name) && !isComingSoon) {
      const parent = documentationNav.findIndex(({ items }) =>
        items.some(({ value }) => value === name)
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
    <ThemeProvider theme={theme}>
      <Head
        title="مستندات API اطلاعات استان‌ها و شهرهای ایران"
        description={
          'مستندات کامل و جامع API برای دسترسی به اطلاعات به‌روز استان‌ها و شهرهای ایران، شامل داده‌های فارسی و انگلیسی با امکان استفاده رایگان و اوپن سورس.'
        }
      />
      <CssBaseline />
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
      >
        <Header setDrawerOpen={setDrawerOpen} />
        <Box width={['95%', '80%']}>
          <Box display="flex" flexDirection="column" mt="50px">
            <DocumentationHeader setDrawerOpen={setDrawerOpen} />
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
    </ThemeProvider>
  );
}
