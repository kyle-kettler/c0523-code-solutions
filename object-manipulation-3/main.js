console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playGame(playerList, number) {
  const suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
    'Ace',
  ];

  const deck = [];
  const playerGroup = [];

  // Create card deck
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < ranks.length; x++) {
      const card = { rank: ranks[x], suit: suits[i] };
      deck.push(card);
    }
  }

  // Create players
  for (let i = 0; i < playerList.length; i++) {
    const player = { name: playerList[i] };
    playerGroup.push(player);
  }

  // Shuffle cards
  function shuffle(deck) {
    const random = Math.floor(Math.random() * deck.length);
    return deck.splice(random, 1);
  }

  // Deal Cards
  for (let i = 0; i < playerGroup.length; i++) {
    const card1 = shuffle(deck);
    const card2 = shuffle(deck);
    playerGroup[i].hand = card1;
    playerGroup[i].hand.push(card2[0]);
  }

  // Convert face cards to point value
  for (let i = 0; i < playerGroup.length; i++) {
    switch (playerGroup[i].hand[0].rank) {
      case 'Ace':
        playerGroup[i].hand[0].rank = '11';
        break;
      case 'King':
      case 'Queen':
      case 'Jack':
        playerGroup[i].hand[0].rank = '10';
        break;
    }
    switch (playerGroup[i].hand[1].rank) {
      case 'Ace':
        playerGroup[i].hand[1].rank = '11';
        break;
      case 'King':
      case 'Queen':
      case 'Jack':
        playerGroup[i].hand[1].rank = '10';
        break;
    }
  }

  const totals = [];
  // Determine Winner...tbd
  for (let i = 0; i < playerGroup.length; i++) {
    const cardsTotal =
      parseInt(playerGroup[i].hand[0].rank) +
      parseInt(playerGroup[i].hand[1].rank);
    totals.push(cardsTotal);
  }

  const winner = totals.indexOf(Math.max(...totals));

  console.log('The winner is: ' + playerGroup[winner].name);
}

playGame(['John', 'Paul', 'George', 'Ringo'], 2);
