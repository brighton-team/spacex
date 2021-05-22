import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Select } from '@material-ui/core';
import img from './img/defaultimg.png';

import { white } from '../../consts/colors';

const AvatarWrapper = styled.div<{ onClick: any }>`
  width: 100px;
  height: 100px;
  border: 1px solid ${white};
  border-radius: 2px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.img.attrs((props) => ({
  src: props.src ? `https://ya-praktikum.tech/api/v2/resources/${props.src}` : img,
  width: props.src ? '100px' : '50px',
  height: 'auto',
}))``;

const TitleUserName = styled.span`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: ${white};
  margin-top: 19px;
`;

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& label + .MuiInput-formControl': {
      marginTop: '10px',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const CssSelect = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& label + .MuiInput-formControl': {
      marginTop: '10px',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(Select);

export { AvatarWrapper, AvatarImage, TitleUserName, CssTextField, CssSelect };
