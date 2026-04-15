import express from 'express';
import countriesRoutes from './routes/countries.routes.js';

const app = express();
app.use('/countries', countriesRoutes);

app.listen(3000, () => {
  console.log('hello');
});
