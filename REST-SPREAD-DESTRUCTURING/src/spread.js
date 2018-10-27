const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(', ')}`);
};

const team = {
  name: 'Liberty',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry'],
};

// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
//* SPREAD out the team.players array
printTeam(team.name, team.coach, ...team.players);

//
//? ----------------------------------------
//

let cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
console.log(cities);

cities = [...cities, 'New York'];
console.log(cities);

let citiesCopy = ['Santiago', ...cities, 'Melbourne'];
console.log(citiesCopy);
