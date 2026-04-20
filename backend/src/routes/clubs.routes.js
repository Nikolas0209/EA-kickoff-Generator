import express from 'express';
import getCollection from '../utils/getCollection.js';
import getRandomTeam from '../utils/getRandomTeam.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const { competition } = req.query; 
    const { league } = req.query;
    let teams = await getCollection('clubs');

    if(competition){
      teams = teams.filter(team => team.competition.toUpperCase() === competition.toUpperCase());
    }
    
    if(league){
      teams = teams.filter(team => team.league === league);
    }

    if(teams.length < 2){
      return res.status(400).json({error: 'Not enough teams'});
    }

    const homeTeam = getRandomTeam(teams);

    const availableTeams = teams.filter(team => !team._id.equals(homeTeam._id));  
    const awayTeam = availableTeams[Math.floor(Math.random() * availableTeams.length)];

    const kickOffTeams = {
      homeTeam,
      awayTeam
    };

    res.status(200).json(kickOffTeams);
  }catch(error){
   res.status(500).json({error: 'The kick-off could not be generated.'});
  }
});

router.get('/club-ratings', async (req, res) => {
  try{
    const teams = await getCollection('clubs');

    if(teams.length < 2){
      return res.status(400).json({error: 'Not enough teams'});
    };

    const homeTeam = getRandomTeam(teams);

    const getAllRatings = teams.map(team => team.stars);
    const lowestStarsTeam = Math.min(...getAllRatings); 

    const maxRating = homeTeam.stars + 1;
    const minRating = Math.max(homeTeam.stars - 1, lowestStarsTeam);

    const teamRating = teams.filter(team => team.stars >= minRating && team.stars <= maxRating);

    let availableAwayTeams = teamRating.filter(team => !team._id.equals(homeTeam._id));

    if(availableAwayTeams.length === 0){
      availableAwayTeams = teams.filter(team => !team._id.equals(homeTeam._id));
    }

    const awayTeam = availableAwayTeams[Math.floor(Math.random() * availableAwayTeams.length)];

    const kickOffTeams = {
      homeTeam,
      awayTeam
    }

    res.status(200).json(kickOffTeams);
  }catch(error){
    res.status(500).json({error: 'The kick-off could not be generated'});
  }
});

export default router;