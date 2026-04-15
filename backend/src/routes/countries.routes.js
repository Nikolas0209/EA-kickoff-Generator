import express from 'express';
import getCollection from '../utils/getCollection.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const teams = await getCollection('countries');

    const homeTeamIndex = Math.floor(Math.random() * teams.length);
    const homeTeam = teams[homeTeamIndex];

    const availableTeams = teams.filter(team => team._id !== homeTeam._id);
    const awayTeam = availableTeams[Math.floor(Math.random() * availableTeams.length)]; 

    const kickOffTeams = {
      homeTeam,
      awayTeam
    }

    res.status(200).json(kickOffTeams);
  } catch(error){
    res.status(500).json({error: 'The kick-off could not be generated.'});
  }
});

router.get('/ratings', async (req, res) => {
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
});

router.get('/random-team', async (req, res) => {
  try{
    const teams = await getCollection('countries');

    const randomTeamIndex = Math.floor(Math.random() * teams.length);
    const randomTeam = teams[randomTeamIndex];

    res.status(200).json(randomTeam);
  } catch(error){
    res.status(500).json({error: 'The kick-off could not be generated.'})
  }
})

export default router;