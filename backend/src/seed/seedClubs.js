import { connectDB } from '../db.js';
import { aLeague } from './leagues/aLeague.js';
import { allsvenskan } from './leagues/allsvenskan.js';
import { austrianBundesliga } from './leagues/austrianBundesliga.js';
import { bundesliga } from './leagues/bundesliga.js';
import { chineseSuperLeague } from './leagues/chineseSuperLeague.js';
import { danishSuperliga } from './leagues/danishSuperliga.js';
import { ekstraklasa } from './leagues/ekstraklasa.js';
import { eliteserien } from './leagues/eliteserien.js';
import { eredivisie } from './leagues/eredivisie.js';
import { indianSuperLeague } from './leagues/indianSuperLeague.js';
import { kLeague1 } from './leagues/kLeague1.js';
import { laliga } from './leagues/laliga.js';
import { laliga2 } from './leagues/laliga2.js';
import { ligaPortugal } from './leagues/ligaPortugal.js';
import { ligue1 } from './leagues/ligue1.js';
import { ligue2 } from './leagues/ligue2.js';
import { premierDivision } from './leagues/premierDivision.js';
import { premierLeague } from './leagues/premierLeague.js';
import { proLeague } from './leagues/proLeague.js';
import { restOfWorld } from './leagues/restOfWorld.js';
import { saudiProLeague } from './leagues/saudiProLeague.js';
import { scottishPremiership } from './leagues/scottishPremiership.js';
import { seriea } from './leagues/seriea.js';
import { serieb } from './leagues/serieb.js';
import { superLig } from './leagues/superLig.js';
import { superLigaRomaniei } from './leagues/superLigaRomaniei.js';
import { swissSuperLeague } from './leagues/swissSuperLeague.js';

async function seedClubs(){
  let db;
  try{
    db = await connectDB();
    if(!db){
      console.log('Database connection failed.');
      return;
    } 

    const clubs = db.collection('clubs');

    const docs = [
      ...austrianBundesliga, 
      ...scottishPremiership,
      ...restOfWorld,
      ...premierDivision,
      ...laliga,
      ...bundesliga,
      ...seriea,
      ...premierLeague,
      ...swissSuperLeague,
      ...ligue1,
      ...proLeague,
      ...eredivisie,
      ...danishSuperliga,
      ...ligaPortugal,
      ...superLig,
      ...superLigaRomaniei,
      ...eliteserien,
      ...allsvenskan,
      ...aLeague,
      ...ekstraklasa,
      ...ligue2,
      ...saudiProLeague,
      ...kLeague1,
      ...serieb,
      ...indianSuperLeague,
      ...chineseSuperLeague,
      ...laliga2,

    ];

    for (const doc of docs){
      await clubs.replaceOne(
        {club: doc.club},
        doc,
        {upsert: true}
      );
    };    
  } catch(err){
    console.error('Seeding failed:', err);
  } finally {
    if(db){
      await db.client.close();
      console.log('Database connection closed');
    }
    process.exit(0);
  }
}

seedClubs();