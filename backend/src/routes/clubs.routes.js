import express from 'express';
import getCollection from '../utils/getCollection.js';
import getRandomTeam from '../utils/getRandomTeam.js';
import getRandomTeamByRating from '../utils/getRandomTeamByRating.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const { competition, league } = req.query; 
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
    const awayTeam = getRandomTeam(teams, homeTeam._id);

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
    const awayTeam = getRandomTeamByRating(teams, homeTeam);

    const kickOffTeams = {
      homeTeam,
      awayTeam
    }

    res.status(200).json(kickOffTeams);
  }catch(error){
    res.status(500).json({error: 'The kick-off could not be generated'});
  }
});

router.get('/random-team', async (req, res) => {
  try{
   const { competition, league } = req.query;
  
   let teams = await getCollection('clubs');

   if(competition){
    teams = teams.filter(team => team.competition.toUpperCase() === competition.toUpperCase());
   }

   if(league){
    teams = teams.filter(team => team.league === league);
   }

   if(teams.length < 1){
    return res.status(400).json({error: 'Not enough teams'});
   }

   const newTeam = getRandomTeam(teams);

   res.status(200).json({newTeam});
  }catch(error){
    res.status(500).json({error: 'The kick-off could not be generated'});
  }
});

export default router;