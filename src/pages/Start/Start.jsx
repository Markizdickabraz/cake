import React from 'react'
import { SubTitle, Title } from '../About/AboutStyle';
import { Img } from './StartStyle';

const Start = () => {
  return (
    <div>
      <Title>Кондитерський цех "Ідеал"</Title>
      <Img src={require('../../img/logo.png')} alt="logo" />
      <SubTitle>Якість – перш за все!</SubTitle>
    </div>
  )
}

export default Start;
