// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NunitoExtraBoldWoff2 from '../../static/fonts/nunito/Nunito-ExtraBold.ttf';

export default {
  styleOverrides: `
    @font-face {
      font-family: Nunito;
      font-style: normal;
      font-display: swap;
      font-weight: 800;
      src: local('Nunito'), local('Nunito-ExtraBold'), url(${NunitoExtraBoldWoff2}) format('truetype');
    }
    *,:after,:before {
        box-sizing: border-box
    }
    html {
      text-size-adjust: 100%;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    body, html {
      letter-spacing: normal;
      text-transform: none;
    }
  `,
};
