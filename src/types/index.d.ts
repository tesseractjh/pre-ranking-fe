import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

declare global {
  type CustomCSS = {
    css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  };

  type Params = Record<string, unknown>;
}
