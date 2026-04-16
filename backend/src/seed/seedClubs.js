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
      club: 'Barcelona',
      stars: 5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: '/clubLogos/barcelona'
     },
     {
      club: 'Arsenal',
      stars: 5,
      competition: 'UCL',
      league: 'Premier League',
      logo: '/clubLogos/arsenal'
     },
     {
      club: 'Inter',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: '/clubLogos/inter'
     },
     {
      club: 'Atletico Madrid',
      stars: 5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: '/clubLogos/atletico_madrid'
     },
     {
      club: 'PSG',
      stars: 5,
      competition: 'UCL',
      league: 'Ligue 1',
      logo: '/clubLogos/psg'
     },
     {
      club: 'Bayern München',
      stars: 5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: '/clubLogos/bayern_munich'
     },
     {
      club: 'København',
      stars: 3.5,
      competition: 'UCL',
      league: 'Danish Superliga',
      logo: '/clubLogos/kobenhagen'
     },
     {
      club: 'Galatasaray',
      stars: 4,
      competition: 'UCL',
      league: 'Süper Lig',
      logo: '/clubLogos/galatasaray'
     },
     {
      club: 'Man Utd',
      stars: 4.5,
      competition: 'UCL',
      league: 'Premier League',
      logo: '/clubLogos/man_utd'
     }, 
     {
      club: 'PSV',
      stars: 4,
      competition: 'UCL',
      league: 'Eredivisie',
      logo: '/clubLogos/psv'
     },
     {
      club: 'Sevilla',
      stars: 4.5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: '/clubLogos/sevilla'
     },
     {
      club: 'Lens',
      stars: 4,
      competition: 'UCL',
      league: 'Ligue 1',
      logo: '/clubLogos/lens'
     },
     {
      club: 'Napoli',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: '/clubLogos/napoli'
     },
     {
      club: 'Braga',
      stars: 4,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: '/clubLogos/braga'
     },
     {
      club: 'Union Berlin',
      stars: 4,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: '/clubLogos/union_berlin'
     },
     {
      club: 'Real Sociedad',
      stars: 4.5,
      competition: 'UCL',
      league: 'LaLiga',
      logo: '/clubLogos/real_sociedad'
     },
     {
      club: 'Benfica',
      stars: 4.5,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: '/clubLogos/benfica'
     },
     {
      club: 'RB Salzburg',
      stars: 3.5,
      competition: 'UCL',
      league: 'Austrian Bundesliga',
      logo: '/clubLogos/rb_salzburg'
     },
     {
      club: 'Lazio',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: '/clubLogos/lazio'
     },
     {
      club: 'Celtic',
      stars: 3.5,
      competition: 'UCL',
      league: 'Scottish Premiership',
      logo: '/clubLogos/celtic'
     },
     {
      club: 'Dortmund',
      stars: 4.5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: '/clubLogos/dortmund'
     },
     {
      club: 'Milan',
      stars: 4.5,
      competition: 'UCL',
      league: 'Serie A',
      logo: '/clubLogos/milan'
     },
     {
      club: 'Newcastle',
      stars: 4.5,
      competition: 'UCL',
      league: 'Premier League',
      logo: '/clubLogos/newcastle'
     },
     {
      club: 'Man City',
      stars: 5,
      competition: 'UCL',
      league: 'Premier League',
      logo: '/clubLogos/man_city'
     },
     {
      club: 'Leipzig',
      stars: 4.5,
      competition: 'UCL',
      league: 'Bundesliga',
      logo: '/clubLogos/leipzig'
     },
     {
      club: 'Young Boys',
      stars: 3.5,
      competition: 'UCL',
      league: 'Swiss Super League',
      logo: '/clubLogos/young_boys'
     },
     {
      club: 'Porto',
      stars: 4,
      competition: 'UCL',
      league: 'Liga Portugal',
      logo: '/clubLogos/porto'
     },
     {
      club: 'Shakhtar',
      stars: 3.5,
      competition: 'UCL',
      league: 'Rest of World',
      logo: '/clubLogos/shakhtar'
     },
     {
      club: 'Royal Antwerp',
      stars: 3.5,
      competition: 'UCL',
      league: 'Belgian Pro League',
      logo: '/clubLogos/royal_antwerp'
     },
     {
      club: 'Feyenoord',
      stars: 4,
      competition: 'UCL',
      league: 'Eredivisie',
      logo: '/clubLogos/feyenoord'
     },




     {
      club: 'West Ham',
      stars: 4,
      competition: 'UEL',
      league: 'Premier League',
      logo: '/clubLogos/west_ham'
     },
     {
      club: 'Freiburg',
      stars: 4,
      competition: 'UEL',
      league: 'Bundesliga',
      logo: '/clubLogos/freiburg'
     },
     {
      club: 'Brighton',
      stars: 4,
      competition: 'UEL',
      league: 'Premier League',
      logo: '/clubLogos/brighton'
     },
     {
      club: 'Marseille',
      stars: 4,
      competition: 'UEL',
      league: 'Ligue 1',
      logo: '/clubLogos/marseille'
     },
     {
      club: 'Ajax',
      stars: 3.5,
      competition: 'UEL',
      league: 'Eredivisie',
      logo: '/clubLogos/ajax'
     },
     {
      club: 'AEK',
      stars: 4,
      competition: 'UEL',
      league: 'Rest of World',
      logo: '/clubLogos/aek'
     },
     {
      club: 'Rangers',
      stars: 3.5,
      competition: 'UEL',
      league: 'Scottish Premiership',
      logo: '/clubLogos/rangers'
     },
     {
      club: 'Sparta Praha',
      stars: 3.5,
      competition: 'UEL',
      league: 'Rest of World',
      logo: '/clubLogos/sparta_praha'
     },
     {
      club: 'Real Betis',
      stars: 4,
      competition: 'UEL',
      league: 'LaLiga',
      logo: '/clubLogos/real_betis'
     },
     {
      club: 'Atalanta',
      stars: 4,
      competition: 'UEL',
      league: 'Serie A',
      logo: '/clubLogos/atalanta'
     },
     {
      club: 'Sporting CP',
      stars: 4,
      competition: 'UEL',
      league: 'Liga Portugal',
      logo: '/clubLogos/sporting_CP'
     },
     {
      club: 'Sturm Graz',
      stars: 3,
      competition: 'UEL',
      league: 'Austrian Bundesliga',
      logo: '/clubLogos/sturm_graz'
     },
     {
      club: 'Rakow',
      stars: 3,
      competition: 'UEL',
      league: 'Ekstraklasa',
      logo: '/clubLogos/rakow'
     },
     {
      club: 'Liverpool',
      stars: 5,
      competition: 'UEL',
      league: 'Premier League',
      logo: '/clubLogos/liverpool'
     },
     {
      club: 'Toulouse',
      stars: 3.5,
      competition: 'UEL',
      league: 'Ligue 1',
      logo: '/clubLogos/toulouse'
     },
     {
      club: 'USG',
      stars: 3,
      competition: 'UEL',
      league: 'Belgian Pro League',
      logo: '/clubLogos/usg'
     },
     {
      club: 'LASK',
      stars: 3,
      competition: 'UEL',
      league: 'Austrian Bundesliga',
      logo: '/clubLogos/lask'
     },
     {
      club: 'Villarreal',
      stars: 4.5,
      competition: 'UEL',
      league: 'LaLiga',
      logo: '/clubLogos/villarreal'
     },
     {
      club: 'Rennes',
      stars: 4,
      competition: 'UEL',
      league: 'Ligue 1',
      logo: '/clubLogos/rennes'
     },
     {
      club: 'Panathinaikos',
      stars: 3.5,
      competition: 'UEL',
      league: 'Rest of World',
      logo: '/clubLogos/panathinaikos'
     },
     {
      club: 'Slavia Praha',
      stars: 3.5,
      competition: 'UEL',
      league: 'Rest of World',
      logo: '/clubLogos/slavia_praha'
     },
     {
      club: 'Roma',
      stars: 4.5,
      competition: 'UEL',
      league: 'Serie A',
      logo: '/clubLogos/roma'
     },
     {
      club: 'Servette FC',
      stars: 2.5,
      competition: 'UEL',
      league: 'Swiss Super League',
      logo: '/clubLogos/servette'
     },
     {
      club: 'Leverkusen',
      stars: 4.5,
      competition: 'UEL',
      league: 'Bundesliga',
      logo: '/clubLogos/leverkusen'
     },
     {
      club: 'Molde',
      stars: 2.5,
      competition: 'UEL',
      league: 'Eliteserien',
      logo: '/clubLogos/molde'
     },
     {
      club: 'Häcken',
      stars: 3,
      competition: 'UEL',
      league: 'Allsvenskan',
      logo: '/clubLogos/hacken'
     },


     
     {
      club: 'Lille',
      stars: 4,
      competition: 'UECL',
      league: 'Ligue 1',
      logo: '/clubLogos/lille'
     },
     {
      club: 'Gent',
      stars: 3.5,
      competition: 'UECL',
      league: 'Belgian Pro League',
      logo: '/clubLogos/gent'
     },
     {
      club: 'Viktoria Plzeň',
      stars: 3.5,
      competition: 'UECL',
      league: 'Rest of World',
      logo: '/clubLogos/viktoria_plzen'
     },
     {
      club: 'Dinamo Zagreb',
      stars: 3.5,
      competition: 'UECL',
      league: 'Rest of World',
      logo: '/clubLogos/dinamo_zagreb'
     },
     {
      club: 'Club Brugge',
      stars: 3.5,
      competition: 'UECL',
      league: 'Belgian Pro League',
      logo: '/clubLogos/club_brugge'
     },
     {
      club: 'Bodø/Glimt',
      stars: 3,
      competition: 'UECL',
      league: 'Eliteserien',
      logo: '/clubLogos/bodo_glimt'
     },
     {
      club: 'Beşiktaş',
      stars: 4,
      competition: 'UECL',
      league: 'Süper Lig',
      logo: '/clubLogos/besiktas'
     },
     {
      club: 'Lugano',
      stars: 2.5,
      competition: 'UECL',
      league: 'Swiss Super League',
      logo: '/clubLogos/lugano'
     },
     {
      club: 'Aston Villa',
      stars: 4.5,
      competition: 'UECL',
      league: 'Premier League',
      logo: '/clubLogos/aston_villa'
     },
     {
      club: 'Legia',
      stars: 2.5,
      competition: 'UECL',
      league: 'Ekstraklasa',
      logo: '/clubLogos/legia'
     },
     {
      club: 'AZ',
      stars: 3.5,
      competition: 'UECL',
      league: 'Eredivisie',
      logo: '/clubLogos/az'
     },
     {
      club: 'Fiorentina',
      stars: 4,
      competition: 'UECL',
      league: 'Serie A',
      logo: '/clubLogos/fiorentina'
     },
     {
      club: 'Ferencváros',
      stars: 3.5,
      competition: 'UECL',
      league: 'Rest of World',
      logo: '/clubLogos/ferencvaros'
     },
     {
      club: 'Genk',
      stars: 3.5,
      competition: 'UECL',
      league: 'Belgian Pro League',
      logo: '/clubLogos/genk'
     },
     {
      club: 'PAOK',
      stars: 3.5,
      competition: 'UECL',
      league: 'Rest of World',
      logo: '/clubLogos/paok'
     },
     {
      club: 'Frankfurt',
      stars: 4,
      competition: 'UECL',
      league: 'Bundesliga',
      logo: '/clubLogos/frankfurt'
     },
     {
      club: 'Aberdeen',
      stars: 2.5,
      competition: 'UECL',
      league: 'Scottish Premiership',
      logo: '/clubLogos/aberdeen'
     },
     {
      club: 'HJK',
      stars: 2,
      competition: 'UECL',
      league: 'Rest of World',
      logo: '/clubLogos/hjk'
     },
     {
      club: 'Fenerbahçe',
      stars: 4,
      competition: 'UECL',
      league: 'Süper Lig',
      logo: '/clubLogos/fenerbahce'
     },
     {
      club: 'Nordsjælland',
      stars: 2.5,
      competition: 'UECL',
      league: 'Danish Superliga',
      logo: '/clubLogos/nordsjaelland'
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