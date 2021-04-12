import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@material-ui/core';

import Modal from '../../shared/components/Modal';
import { SubmitButton } from '../../pages/Forum/styledItems';
import { changeUserPasswordAction, PasswordData } from '../../actions/profileActions';
import { UserState } from '../../types/actionTypes';

type ChangePasswordModalProps = {
  visible: boolean;
  closeModal(): void;
};

const submitButton = (
  <SubmitButton variant="outlined" type="submit" form="new-password">
    Изменить пароль
  </SubmitButton>
);

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  visible,
  closeModal,
}) => {
  const { isPasswordChanged } = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();
  function usePrevious<T>(value: T): T {
    const ref: any = useRef<T>();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }
  const prevIsPasswordChanged: boolean = usePrevious<boolean>(isPasswordChanged);
  useEffect(() => {
    if (prevIsPasswordChanged !== isPasswordChanged && isPasswordChanged) {
      closeModal();
    }
  }, [closeModal, isPasswordChanged, prevIsPasswordChanged]);

  const { control, handleSubmit, errors: fieldsErrors } = useForm<PasswordData>();
  const onSubmit = handleSubmit((values) => {
    dispatch(changeUserPasswordAction(values));
  });

  return (
    <Modal
      isVisible={visible}
      onOk={closeModal}
      onClose={closeModal}
      title="Придумайте новый пароль"
      okButton={submitButton}
    >
      <form id="new-password" onSubmit={onSubmit}>
        <FormControl fullWidth variant="outlined">
          <Controller
            name="oldPassword"
            as={
              <TextField
                id="oldPassword"
                margin="dense"
                type="password"
                fullWidth
                helperText={fieldsErrors.oldPassword ? fieldsErrors.oldPassword.message : null}
                label="Old password"
                error={Boolean(fieldsErrors.oldPassword)}
              />
            }
            control={control}
            defaultValue=""
            rules={{
              required: 'Required',
              pattern: {
                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
                message: 'invalid value',
              },
            }}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <Controller
            name="newPassword"
            as={
              <TextField
                id="newPassword"
                margin="dense"
                type="password"
                fullWidth
                helperText={fieldsErrors.newPassword ? fieldsErrors.newPassword.message : null}
                label="New password"
                error={Boolean(fieldsErrors.newPassword)}
              />
            }
            control={control}
            defaultValue=""
            rules={{
              required: 'Required',
              pattern: {
                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
                message: 'invalid value',
              },
            }}
          />
        </FormControl>
      </form>
    </Modal>
  );
};
