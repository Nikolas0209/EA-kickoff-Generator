import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { tlsInsecure: true });

export async function connectDB(){
  try{
    await client.connect();
    console.log('Connect to the MangooDB')
    return client.db('EAkickoffGenerator')
  } catch(error){
    console.log(error)
  }
}