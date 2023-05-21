import React from 'react'
import styled from 'styled-components'
import backBtn from '../static/backbtn.png'
import { useNavigate } from 'react-router-dom'
function Header({title}) {
    const navigate = useNavigate();
  return (
    <Head>
        {title}
        <BackBtn onClick={() => navigate(-1)}></BackBtn>
    </Head>
  )
}

const Head = styled.div`
  position: relative;
  padding: 18px 0px;
  font-size: 24px;
  font-weight: bold;
  text-indent: 20px;
  background-color: #1A8B8B;
  color: #eee;
  box-shadow: 2px 1px 1px #aaa;
`

const BackBtn = styled.a`
    display: block;
    position: absolute;
    right: 10px;
    top: 16px;
    bottom: 16px;
    width: 40px;
    background-image: url(${backBtn});
    background-size: 31px 31px;
    background-repeat: no-repeat;
`
export default Header