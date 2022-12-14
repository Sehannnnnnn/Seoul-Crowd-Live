import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 2px solid #A4A71F;
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;
  margin-right: 1rem;
  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
    &:hover {
    background-color: lightgray;
    }
    &.selected {
      background-color: lightgray;
    }
  }
`;

function Autocomplete () {
  const {placeList} = useSelector((state) => state.place)
  const inputRef = useRef(null);
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(placeList);
  const [selected, setselected] = useState(-1);
  // useEffect를 아래와 같이 활용할 수도 있습니다.
  
  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
      inputRef.current.value = '';
    }
    else {
      setHasText(true);
      inputRef.current.value = inputValue;
    }
  }, [inputValue]);

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setOptions(placeList.filter((opt) => opt.name.includes(event.target.value)))
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption.name);
    setHasText(false);
  };

  const handleDeleteButtonClick = () => {
    setInputValue('');
  };

  const handleKeyArrow = (event) => {
    if (event.key === "ArrowDown" && selected < options.length - 1) {
      setselected(selected + 1);
    }
    if (event.key === "ArrowUp" && selected > -1) {
      setselected(selected - 1);
    }
    if (event.key === "Enter") {
      handleDropDownClick(options[selected])
      setselected(-1);
    }
  }


  return (
    <div className='autocomplete-wrapper'>
      <InputContainer>
        <input ref={inputRef} onChange={handleInputChange} onKeyUp={handleKeyArrow}></input>
        <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div>
      </InputContainer>
      {hasText ? <DropDown options={options} handleComboBox={handleDropDownClick} selected={selected}/> : <></>}
    </div>
  );
};
const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <DropDownContainer>
      {options.map((opt,idx) => (
        <li key={idx} onClick={() => handleComboBox(opt)} className={selected === idx ? 'selected' : ''}>{opt.name}</li>
      ))}
    </DropDownContainer>
  );
};

export default Autocomplete;