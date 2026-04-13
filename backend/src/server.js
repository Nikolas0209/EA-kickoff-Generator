import express from 'express';
import getCollection from './utils/getCollection.js';

const app = express();

app.get('/countries', async (req, res) => {
  try{
    const teams = await getCollection('countries');

    const homeTeamIndex = Math.floor(Math.random() * teams.length);
    const homeTeam = teams[homeTeamIndex];

    let awayTeamIndex = Math.floor(Math.random() * teams.length);

    while(awayTeamIndex === homeTeamIndex){
      awayTeamIndex = Math.floor(Math.random() * teams.length);
    };

    const awayTeam = teams[awayTeamIndex];

    const kickOffTeams = {
      homeTeam,
      awayTeam
    }

    res.status(200).json(kickOffTeams);
  } catch(error){
    res.status(500).json({error: 'The kick-off could not be generated.'});
  }
});

app.get('/countries/ratings', async (req, res) => {
  try{
    const teams = await getCollection('countries');

    const homeTeamIndex = Math.floor(Math.random() * teams.length);
    const homeTeam = teams[homeTeamIndex];

    const getAllRatings = teams.map(team => team.stars);
    const lowestStarsTeam = Math.min(...getAllRatings);

    const maxRating = homeTeam.stars + 1;
    const minRating = Math.max(homeTeam.stars - 1, lowestStarsTeam);

    const teamRating = teams.filter(team => 
     team.stars >= minRating && team.stars <= maxRating 
    );

    let eligibleAwayTeams = teamRating.filter(team => team._id !== homeTeam._id);

    if(eligibleAwayTeams.length === 0){
      eligibleAwayTeams = teamRating;
    };

    const awayTeam = eligibleAwayTeams[Math.floor(Math.random() * eligibleAwayTeams.length)];

    const kickOffTeams = {
      homeTeam,
      awayTeam
    };

    res.status(200).json(kickOffTeams);
  }catch(error){
    res.status(500).json({error: 'The kick-off could not be generated.'});
  }
})

app.listen(3000, () => {
  console.log('hello');
});