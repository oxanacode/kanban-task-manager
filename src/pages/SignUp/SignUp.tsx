import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    // dispatch(
    //   authUser({
    //     login: 'Mask',
    //     password: 'Tesla4ever',
    //   })
    // );
  }, [dispatch]);
  return <div>Sign Up</div>;
};
