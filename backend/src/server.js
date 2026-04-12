import express from "express";
import { connectDB } from './db.js';

const app = express();

app.get('/countries', async (req, res) => {
  try{
    const db = await connectDB();
    const collection = db.collection('countries');

    const teams = await collection.find().toArray();

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

app.get('/about', (req, res) => {
  res.send('This is the route page')
})

app.listen(3000, () => {
  console.log('hello');
});