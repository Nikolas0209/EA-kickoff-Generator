import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);
let db = null;

export async function connectDB(){
  try{
    if(db){
      return db
    }

    await client.connect();
    console.log('Connect to the MangooDB');

    db = client.db('EAkickoffGenerator');
    return db;
  } catch(error){
    console.log(error);
  }
}