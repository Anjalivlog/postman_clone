import React from 'react';
import { styled  } from '@mui/material'
   
const Image = styled('img')({
    width: 100,
    padding: 5,
})
const Header = () => {

    const logo = 'https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';

  return (
    <Image src={logo} alt='logo' />

  )
}

export default Header