import React, { ChangeEvent } from "react";
import { TextField } from "components/TextField/TextField";
import { UseFormMethods } from "react-hook-form";

interface Props {
  register: UseFormMethods["register"];
  emailChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const RegistrationFields = ({ register, emailChange }: Props) => {
  return (
    <>
      <TextField
        autoComplete="username"
        variant="outlined"
        name="username"
        label="Name"
        fullWidth
        inputRef={register}
      />
      <TextField
        onChange={emailChange}
        autoComplete="email"
        variant="outlined"
        name="email"
        type="email"
        label="Email"
        fullWidth
        inputRef={register}
      />
      <TextField
        autoComplete="new-password"
        variant="outlined"
        name="password"
        type="password"
        label="Password"
        fullWidth
        inputRef={register}
      />

      <TextField
        autoComplete="new-password"
        variant="outlined"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        fullWidth
        inputRef={register}
      />
    </>
  );
};
