import { Fragment, useState } from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterForm from "./FilterForm";

const FilterButton = () => {
  const [anchorFilterEl, setAnchorFilterEl] = useState<null | HTMLElement>(
    null
  );

  const handleOpenFilterForm = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorFilterEl(event.currentTarget);
  };

  const handleCloseFilterForm = () => {
    setAnchorFilterEl(null);
  };

  return (
    <Fragment>
      <Tooltip title="Filter list">
        <IconButton onClick={handleOpenFilterForm} sx={{ p: 0 }}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorFilterEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorFilterEl)}
        onClose={handleCloseFilterForm}
      >
        <MenuItem onClick={handleCloseFilterForm}>
          <FilterForm />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default FilterButton;
