import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { authButtonColor } from 'consts/colors';
import { ChangePasswordModal } from 'components/ChangePasswordModal';
import { logOutAction } from 'actions/signInActions';
import { UserState } from 'types/actionTypes';
import { changeUserDataAction } from 'actions/profileActions';
import { ChangeAvatarModal } from 'components/ChangeAvatarModal';
import { AvatarWrapper, AvatarImage, TitleUserName, CssTextField } from './styledItems';
import { PageWrapper, TableWrapper } from '../Forum/styledItems';
import { FormInputWrapper, TextButton } from '../Login/styles';
import { FormData } from '../Login/Login';

export const StyledButton = withStyles({
  root: {
    backgroundColor: authButtonColor,
    height: '37px',
    padding: '0',
    marginTop: '15px',
    display: 'block',
  },
})(Button);

export const ProfilePage = (): JSX.Element => {
  const { loaded } = useSelector((state: UserState) => state.user);
  const data = useSelector((state: UserState | undefined) => state?.user?.data);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleAvatarModal, setIsVisibleAvatarModal] = useState(false);
  const dispatch = useDispatch();
  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    dispatch(changeUserDataAction(values));
  });
  const handleVisibleModalChangePasswords = () => {
    setIsVisibleModal(!isVisibleModal);
  };
  const handleVisibleModalAvatar = () => {
    setIsVisibleAvatarModal(!isVisibleAvatarModal);
  };

  const logOut = () => {
    dispatch(logOutAction());
  };

  return (
    <PageWrapper padding="90px 318px 30px">
      {loaded ? (
        <>
          <TableWrapper>
            <AvatarWrapper onClick={handleVisibleModalAvatar}>
              <AvatarImage src={`https://ya-praktikum.tech/api/v2/resources/${data?.avatar}`} />
            </AvatarWrapper>
            <TitleUserName>Иван</TitleUserName>
            <FormInputWrapper currentMarginTop="10px" currentWidth="80%">
              <form onSubmit={onSubmit}>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="login"
                    as={
                      <CssTextField
                        id="login"
                        helperText={fieldsErrors.login ? fieldsErrors.login.message : null}
                        label="Login"
                        error={Boolean(fieldsErrors.login)}
                      />
                    }
                    control={control}
                    defaultValue={data?.login || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /[0-9a-zA-Z]{6,20}/g,
                        message: 'invalid value from 6 to 20 letters or numbers',
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="email"
                    as={
                      <CssTextField
                        id="email"
                        helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                        label="Email"
                        type="email"
                        error={Boolean(fieldsErrors.email)}
                      />
                    }
                    control={control}
                    defaultValue={data?.email || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'invalid email address',
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="first_name"
                    as={
                      <CssTextField
                        id="firstName"
                        helperText={
                          fieldsErrors.first_name ? fieldsErrors.first_name.message : null
                        }
                        label="FirstName"
                        error={Boolean(fieldsErrors.first_name)}
                      />
                    }
                    control={control}
                    defaultValue={data?.first_name || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                        message: 'invalid value',
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="second_name"
                    as={
                      <CssTextField
                        id="lastName"
                        helperText={
                          fieldsErrors.second_name ? fieldsErrors.second_name.message : null
                        }
                        label="LastName"
                        error={Boolean(fieldsErrors.second_name)}
                      />
                    }
                    control={control}
                    defaultValue={data?.second_name || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                        message: 'invalid value',
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="phone"
                    as={
                      <CssTextField
                        id="phoneNumber"
                        helperText={fieldsErrors.phone ? fieldsErrors.phone.message : null}
                        label="PhoneNumber"
                        error={Boolean(fieldsErrors.phone)}
                      />
                    }
                    control={control}
                    defaultValue={data?.phone || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                        message: 'invalid value',
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    name="display_name"
                    as={
                      <CssTextField
                        id="nickname"
                        helperText={
                          fieldsErrors.display_name ? fieldsErrors.display_name.message : null
                        }
                        label="Nickname"
                        error={Boolean(fieldsErrors.display_name)}
                      />
                    }
                    control={control}
                    defaultValue={data?.display_name || ''}
                    rules={{
                      required: 'Required',
                      pattern: {
                        value: /[0-9a-zA-Z]{6,20}/g,
                        message: 'invalid value from 6 to 20 letters or numbers',
                      },
                    }}
                  />
                </FormControl>
                <StyledButton type="submit">
                  <TextButton>Изменить данные</TextButton>
                </StyledButton>
              </form>
              <StyledButton onClick={handleVisibleModalChangePasswords}>
                <TextButton>Изменить пароль</TextButton>
              </StyledButton>
              <StyledButton onClick={logOut}>
                <TextButton>Выход</TextButton>
              </StyledButton>
            </FormInputWrapper>
          </TableWrapper>
          <ChangePasswordModal
            visible={isVisibleModal}
            closeModal={handleVisibleModalChangePasswords}
          />
          <ChangeAvatarModal visible={isVisibleAvatarModal} closeModal={handleVisibleModalAvatar} />
        </>
      ) : (
        <h1>Loader</h1>
      )}
    </PageWrapper>
  );
};