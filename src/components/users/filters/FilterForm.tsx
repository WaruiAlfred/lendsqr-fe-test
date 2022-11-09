import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FC, useReducer } from "react";
import { useForm } from "react-hook-form";

enum FilterActionsVariations {
  SET_ORGANIZATION = "SET_ORGANIZATION",
  SET_USERNAME = "SET_USERNAME",
  SET_EMAIL = "SET_EMAIL",
  SET_DATE = "SET_ORGANIZATION",
  SET_PHONE_NUMBER = "SET_PHONE_NUMBER",
  SET_STATUS = "SET_ORGANIZATION",
}

interface FilterAction {
  type: FilterActionsVariations;
  payload: object;
}

interface FilterState {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const reducerInitialState: FilterState = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: "",
};

const filterReducer = (state: FilterState, action: FilterAction) => {
  const { type, payload } = action;

  switch (type) {
    case FilterActionsVariations.SET_ORGANIZATION:
      return { ...state, organization: payload };
    case FilterActionsVariations.SET_USERNAME:
      return { ...state, username: payload };
    case FilterActionsVariations.SET_EMAIL:
      return { ...state, email: payload };
    case FilterActionsVariations.SET_DATE:
      return { ...state, date: payload };
    case FilterActionsVariations.SET_PHONE_NUMBER:
      return { ...state, phoneNumber: payload };
    case FilterActionsVariations.SET_STATUS:
      return { ...state, status: payload };
    default:
      return { ...state };
  }
};

const FilterForm: FC = () => {
  const [state, dispatch] = useReducer<FilterState | any>(
    filterReducer,
    reducerInitialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSetFilters = () => {};

  return (
    <form onSubmit={handleSubmit(handleSetFilters)}>
      <Box display={"flex"} flexDirection={"column"}>
        {/*
                  Organization - select
                  Username - text
                  email - text
                  date - date picker
                  phone number - text
                  status - select
                  reset and filter buttons
                */}

        <FormControl fullWidth>
          <InputLabel id="organization">Organization</InputLabel>
          <Select
            labelId="organization"
            id="organization"
            value={"organization"}
            label="Organization"
            // onChange={handleChange}
          >
            <MenuItem value={1}>Microsoft</MenuItem>
            <MenuItem value={2}>Google</MenuItem>
            <MenuItem value={3}>Amazon</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="username"
          label="Username"
          // name="username"
          {...register("username")}
          value={"username"}
          // onChange={(e) => onAddusernameOnChange(e.target.value)}
          error={!!errors?.username}
          // helperText={errors?.username ? errors.username.message : null}
        />
        <TextField
          id="email"
          label="Email"
          // name="email"
          {...register("email")}
          value={"johndoe@gmail.com"}
          // onChange={(e) => onAddEmailOnChange(e.target.value)}
          error={!!errors?.email}
          // helperText={errors?.email ? errors.email.message : null}
        />
        <TextField
          id="date"
          label="Date"
          // name="date"
          {...register("date")}
          value={"date"}
          // onChange={(e) => onAdddateOnChange(e.target.value)}
          error={!!errors?.date}
          // helperText={errors?.date ? errors.date.message : null}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          // name="phoneNumber"
          {...register("phoneNumber")}
          value={"phoneNumber"}
          // onChange={(e) => onAddphoneNumberOnChange(e.target.value)}
          error={!!errors?.phoneNumber}
          // helperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
        />
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            value={"status"}
            label="status"
            // onChange={handleChange}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"inactive"}>Inactive</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined">Reset</Button>
        <Button type="submit" variant="contained">
          Filter
        </Button>
      </Box>
    </form>
  );
};

export default FilterForm;
