import { useState } from "react";
import './login-form.css';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchStateInstance } from "../../store/api-actions";
import { getError } from "../../store/data/selectors";
import { env } from "process";

function LoginForm() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: string };
      apiToken: { value: string };
    };
    console.log('hi', target.id.value, target.apiToken.value );
    dispatch(fetchStateInstance({idInstance: target.id.value, apiTokenInstance: target.apiToken.value}))
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="login-form"
    >
      {error && <span className="error">Error</span>}
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="apiToken" placeholder="apiToken" />

      <button type="submit">Sign in</button>

    </form>
  );
}

export default LoginForm;
