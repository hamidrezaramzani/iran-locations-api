"use client";
import { Button } from "@mui/material";
import { FaRegCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import * as SC from "./documentation-code.style";

export const DocumentationCode = (props: any) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <SC.DocumentationCode>
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={atomDark}
        customStyle={{
          direction: "ltr",
        }}
      />
      <Button className="copy-button">
        <FaRegCopy className="copy-button-icon" />
      </Button>
    </SC.DocumentationCode>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
