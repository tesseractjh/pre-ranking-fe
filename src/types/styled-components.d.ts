import 'styled-components';
import color from '@styles/theme/color';
import * as mixin from '@styles/theme/mixin';

declare module 'styled-components' {
  interface DefaultTheme {
    color: typeof color;
    mixin: typeof mixin;
  }
}
