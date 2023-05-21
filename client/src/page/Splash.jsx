import React, {useEffect} from 'react'
import styled, {keyframes} from 'styled-components';
import {useNavigate} from 'react-router-dom';
function Splash() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => 
            navigate('/main')
        , 1000*5)
    }, [navigate])
    
  return (
    <>
    <Container>
        <TitleOval>
        </TitleOval>
        <Title>
            <h1>붐빔</h1>
            <h2>SEOUL CROWD LIVE</h2>
            <p>서울 실시간 인구정보 조회 서비스</p>
        </Title>
    </Container>
    </>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: relative;
    background-color: #1A8B8B;
`
const rotate = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg)
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg)
    }
`

const TitleOval = styled.div`
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 420px;
    height: 400px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 10px 10px 10px black;
    opacity: 1;
    animation: ${rotate} 6s infinite linear;
`
const Title = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export default Splash