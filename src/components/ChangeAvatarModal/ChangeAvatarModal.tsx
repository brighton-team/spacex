import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeUserAvatarAction } from 'actions/profileActions';
import { IsAvatarChangedSelector } from 'reducers/selectors/userSelector';
import { Modal } from '../Modal';

type ChangeAvatarModalProps = {
  visible: boolean;
  closeModal(): void;
};

export const ChangeAvatarModal: React.FC<ChangeAvatarModalProps> = ({ visible, closeModal }) => {
  const isAvatarChanged = useSelector(IsAvatarChangedSelector);
  const [fileAvatar, setFileAvatar] = useState<File | null>(null);
  const onFileChange = (event: FormEvent<HTMLInputElement>) => {
    const fileList = event.currentTarget.files;

    if (fileList) {
      const file = fileList[0];
      setFileAvatar(file);
    }
  };

  const dispatch = useDispatch();
  // const prevIsAvatarChanged: boolean = usePrevious<boolean>(isAvatarChanged);
  useEffect(() => {
    if (isAvatarChanged) {
      closeModal();
    }
  }, [closeModal, isAvatarChanged]);

  const onFileUpload = () => {
    const formData: FormData = new FormData();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    formData.append('avatar', fileAvatar);
    dispatch(changeUserAvatarAction(formData));
    closeModal();
  };

  return (
    <Modal
      isVisible={visible}
      onOk={onFileUpload}
      onClose={closeModal}
      title="Выберите новый аватар"
      okButton={null}
    >
      <input type="file" onChange={onFileChange} />
    </Modal>
  );
};
