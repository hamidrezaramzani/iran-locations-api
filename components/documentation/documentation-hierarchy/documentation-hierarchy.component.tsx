import { Box, Button, Chip, Drawer } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

import * as SC from "./documentation-hierarchy.style";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";

export const DocumentationHierarchy = ({
  onItemSelect,
  items,
  selectedItem,
  expandedItem,
  isDrawerOpen,
  setDrawerOpen,
}) => {
  const { state } = useContext(ThemeContext);
  const TreeView = () => (
    <SimpleTreeView
      onItemClick={onItemSelect}
      expandedItems={[expandedItem]}
      selectedItems={[selectedItem]}
    >
      {items.map((item, index) => (
        <TreeItem
          itemId={index}
          key={index}
          className="tree-item-parent"
          label={item.title}
        >
          {item.items.map((item2) => (
            <TreeItem
              itemId={item2.value}
              className="tree-item-child"
              label={
                <>
                  {item2.title}{" "}
                  {item2.isComingSoon && (
                    <Chip
                      variant="outlined"
                      size="small"
                      color="primary"
                      label="به زودی"
                    />
                  )}
                </>
              }
              disabled={item2.isComingSoon}
            />
          ))}
        </TreeItem>
      ))}
    </SimpleTreeView>
  );
  
  return (
    <SC.DocumentationHierarchy isDark={state === "dark"}>
      <Box className="md-tree-view">
        <TreeView />
      </Box>
      <Drawer
        sx={{ "& .MuiDrawer-paper": { width: "80%" } }}
        anchor="right"
        open={isDrawerOpen}
      >
        <Box padding="20px" marginTop="50px">
          <Box
            className="drawer-top"
            display="flex"
            justifyContent="space-between"
            mb="10px"
          >
            <Button
              className="drawer-close-button"
              onClick={() => setDrawerOpen(false)}
            >
              <MdClose fontSize={20} />
            </Button>
          </Box>
          <TreeView />
        </Box>
      </Drawer>
    </SC.DocumentationHierarchy>
  );
};
