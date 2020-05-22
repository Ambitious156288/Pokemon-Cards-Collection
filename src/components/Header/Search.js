import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { InputContext } from 'context/InputContext';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.name,
});

export default function Filter() {
  const { inputValue, handleInput } = useContext(InputContext);

  return (
    <>
      <Autocomplete
        value={inputValue}
        onChange={handleInput}
        id="filter-demo"
        // options={PokemonsList}
        getOptionLabel={option => option.name}
        filterOptions={filterOptions}
        style={{ width: 300 }}
        renderInput={params => <TextField {...params} label="search by name" variant="outlined" />}
      />
      {/* <Input value={inputValue} onChange={handleInput} /> */}
    </>
  );
}

// const PokemonsList = [
//   { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
//   { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
//   { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
//   { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
//   { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
//   { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
//   { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
//   { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
//   { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
//   { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
//   { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
//   { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
//   { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
//   { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
//   { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
//   { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
//   { name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' },
//   { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
//   { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' },
//   { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
// ];
