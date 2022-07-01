export default {
  logoStyle: `
    font-size: 2rem;
    font-family: din-condensed;
    letter-spacing: 0.5rem;
    transform: scaleY(0.7) skew(-5deg);
    &:before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-top: -0.3rem;
    }
    &:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-bottom: -0.3rem;
    }
  `,
  relative: `
    position: relative;
    width: 100%;
    height: 100%;
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `,
  fixedCenter: `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `,
  lhCrop: (lineHeight: number): string => {
    return `
      display: inline-block;
      line-height: ${lineHeight};
      &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-top: calc((1 - ${lineHeight}) * 0.5em);
      }
      &:after {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-bottom: calc((1 - ${lineHeight}) * 0.5em);
      }
    `
  }
}
