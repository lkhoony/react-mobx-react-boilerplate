import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height : 100vh;
    margin: 0;
    padding : 0;
    overflow-x: hidden;
`;

export const Contents = styled.div`
    margin-left: ${({ isShown }) => (isShown ? '90%' : '200px')};
    // margin-top : 100px;
    width: calc(100vw - 200px);
    height : 100vh;
    transition: margin-left 1s;
    background : white;
    // @media ${(props)=>props.theme.breakpoints.md}{
    //     margin-left : 0;
    //     width : 100vw;
    // }
`