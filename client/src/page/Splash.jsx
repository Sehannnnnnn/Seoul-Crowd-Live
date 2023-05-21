import React, {useEffect} from 'react'
import styled, {keyframes} from 'styled-components';
import {useNavigate} from 'react-router-dom';
function Splash() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => 
            navigate('/main')
        , 1000*4)
    }, [navigate])
    
  return (
    <>
    <Container>
        <TitleOval>
            <h1>붐빔</h1>
            <p>서울 실시간 인구정보 조회 서비스</p>
        </TitleOval>
    </Container>
    </>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1A8B8B;
`
const showSmooth = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const TitleOval = styled.div`
    width: 312px;
    height: 221px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px black;
    opacity: 0;
    animation: ${showSmooth} 2s 1s;
`



export default Splash