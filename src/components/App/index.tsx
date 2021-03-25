import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { useForm } from 'react-hook-form';

import './App.css';
import { Header } from 'components/Header/Header';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <div>
      <Header />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('13213');
        }}
      >
        Hello World
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
        <input type="submit" />
      </form>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <h1>Мой апп.</h1>
    </div>
  );
};
export default App;
