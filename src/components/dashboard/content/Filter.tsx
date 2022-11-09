import { IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const Filter = () => {
  return (
    <Tooltip title="Filter list">
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Filter;
