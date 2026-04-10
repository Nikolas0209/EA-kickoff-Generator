import { connectDB } from "./db.js";

async function seedCountries() {
  let db;
  try {
    db = await connectDB();
    if (!db) {
      console.log("❌ Database connection failed");
      return;
    }

    console.log("✅ Database is connected!");

    const countries = db.collection('countries');

    const docs = [
      {
        country: 'Argentina',
        stars: 5,
        logo: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg'
      },
      {
        country: 'Spain',
        stars: 5,
        logo: 'https://en.wikipedia.org/wiki/Spain_national_football_team#/media/File:Spain_national_football_team_crest.svg'
      },
      {
        country: 'Italy',
        stars: 5,
        logo: 'https://en.wikipedia.org/wiki/Italy_national_football_team#/media/File:Logo_Italy_National_Football_Team_-_2023.svg'
      },
      {
        country: 'The Netherlands',
        stars: 4.5,
        logo: 'https://en.wikipedia.org/wiki/Netherlands_national_football_team#/media/File:Netherlands_national_football_team_logo.svg'
      },
      {
        country: 'Belgium',
        stars: 4.5,
        logo: 'https://en.wikipedia.org/wiki/Belgium_national_football_team#/media/File:Royal_Belgian_FA_logo_2019.svg'
      },
      {
        country: 'Croatia',
        stars: 4.5,
        logo: 'https://en.wikipedia.org/wiki/Croatian_Football_Federation#/media/File:Croatian_Football_Federation_logo.svg'
      },
      {
        country: 'Denmark',
        stars: 4.5,
        logo: 'https://en.wikipedia.org/wiki/Denmark_national_football_team#/media/File:Dansk_boldspil_union_logo.svg'
      },
      {
        country: 'Poland',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Poland_national_football_team#/media/File:Herb_Polski.svg'
      },
      {
        country: 'Morocco',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Morocco_national_football_team#/media/File:Royal_Moroccan_Football_Federation_logo.svg'
      },
      {
        country: 'Mexico',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Mexico_national_football_team#/media/File:Mexico_national_football_team_crest.svg'
      },
      {
        country: 'Norway',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Norway_national_football_team#/media/File:Norway_national_football_team_logo.svg'
      },
      {
        country: 'Ghana',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Ghana_national_football_team#/media/File:Ghana_Football_Association_logo.png'
      },
      {
        country: 'Sweden',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Sweden_men%27s_national_football_team#/media/File:Sweden_national_football_team_badge.svg'
      },
      {
        country: 'Czech Republic',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Czech_Republic_national_football_team#/media/File:Czech_Republic_national_football_team_logo.svg'
      },
      {
        country: 'Ukraine',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Ukraine_national_football_team#/media/File:Logo_F%C3%A9d%C3%A9ration_Ukraine_Football_2016.svg'
      },
      {
        country: 'Scotland',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/Scotland_national_football_team#/media/File:Scotland_national_football_team_logo_2014.svg'
      },
      {
        country: 'United States',
        stars: 4,
        logo: 'https://en.wikipedia.org/wiki/United_States_men%27s_national_soccer_team#/media/File:United_States_Soccer_Federation_logo.svg'
      },
      {
        country: 'Hungary',
        stars: 3.5,
        logo: 'https://en.wikipedia.org/wiki/Hungary_national_football_team#/media/File:Coat_of_arms_of_Hungary.svg'
      },
      {
        country: 'Wales',
        stars: 3.5,
        logo: 'https://en.wikipedia.org/wiki/Wales_national_football_team#/media/File:Wales_national_football_team_logo.svg'
      },
      {
        country: 'Republic of Ireland',
        stars: 3.5,
        logo: 'https://en.wikipedia.org/wiki/Republic_of_Ireland_national_football_team#/media/File:Republic_of_Ireland_national_football_team_crest.svg'
      },
      {
        country: 'Iceland',
        stars: 3.5,
        logo: 'https://en.wikipedia.org/wiki/Iceland_national_football_team#/media/File:Iceland_national_football_team_logo.svg'
      },
      {
        country: 'Romania',
        stars: 3.5,
        logo: 'https://en.wikipedia.org/wiki/Romania_national_football_team#/media/File:Romania_national_football_team_logo.svg'
      },
      {
        country: 'Finland',
        stars: 3,
        logo: 'https://en.wikipedia.org/wiki/Finland_national_football_team#/media/File:Finland_national_football_team_crest.png'
      },
      {
        country: 'Northern Ireland',
        stars: 3,
        logo: 'https://en.wikipedia.org/wiki/Irish_Football_Association#/media/File:Irish_Football_Association_logo.svg'
      },
      {
        country: 'Qatar',
        stars: 2.5,
        logo: 'https://en.wikipedia.org/wiki/Qatar_Football_Association#/media/File:Qatar_Football_Association_logo.svg'
      },
      {
        country: 'New Zealand',
        stars: 2.5,
        logo: 'https://en.wikipedia.org/wiki/New_Zealand_men%27s_national_football_team#/media/File:New_Zealand_Football_Crest_2022.svg'
      }
    ];

    for (const doc of docs) {
      await countries.updateOne(
        { country: doc.country }, // match by country
        { $set: doc },            // update fields
        { upsert: true }          // insert if not found
      );
    }

    console.log('Seeded countries successfully!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    if (db) {
      await db.client.close(); // close connection safely
      console.log('Database connection closed');
    }
    process.exit(0);
  }
}

seedCountries();