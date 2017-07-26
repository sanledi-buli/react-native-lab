import React, { Component } from 'react';
import Wallpaper from '../components/Wallpaper';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import SignupSection from '../components/SignupSection';
import ButtonSubmit from '../components/ButtonSubmit';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <FormLogin />
        <SignupSection />
        <ButtonSubmit />
      </Wallpaper>
    );
  }
}
