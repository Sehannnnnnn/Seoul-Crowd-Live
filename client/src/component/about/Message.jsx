import React from 'react';
import styled from 'styled-components';
import { AbtContainer, AbtH3, Msg } from './commonStyled';
function Message({name, tag, msg, theme, max, min, time}) {
  return (
    <AbtContainer theme={theme}>
        <AbtH3>
          <EleStatusTag theme={theme}>{tag}</EleStatusTag>
          {name}
          <Msg>측정 시간 : {time}</Msg>
        </AbtH3>
        <Msg>인구 최대 지표 : {max}</Msg>
        <Msg>인구 최소 지표 : {min}</Msg>
        <Msg>{msg}</Msg>
    </AbtContainer>
  )
}

const EleStatusTag = styled.span`
  padding: 5px 10px;
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: 22px;
  line-height: 32px;
  font-weight: bold;
  margin-right: 20px;
`
export default Message