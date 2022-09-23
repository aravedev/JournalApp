import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";

// Redux

import { useDispatch, useSelector } from "react-redux";
import { checkingCredentials, initialState } from "../../store";
import { checkingAuthentication, checkingGoogleSignIn } from "../thunks";

//

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: "user123@mail.com",
    password: 12345,
  });

  //  Redux
  const dispatch = useDispatch();

  //
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("OnGoogleSignIn");
    dispatch(checkingAuthentication());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
