import { connectDB } from '../db.js';
import { austrianBundesliga } from './leagues/austrianBundesliga.js';
import { bundesliga } from './leagues/bundesliga.js';
import { laliga } from './leagues/laliga.js';
import { premierDivision } from './leagues/premierDivision.js';
import { restOfWorld } from './leagues/restOfWorld.js';
import { scottishPremiership } from './leagues/scottishPremiership.js';
import { seriea } from './leagues/seriea.js';

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
      club: 'Arsenal',
      stars: 5,
      competition: 'UCL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/arsenal'
     },
     {
      club: 'PSG',
      stars: 5,
      competition: 'UCL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/psg'
     },
     {
      club: 'København',
      stars: 3.5,
      competition: 'UCL',
      leagueName: 'Danish Superliga',
      league: 'danish-superliga',
      logo: '/clubLogos/kobenhagen'
     },
     {
      club: 'Galatasaray',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Süper Lig',
      league: 'super-lig',
      logo: '/clubLogos/galatasaray'
     },
     {
      club: 'Man Utd',
      stars: 4.5,
      competition: 'UCL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/man_utd'
     }, 
     {
      club: 'PSV',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Eredivisie',
      league: 'eredivisie',
      logo: '/clubLogos/psv'
     },
     {
      club: 'Lens',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/lens'
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
      club: 'Newcastle',
      stars: 4.5,
      competition: 'UCL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/newcastle'
     },
     {
      club: 'Man City',
      stars: 5,
      competition: 'UCL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/man_city'
     },
     {
      club: 'Young Boys',
      stars: 3.5,
      competition: 'UCL',
      leagueName: 'Swiss Super League',
      league: 'swiss-super-league',
      logo: '/clubLogos/young_boys'
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
      club: 'Royal Antwerp',
      stars: 3.5,
      competition: 'UCL',
      leagueName: 'Belgian Pro League',
      league: 'belgian-pro-league',
      logo: '/clubLogos/royal_antwerp'
     },
     {
      club: 'Feyenoord',
      stars: 4,
      competition: 'UCL',
      leagueName: 'Eredivisie',
      league: 'eredivisie',
      logo: '/clubLogos/feyenoord'
     },




     {
      club: 'West Ham',
      stars: 4,
      competition: 'UEL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/west_ham'
     },
     {
      club: 'Brighton',
      stars: 4,
      competition: 'UEL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/brighton'
     },
     {
      club: 'Marseille',
      stars: 4,
      competition: 'UEL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/marseille'
     },
     {
      club: 'Ajax',
      stars: 3.5,
      competition: 'UEL',
      leagueName: 'Eredivisie',
      league: 'eredivisie',
      logo: '/clubLogos/ajax'
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
      club: 'Liverpool',
      stars: 5,
      competition: 'UEL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/liverpool'
     },
     {
      club: 'Toulouse',
      stars: 3.5,
      competition: 'UEL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/toulouse'
     },
     {
      club: 'USG',
      stars: 3,
      competition: 'UEL',
      leagueName: 'Belgian Pro League',
      league: 'belgian-pro-league',
      logo: '/clubLogos/usg'
     },
     {
      club: 'Rennes',
      stars: 4,
      competition: 'UEL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/rennes'
     },
     {
      club: 'Servette FC',
      stars: 2.5,
      competition: 'UEL',
      leagueName: 'Swiss Super League',
      league: 'swiss-super-league',
      logo: '/clubLogos/servette'
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
      club: 'Lille',
      stars: 4,
      competition: 'UECL',
      leagueName: 'Ligue 1',
      league: 'ligue-1',
      logo: '/clubLogos/lille'
     },
     {
      club: 'Gent',
      stars: 3.5,
      competition: 'UECL',
      leagueName: 'Belgian Pro League',
      league: 'belgian-pro-league',
      logo: '/clubLogos/gent'
     },
     {
      club: 'Club Brugge',
      stars: 3.5,
      competition: 'UECL',
      leagueName: 'Belgian Pro League',
      league: 'belgian-pro-league',
      logo: '/clubLogos/club_brugge'
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
      club: 'Lugano',
      stars: 2.5,
      competition: 'UECL',
      leagueName: 'Swiss Super League',
      league: 'swiss-super-league',
      logo: '/clubLogos/lugano'
     },
     {
      club: 'Aston Villa',
      stars: 4.5,
      competition: 'UECL',
      leagueName: 'Premier League',
      league: 'premier-league',
      logo: '/clubLogos/aston_villa'
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
      club: 'AZ',
      stars: 3.5,
      competition: 'UECL',
      leagueName: 'Eredivisie',
      league: 'eredivisie',
      logo: '/clubLogos/az'
     },
     {
      club: 'Genk',
      stars: 3.5,
      competition: 'UECL',
      leagueName: 'Belgian Pro League',
      league: 'belgian-pro-league',
      logo: '/clubLogos/genk'
     },
     {
      club: 'Fenerbahçe',
      stars: 4,
      competition: 'UECL',
      leagueName: 'Süper Lig',
      league: 'super-lig',
      logo: '/clubLogos/fenerbahce'
     },
     {
      club: 'Nordsjælland',
      stars: 2.5,
      competition: 'UECL',
      leagueName: 'Danish Superliga',
      league: 'danish-superliga',
      logo: '/clubLogos/nordsjaelland'
     }, ...austrianBundesliga, 
        ...scottishPremiership,
        ...restOfWorld,
        ...premierDivision,
        ...laliga,
        ...bundesliga,
        ...seriea
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