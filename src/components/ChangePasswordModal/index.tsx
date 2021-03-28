import { FormControl, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../shared/components/Modal';
import { SubmitButton } from '../../pages/Forum/styledItems';

type ChangePasswordModalProps = {
  visible: boolean;
  closeModal(): void;
};

type FormData = {
  password: string;
  confirmPassword: string;
};

const submitButton = (
  <SubmitButton variant="outlined" type="submit" form="new-password">
    Создать
  </SubmitButton>
);

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  visible,
  closeModal,
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  useEffect(() => {
    setModalVisibility(visible);
  }, [visible]);

  const { control, handleSubmit, watch, errors: fieldsErrors } = useForm<FormData>();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = handleSubmit((values) => {
    console.log('values:', values); // eslint-disable-line no-console
    closeModal();
  });

  return (
    <Modal
      isVisible={isModalVisible}
      onOk={closeModal}
      onClose={closeModal}
      title="Придумайте новый пароль"
      okButton={submitButton}
    >
      <form id="new-password" onSubmit={onSubmit}>
        <FormControl fullWidth variant="outlined">
          <Controller
            name="password"
            as={
              <TextField
                id="password"
                margin="dense"
                type="password"
                fullWidth
                helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
                label="password"
                error={Boolean(fieldsErrors.password)}
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
            name="confirmPassword"
            as={
              <TextField
                id="confirmPassword"
                margin="dense"
                type="password"
                fullWidth
                helperText={
                  fieldsErrors.confirmPassword ? fieldsErrors.confirmPassword.message : null
                }
                label="Confirm Password"
                error={Boolean(fieldsErrors.confirmPassword)}
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
              validate: (value) => value === password.current || 'The passwords do not match',
            }}
          />
        </FormControl>
      </form>
    </Modal>
  );
};
