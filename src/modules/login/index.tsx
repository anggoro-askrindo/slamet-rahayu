'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Alert, Box, CircularProgress, FormHelperText } from '@mui/material';
import { postLogin } from './service/login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function LogInForm(): React.JSX.Element {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState({
    username: {
      message: ""
    },
    password: {
      message: ""
    }
  })
  const [isErrorLogin, setIsErrorLogin] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  React.useEffect(() => {
    const user = localStorage.getItem("user")
    if (router && user) {
      router.replace("/");
    }
  }, [router]);

  function onSubmit() {
    if (!username) {
      setErrors((prev) => ({
        ...prev,
        username: { message: "username tidak boleh kosong!" }
      }));
    }
    if (!password) {
      setErrors((prev) => ({
        ...prev,
        password: { message: "password tidak boleh kosong!" }
      }));
    }
    if (username && password) {
      setIsLoading(true);
      postLogin(username, password).then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.replace("/");
      }).catch((err) => {
        setIsErrorLogin(true);
        console.log({err: err.response.data});
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }

  function onUserNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    setErrors((prev) => ({
      ...prev,
      username: { message: "" }
    }));
    setIsErrorLogin(false);
    setUsername(e.target.value)
  }
  
  function onPasswordChange (e: React.ChangeEvent<HTMLInputElement>) {
    setErrors((prev) => ({
      ...prev,
      password: { message: "" }
    }));
    setIsErrorLogin(false);
    setPassword(e.target.value)
  }

  return (
      <Box
        sx={{
          display: { xs: 'flex', lg: 'grid' },
          flexDirection: 'column',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
        }}
      >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', background: "#081028" }}>
        <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
          <Box sx={{ maxWidth: '450px', width: '100%' }}>
          <Stack spacing={4} sx={{position: "relative"}}>
            <Stack spacing={1}>
              <Typography variant="h4">Login</Typography>
            </Stack>
            <Box>
              <Stack spacing={2}>
                <FormControl>
                  <InputLabel>Username</InputLabel>
                  <OutlinedInput error={!!errors.username.message} onChange={onUserNameChange} label="username" type="text" />
                  <FormHelperText sx={{ color: "red" }}>{errors.username.message || " "}</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    error={!!errors.password.message}
                    onChange={onPasswordChange}
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      showPassword ? (
                        <VisibilityOffIcon
                          cursor="pointer"
                          onClick={(): void => {
                            setShowPassword(false);
                          }}
                        />
                      ) : (
                        <VisibilityIcon
                          cursor="pointer"
                          onClick={(): void => {
                            setShowPassword(true);
                          }}
                        />
                      )
                    }
                  />
                  <FormHelperText sx={{ color: "red" }}>{errors.password.message || " "}</FormHelperText>
                </FormControl>
                <Button onClick={onSubmit} disabled={isLoading} type="submit" variant="contained">
                  Masuk { isLoading && <CircularProgress color="secondary" size={20} /> }
                </Button>
              </Stack>
            </Box>
            {isErrorLogin && <Alert sx={{ position: "absolute", bottom: "-70px", width: "100%" }} color="error">Username atau password salah</Alert>}
          </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
          color: 'var(--mui-palette-common-white)',
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'center',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          
        </Stack>
      </Box>
    </Box>
  );
}
