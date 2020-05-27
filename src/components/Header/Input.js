import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { InputContext } from 'context/InputContext';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
  },
})(TextField);

const Input = () => {
  const { inputValue, handleInput, toggle } = useContext(InputContext);

  return (
    <>
      {toggle && (
        <form noValidate>
          <CssTextField
            id="custom-css-standard-input"
            label="search by name"
            value={inputValue}
            onChange={handleInput}
          />
        </form>
      )}
    </>
  );
};
export default Input;
