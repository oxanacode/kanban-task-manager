import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Button from '@mui/joy/Button';

import Sheet from '@mui/joy/Sheet';
import { CssVarsProvider } from '@mui/joy/styles';
import TextField from '@mui/joy/TextField';
import Typography from '@mui/joy/Typography';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLogin } from '../../store/slices/user/userSlice';
import { authUser } from '../../store/slices/user/userThunks';

interface IFormInput {
  login: string;
  password: string;
}

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState<IFormInput | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
    dispatch(setLogin(data.login));
    setUserInfo(data);
  };

  // {
  //       login: 'Mask',
  //       password: 'Tesla4ever',
  //     }

  useEffect(() => {
    if (userInfo) {
      dispatch(authUser(userInfo));
    }
  }, [dispatch, userInfo]);
  return (
    <CssVarsProvider>
      {token}
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
          <Controller
            name="login"
            control={control}
            defaultValue=""
            rules={{
              required: 'Field is require',
              pattern: {
                value: /[a-zA-zа-яА-Я]{2,10}$/,
                message: 'Wrong format',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Login"
                placeholder="login"
                startDecorator={<PersonRoundedIcon />}
              />
            )}
          />
          {errors.login && <Typography level="body2">{errors.login.message}</Typography>}
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{
              required: 'Field is require',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                placeholder="password"
                label="Password"
                startDecorator={<KeyRoundedIcon />}
              />
            )}
          />
          {errors.password && <Typography level="body2">{errors.password.message}</Typography>}
          <Button type="submit" sx={{ mt: 1 }}>
            Log in
          </Button>
        </form>
        <Typography
          endDecorator={<Link to={`/${ROUTES.SIGN_UP.path}`}>Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
};
