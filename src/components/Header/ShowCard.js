// import React, { useState, useContext } from 'react';
// import styled from 'styled-components';
// import pokemon from 'assets/pokemon.png';
// import { Modal, Button, Form, FormControl } from 'react-bootstrap';
// import PokemonCard from 'components/PokemonCatalog/PokemonCard';
// import { InputContext } from 'context/InputContext';

// const StyledButton = styled(Button)`
//   padding: 0 5px;
// `;

// const StyledImage = styled.img`
//   height: 35px;
//   width: 50px;
// `;

// const StyledSize = styled.div`
//   height: 500px;
//   width: 500px;
// `;

// const StyledFormControl = styled(FormControl)`
//   box-shadow: 0px 1px 5px ${({ theme }) => theme.green};
// `;

// const ShowCard = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const { inputValue, handleInput } = useContext(InputContext);

//   return (
//     <>
//       <Form inline>
//         <StyledFormControl
//           value={inputValue}
//           onChange={handleInput}
//           type="text"
//           placeholder="search pokemons..."
//           className="mr-sm-2"
//         />
//         <StyledButton variant="success" onClick={handleShow}>
//           <StyledImage src={pokemon} alt="" />
//         </StyledButton>
//       </Form>

//       <Modal centered show={show} onHide={handleClose}>
//         <StyledSize>
//           <PokemonCard name={inputValue} url="a" theme="dark" />
//           <div>
//             <p>{inputValue}</p>
//           </div>
//         </StyledSize>
//       </Modal>
//     </>
//   );
// };

// export default ShowCard;
