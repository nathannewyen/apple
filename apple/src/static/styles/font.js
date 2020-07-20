import {
    css
} from 'styled-components';

import SFUIDisplayBlackOTF from '../../fonts/SFDisplay/SF-UI-Display-Black.otf'
import SFUIDisplayBoldOTF from '../../fonts/SFDisplay/SF-UI-Display-Bold.otf'
import SFUIDisplayHeavyOTF from '../../fonts/SFDisplay/SF-UI-Display-Heavy.otf'
import SFUIDisplayLightOTF from '../../fonts/SFDisplay/SF-UI-Display-Light.otf'
import SFUIDisplayMediumOTF from '../../fonts/SFDisplay/SF-UI-Display-Medium.otf'
import SFUIDisplayRegularOTF from '../../fonts/SFDisplay/SF-UI-Display-Regular.otf'
import SFUIDisplaySemiboldOTF from '../../fonts/SFDisplay/SF-UI-Display-Semibold.otf'
import SFUIDisplayThinOTF from '../../fonts/SFDisplay/SF-UI-Display-Thin.otf'
import SFUIDisplayUltralightOTF from '../../fonts/SFDisplay/SF-UI-Display-Ultralight.otf'

const FontFaces = css `
  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayBlackOTF}) format('otf'), url(${SFUIDisplayBlackOTF}) format('otf'),
      url(${SFUIDisplayBlackOTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayHeavyOTF}) format('otf'), url(${SFUIDisplayHeavyOTF}) format('otf'),
      url(${SFUIDisplayHeavyOTF}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayBoldOTF}) format('otf'), url(${SFUIDisplayBoldOTF}) format('otf'),
      url(${SFUIDisplayBoldOTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplaySemiboldOTF}) format('otf'), url(${SFUIDisplaySemiboldOTF}) format('otf'),
      url(${SFUIDisplaySemiboldOTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayMediumOTF}) format('otf'), url(${SFUIDisplayMediumOTF}) format('otf'),
      url(${SFUIDisplayMediumOTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayRegularOTF}) format('otf'), url(${SFUIDisplayRegularOTF}) format('otf'),
      url(${SFUIDisplayRegularOTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayThinOTF}) format('otf'), url(${SFUIDisplayThinOTF}) format('otf'),
      url(${SFUIDisplayThinOTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayLightOTF}) format('otf'), url(${SFUIDisplayLightOTF}) format('otf'),
      url(${SFUIDisplayLightOTF}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'SF Display';
    src: url(${SFUIDisplayUltralightOTF}) format('otf'), url(${SFUIDisplayUltralightOTF}) format('otf'),
      url(${SFUIDisplayUltralightOTF}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  `

export default FontFaces;