import express from 'express';
import getCollection from '../utils/getCollection.js';
import getRandomTeam from '../utils/getRandomTeam.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const teams = await getCollection('clubs');

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
   res.status(500).json({error: 'The kick-off could not be generated.'})
  }
});

export default router;