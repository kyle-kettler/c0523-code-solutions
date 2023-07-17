async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(res.status);
    }
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.error('There was an error:', err);
  }
}

async function getPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!res.ok) {
      throw new Error(res.status);
    }
    const pokemon = await res.json();
    console.log(pokemon);
  } catch (err) {
    console.error('There was an error:', err);
  }
}
getUsers();
getPokemon();
