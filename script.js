// Define the initial game state
let playerName = '';
let currentLocation = 'pallet-town';
let chosenPokemon = '';

// Function to display output in the game window
function displayOutput(text) {
  const output = document.getElementById('output');
  output.innerHTML += `<p>${text}</p>`;
  output.scrollTop = output.scrollHeight;
}

// Function to process user input
function processInput() {
  const input = document.getElementById('input');
  const command = input.value.toLowerCase();
  input.value = '';

  if (playerName === '') {
    if (command !== '') {
      playerName = command;
      displayOutput(`<strong>Welcome, ${playerName}!</strong> You are about to embark on a Pokémon adventure.`);
      displayOutput('<strong>Professor Oak</strong> has three Pokémon for you to choose from: <em>Bulbasaur</em>, <em>Charmander</em>, and <em>Squirtle</em>.');
      displayOutput('Which Pokémon would you like to choose?');
    } else {
      displayOutput('<strong>Please enter your name to get started.</strong>');
    }
  } else if (currentLocation === 'pallet-town') {
    if (chosenPokemon === '') {
      if (command === 'bulbasaur' || command === 'charmander' || command === 'squirtle') {
        chosenPokemon = command;
        displayOutput(`<strong>Congratulations, ${playerName}!</strong> You have chosen <em>${chosenPokemon}</em> as your first Pokémon.`);
        displayOutput('Your Pokémon adventure begins now!');
        currentLocation = 'route-1';
      } else {
        displayOutput('<strong>Invalid choice!</strong> Please choose <em>Bulbasaur</em>, <em>Charmander</em>, or <em>Squirtle</em>.');
      }
    }
  }
  // Add more game logic and locations as needed
}
