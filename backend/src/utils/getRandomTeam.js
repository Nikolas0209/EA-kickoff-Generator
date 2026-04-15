function getRandomTeam (teams){
  const index = Math.floor(Math.random() * teams.length);
  const homeTeam = teams[index];
  return homeTeam;
}

export default getRandomTeam;