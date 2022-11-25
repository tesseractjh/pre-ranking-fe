const media = {
  tablet: (css: string) => `
    @media screen and (max-width: 768px) {
      ${css}
    }
  `,
  mobile: (css: string) => `
    @media screen and (max-width: 480px) {
      ${css}
    }
  `
};

export default media;
