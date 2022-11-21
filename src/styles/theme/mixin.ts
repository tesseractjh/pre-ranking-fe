import { CSSProperties } from 'styled-components';

type FlexProperty = {
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
};

const getFlex =
  (props?: FlexProperty) =>
  (
    justifyContent: CSSProperties['justifyContent'] = 'center',
    alignItems: CSSProperties['alignItems'] = 'center',
    gap: CSSProperties['gap'] = '0'
  ) =>
    `
  display: ${props?.display ?? 'flex'};
  flex-direction: ${props?.flexDirection ?? 'row'};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap: ${gap};
`;

export const flex = getFlex();
export const flexColumn = getFlex({ flexDirection: 'column' });
export const inlineFlex = getFlex({ display: 'inline-flex' });
export const inlineFlexColumn = getFlex({
  display: 'inline-flex',
  flexDirection: 'column'
});
