import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Controller, Control, FieldErrors } from 'react-hook-form';

import { Modal } from 'components/Modal';

export const FormModal = (props: OwnProps): JSX.Element => {
  const {
    isVisible,
    closeModal,
    submitButton,
    title,
    formId,
    onSubmit,
    formFields,
    fieldsErrors,
    control,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      onOk={closeModal}
      onClose={closeModal}
      title={title}
      okButton={submitButton}
    >
      <form id={formId} onSubmit={onSubmit}>
        {formFields.map((field) => (
          <FormControl fullWidth variant="outlined" key={field.title}>
            <Controller
              name={field.title}
              as={
                <TextField
                  id={field.title}
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  helperText={fieldsErrors[field.title] ? fieldsErrors[field.title].message : null}
                  label={field.label}
                  error={Boolean(fieldsErrors[field.title])}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: field.required,
              }}
            />
          </FormControl>
        ))}
      </form>
    </Modal>
  );
};

type FormFields = {
  title: string;
  label: string;
  required: boolean;
};

type OwnProps = {
  isVisible: boolean;
  closeModal: () => void;
  submitButton: React.ReactNode;
  title: string;
  formId: string;
  onSubmit: () => void;
  formFields: FormFields[];
  fieldsErrors: FieldErrors;
  control: Control;
};
