import styled from 'styled-components';

export const IconWrap = styled.div`
  width : ${({width}) => (width ? width : "12px")};
  height : ${({height}) => (height ? height : "12px")};
  color : ${({color}) => (color ? color : "#191E29")};
  cursor : pointer;
`

export const IconImg = styled.img`
  width : 100%;
  height : 100%;
  src: url(${({ src }) => src ? src : ''});
`