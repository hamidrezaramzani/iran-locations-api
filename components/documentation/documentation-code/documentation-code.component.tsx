'use client';
import { Button } from '@mui/material';
import { FaRegCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import * as SC from './documentation-code.style';

export const DocumentationCode = (props: any) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || '');
  const code = String(children).replace(/\n$/, '');

  const handleCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return match ? (
    <SC.DocumentationCode>
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={code}
        language={match[1]}
        style={atomDark}
        customStyle={{
          direction: 'ltr',
        }}
      />
      <Button className="copy-button" onClick={handleCodeCopy}>
        <FaRegCopy className="copy-button-icon" />
      </Button>
    </SC.DocumentationCode>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
