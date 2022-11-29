import 'styled-components';
import color from '@styles/theme/color';
import media from '@styles/theme/media';
import * as mixin from '@styles/theme/mixin';
import * as placeholder from '@styles/theme/placeholder';

declare module 'styled-components' {
  interface DefaultTheme {
    color: typeof color;
    media: typeof media;
    mixin: typeof mixin;
    placeholder: typeof placeholder;
  }
}
