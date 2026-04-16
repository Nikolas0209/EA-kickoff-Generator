import { connectDB } from '../db.js';

async function seedClubs(){
  let db;
  try{
    db = await connectDB();
    if(!db){
      console.log('Database connection failed.');
      return;
    } 

    const clubs = db.collection('clubs');

    const docs = [{
      club: 'Real Madrid',
      stars: 5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: '/clubLogos/real_madrid'
     },
     { 
      club: 'Liverpool',
      stars: 5,
      competition: 'UCL',
      league: 'Premier League',
      logo: 'clubLogos/liverpool'
     },{
      club: 'Barcelona',
      stars: 5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: 'clubLogos/barcelona'
     },
     {
      club: 'Arsenal',
      stars: 5,
      competition: 'UCL',
      league: 'Premier League',
      logo: 'clubLogos/arsenal'
     },
     {
      club: 'Inter',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: 'clubLogos/inter'
     },
     {
      club: 'Atletico Madrid',
      stars: 5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: 'clubLogos/atletico_madrid'
     },
     {
      club: 'PSG',
      stars: 5,
      competition: 'UCL',
      league: 'Ligue 1',
      logo: 'clubLogos/psg'
     },
     {
      club: 'Bayern München',
      stars: 5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: 'clubLogos/bayern_munich'
     },
     {
      club: 'København',
      stars: 3.5,
      competition: 'UCL',
      league: 'Danish Superliga',
      logo: 'clubLogos/kobenhagen'
     },
     {
      club: 'Galatasaray',
      stars: 4,
      competition: 'UCL',
      league: 'Süper Lig',
      logo: 'clubLogos/galatasaray'
     },
     {
      club: 'Man Utd',
      stars: 4.5,
      competition: 'UCL',
      league: 'Premier League',
      logo: 'clubLogos/man_utd'
     }, 
     {
      club: 'PSV',
      stars: 4,
      competition: 'UCL',
      league: 'Eredivisie',
      logo: 'clubLogos/psv'
     },
     {
      club: 'Sevilla',
      stars: 4.5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: 'clubLogos/sevilla'
     },
     {
      club: 'Lens',
      stars: 4,
      competition: 'UCL',
      league: 'Ligue 1',
      logo: 'clubLogos/lens'
     },
     {
      club: 'Napoli',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: 'clubLogos/napoli'
     },
     {
      club: 'Braga',
      stars: 4,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: 'clubLogos/braga'
     },
     {
      club: 'Union Berlin',
      stars: 4,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: 'clubLogos/union_berlin'
     },
     {
      club: 'Real Sociedad',
      stars: 4.5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: 'clubLogos/real_sociedad'
     },
     {
      club: 'Benfica',
      stars: 4.5,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: 'clubLogos/benfica'
     },
     {
      club: 'RB Salzburg',
      stars: 3.5,
      competition: 'UCL',
      league: 'Austrian Bundesliga',
      logo: 'clubLogos/rb_salzburg'
     },
     {
      club: 'Lazio',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: 'clubLogos/lazio'
     },
     {
      club: 'Celtic',
      stars: 3.5,
      competition: 'UCL',
      league: 'Scottish Premiership',
      logo: 'clubLogos/celtic'
     },
     {
      club: 'Dortmund',
      stars: 4.5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: 'clubLogos/dortmund'
     },
     {
      club: 'Milan',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: 'clubLogos/milan'
     },
     {
      club: 'Newcastle',
      stars: 4.5,
      competition: 'UCL',
      league: 'Premier League',
      logo: 'clubLogos/newcastle'
     },
     {
      club: 'Man City',
      stars: 5,
      competition: 'UCL',
      league: 'Premier League',
      logo: 'clubLogos/man_city'
     },
     {
      club: 'Leipzig',
      stars: 4.5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: 'clubLogos/leipzig'
     },
     {
      club: 'Young Boys',
      stars: 3.5,
      competition: 'UCL',
      league: 'Swiss Super League',
      logo: 'clubLogos/young_boys'
     },
     {
      club: 'Porto',
      stars: 4,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: 'clubLogos/porto'
     },
     {
      club: 'Shakhtar',
      stars: 3.5,
      competition: 'UCL',
      league: 'Ukrainian Premier League',
      logo: 'clubLogos/shakhtar'
     },
     {
      club: 'Royal Antwerp',
      stars: 3.5,
      competition: 'UCL',
      league: 'Belgian Pro League',
      logo: 'clubLogos/royal_antwerp'
     },
     {
      club: 'Feyenoord',
      stars: 4,
      competition: 'UCL',
      league: 'Eredivisie',
      logo: 'clubLogos/feyenoord'
     }
    ];

    for(const doc of docs){
      await clubs.updateOne(
        {club: doc.club},
        {$set: doc},
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