import React, { useContext } from 'react';
import Input from '@material-ui/core/Input';
import { InputContext } from 'context/InputContext';

export default function Filter() {
  const { inputValue, handleInput } = useContext(InputContext);

  return (
    <>
      <Input value={inputValue} onChange={handleInput} />
    </>
  );
}
