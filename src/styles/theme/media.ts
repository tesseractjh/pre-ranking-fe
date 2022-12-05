import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

const media = {
  desktop: (
    cssString: string | FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => css`
    @media screen and (min-width: 769px) {
      ${cssString}
    }
  `,
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
