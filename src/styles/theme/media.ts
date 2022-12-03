import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

const media = {
  tablet: (
    cssString: string | FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => css`
    @media screen and (max-width: 768px) {
      ${cssString}
    }
  `,
  mobile: (
    cssString: string | FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => css`
    @media screen and (max-width: 480px) {
      ${cssString}
    }
  `
};

export default media;
