import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>
      제작자 : @Sehannnnnnn
    </Foot>
  )
}

const Foot = styled.div`
  margin-top: 30px;
  background-color: #eee;
  height: 60px;
  text-align: center;
  line-height: 60px;
`

export default Footer