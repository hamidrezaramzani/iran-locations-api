import { Box, Button, Skeleton } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { DocumentationCode } from "../../components/Documentation/DocumentationCode";
import { useRouter } from "next/router";
import * as SC from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const DocumentationContent = ({
  documentationSections,
  loading,
  content,
  onItemSelect: handleItemSelect,
}) => {
  const router = useRouter();

  const { state } = useContext(ThemeContext);

  const isFirst = router.query.name === documentationSections[0].value;
  const isLast =
    router.query.name ===
    documentationSections[documentationSections.length - 1].value;

  const currentSectionIndex = documentationSections.findIndex(
    ({ value }) => value === router.query.name
  );

  const nextSectionName = documentationSections.filter(
    ({ isComingSoon }) => !isComingSoon
  )[currentSectionIndex + 1].title;

  let prevSectionName = "";
  if (currentSectionIndex > 0) {
    prevSectionName = documentationSections.filter(
      ({ isComingSoon }) => !isComingSoon
    )[currentSectionIndex - 1].title;
  }

  const handleNextSection = async () => {
    const currentSectionIndex = documentationSections.findIndex(
      ({ value }) => value === router.query.name
    );

    const nextSectionName =
      documentationSections[currentSectionIndex + 1].value;

    await handleItemSelect(0, nextSectionName);
  };

  const handlePrevSection = async () => {
    const currentSectionIndex = documentationSections.findIndex(
      ({ value }) => value === router.query.name
    );

    const prevSectionName =
      documentationSections[currentSectionIndex - 1].value;

    await handleItemSelect(0, prevSectionName);
  };

  return (
    <SC.DocumentationContent isDark={state === "dark"}>
      {loading && (
        <Box>
          <Skeleton variant="text" height="40px" width="60%" />
          <Skeleton variant="text" height="40px" width="80%" />
          <Skeleton variant="text" height="40px" width="90%" />
          <Skeleton variant="text" height="40px" width="100%" />
        </Box>
      )}
      {content.length && !loading && (
        <>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                return <DocumentationCode {...props} />;
              },
            }}
          >
            {content}
          </Markdown>
          <Box
            mt="20px"
            width="100%"
            display="flex"
            justifyContent="space-between"
            py="30"
          >
            {!isLast ? (
              <Button onClick={handleNextSection}>
                <MdKeyboardArrowRight fontSize={17} />
                {nextSectionName}{" "}
              </Button>
            ) : null}
            {!isFirst ? (
              <Button onClick={handlePrevSection}>
                {prevSectionName}
                <MdKeyboardArrowLeft fontSize={17} />
              </Button>
            ) : null}
          </Box>
        </>
      )}
    </SC.DocumentationContent>
  );
};
