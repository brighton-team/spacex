import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../shared/components/Modal';
import { UserState } from '../../types/actionTypes';
import { changeUserAvatarAction } from '../../actions/profileActions';

type ChangeAvaterModalProps = {
  visible: boolean;
  closeModal(): void;
};

export const ChangeAvatarModal: React.FC<ChangeAvaterModalProps> = ({ visible, closeModal }) => {
  const { isAvatarChanged } = useSelector((state: UserState) => state.user);
  const [fileAvatar, setFileAvatar] = useState(null);
  const onFileChange = (event: any) => {
    setFileAvatar(event.target.files[0]);
  };
  const dispatch = useDispatch();
  function usePrevious<T>(value: T): T {
    const ref: any = useRef<T>();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }
  const prevIsAvatarChanged: boolean = usePrevious<boolean>(isAvatarChanged);
  useEffect(() => {
    if (prevIsAvatarChanged !== isAvatarChanged && isAvatarChanged) {
      closeModal();
    }
  }, [closeModal, isAvatarChanged, prevIsAvatarChanged]);

  const onFileUpload = () => {
    const formData = new FormData();
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
