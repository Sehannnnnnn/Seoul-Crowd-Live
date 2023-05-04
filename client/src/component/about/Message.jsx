import React from 'react';
import styled from 'styled-components';
function Message({tag, msg, theme}) {
  return (
    <Container theme={theme}>
        <EleStatusTag theme={theme}>{tag}</EleStatusTag>
        <Msg>{msg}</Msg>
    </Container>
  )
}
const Container = styled.div`
    margin-top: 24px;
    border: 3px solid ${(props) => props.theme};
    border-radius: 20px;
    background-color: #fff;
    padding: 24px;
`

const Msg = styled.p`
    font-size: 18px;
    margin-top: 12px;
`

const EleStatusTag = styled.span`
  padding: 5px 10px;
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
`
export default Message