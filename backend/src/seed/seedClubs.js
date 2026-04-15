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

     },
     {

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
    console.log('Seeded clubs successfully!', err);
  } finally {
    if(db){
      await db.client.close();
      console.log('Database connection closed');
    }
    process.exit(0);
  }
}

seedClubs();