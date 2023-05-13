import styled from "styled-components"

export const AbtContainer = styled.div`
    margin-top: 24px;
    border-top: 3px solid ${(props) => props.theme};
    border-bottom: 3px solid #ccc;
    border-radius: 20px;
    background-color: #fff;
    padding: 24px;
`
export const AbtH3 = styled.h3`
    font-size: 24px;
`

export const BackBtn = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40px;
`