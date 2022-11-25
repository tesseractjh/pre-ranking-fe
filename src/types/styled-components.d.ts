import 'styled-components';
import color from '@styles/theme/color';
import media from '@styles/theme/media';
import * as mixin from '@styles/theme/mixin';

declare module 'styled-components' {
  interface DefaultTheme {
    color: typeof color;
    media: typeof media;
    mixin: typeof mixin;
  }
}
