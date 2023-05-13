import React from 'react';
import styled from 'styled-components';
import { AbtContainer, AbtH3 } from './commonStyled';
function Message({tag, msg, theme}) {
  return (
    <AbtContainer theme={theme}>
        <EleStatusTag theme={theme}>{tag}</EleStatusTag>
        <Msg>{msg}</Msg>
    </AbtContainer>
  )
}


const Msg = styled.p`
    font-size: 18px;
    margin-top: 12px;
`

const EleStatusTag = styled.span`
  padding: 5px 10px;
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
`
export default Message