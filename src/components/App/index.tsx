import React from "react";
import styled from 'styled-components'

import { useForm } from "react-hook-form";

import './App.css';

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


const App = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
          <input type="submit" />
        </form>
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <h1>Мой апп.</h1>
      </div>
    );
}
export default App;