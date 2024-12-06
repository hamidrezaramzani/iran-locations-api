"use client";
import { Button } from "@mui/material";
import { FaRegCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import * as SC from "./styles";

export const DocumentationCode = (props) => {
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
        style={coldarkDark}
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
