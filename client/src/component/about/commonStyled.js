import styled from "styled-components"

export const AbtContainer = styled.div`
    margin-top: 24px;
    border-top: 3px solid ${(props) => props.theme};
    border-bottom: 3px solid #ccc;
    border-radius: 20px;
    background-color: #fff;
    padding: 24px;
    overflow: hidden;
`
export const AbtH3 = styled.h3`
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    margin-bottom: 14px;
`

export const GraphArea = styled.div`
    position: relative;
    margin-top: 20px;
    height: 240px;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");
`

export const Comment = styled.div`
    margin-top: 10px;
    font-size: 18px;
    em {
        font-size: 20px;
        font-weight: bold;
    }
    .num{
        color: #45b884;
    }
    .order + .order {
        ::before {
            content: ' - ';
        }
    }

`

export const Msg = styled.p`
    font-weight: normal;
    font-size: 18px;
    margin-top: 12px;
`