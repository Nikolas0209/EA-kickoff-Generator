import { connectDB } from '../db.js';
import { austrianBundesliga } from './leagues/austrianBundesliga.js';
import { bundesliga } from './leagues/bundesliga.js';
import { danishSuperliga } from './leagues/danishSuperliga.js';
import { eredivisie } from './leagues/eredivisie.js';
import { laliga } from './leagues/laliga.js';
import { ligue1 } from './leagues/ligue1.js';
import { premierDivision } from './leagues/premierDivision.js';
import { premierLeague } from './leagues/premierLeague.js';
import { proLeague } from './leagues/proLeague.js';
import { restOfWorld } from './leagues/restOfWorld.js';
import { scottishPremiership } from './leagues/scottishPremiership.js';
import { seriea } from './leagues/seriea.js';
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
    
     {
      club: 'Galatasaray',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Süper Lig',
      league: 'super-lig',
      logo: '/clubLogos/galatasaray'
     },
     {
      club: 'Braga',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Liga Portugal',
      league: 'liga-portugal',
      logo: '/clubLogos/braga'
     },
     {
      club: 'Benfica',
      stars: 4.5,
      competition: 'UCL',
      leagueName: 'Liga Portugal',
      league: 'liga-portugal',
      logo: '/clubLogos/benfica'
     },
     {
      club: 'Porto',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Liga Portugal',
      league: 'liga-portugal',
      logo: '/clubLogos/porto'
     },  



     {
      club: 'Sporting CP',
      stars: 4,
      competition: 'UEL',
      leagueName: 'Liga Portugal',
      league: 'liga-portugal',
      logo: '/clubLogos/sporting_CP'
     },
     {
      club: 'Rakow',
      stars: 3,
      competition: 'UEL',
      leagueName: 'Ekstraklasa',
      league: 'ekstraklasa',
      logo: '/clubLogos/rakow'
     },
     {
      club: 'Molde',
      stars: 2.5,
      competition: 'UEL',
      leagueName: 'Eliteserien',
      league: 'eliteserien',
      logo: '/clubLogos/molde'
     },
     {
      club: 'Häcken',
      stars: 3,
      competition: 'UEL',
      leagueName: 'Allsvenskan',
      league: 'allsvenskan',
      logo: '/clubLogos/hacken'
     },



    
     {
      club: 'Bodø/Glimt',
      stars: 3,
      competition: 'UECL',
      leagueName: 'Eliteserien',
      league: 'eliteserien',
      logo: '/clubLogos/bodo_glimt'
     },
     {
      club: 'Beşiktaş',
      stars: 4,
      competition: 'UECL',
      leagueName: 'Süper Lig',
      league: 'super-lig',
      logo: '/clubLogos/besiktas'
     },
     {
      club: 'Legia',
      stars: 2.5,
      competition: 'UECL',
      leagueName: 'Ekstraklasa',
      league: 'ekstraklasa',
      logo: '/clubLogos/legia'
     },
     {
      club: 'Fenerbahçe',
      stars: 4,
      competition: 'UECL',
      leagueName: 'Süper Lig',
      league: 'super-lig',
      logo: '/clubLogos/fenerbahce'
     },
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