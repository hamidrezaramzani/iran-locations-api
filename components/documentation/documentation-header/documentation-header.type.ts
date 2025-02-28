import { Dispatch, SetStateAction } from "react";

export type SCDocumentationHeaderProps = {
  isDark: boolean;
};

export type DocumentationHeaderProps = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
};
