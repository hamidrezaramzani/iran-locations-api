'use client';
import { Alert, Button } from '@mui/material';
import { FaRegCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { duotoneLight, duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import * as SC from './documentation-code.style';
import { ColorModeContext } from '../../../providers/color-mode-provider';
import { useContext } from 'react';
import { Snackbar } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
export const DocumentationCode = (props: any) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || '');
  const code = String(children).replace(/\n$/, '');
  const { state } = useContext(ColorModeContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { t } = useTranslation();

  const handleCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return match ? (
    <SC.DocumentationCode>
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={code}
        language={match[1]}
        style={state === 'dark' ? duotoneDark : duotoneLight}
        customStyle={{
          direction: 'ltr',
        }}
      />
      <Button className="copy-button" onClick={handleCodeCopy}>
        <FaRegCopy className="copy-button-icon" />
      </Button>
      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="filled"
          icon={false}
        >
          {t('common:copied')}
        </Alert>
      </Snackbar>
    </SC.DocumentationCode>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
