import express from 'express';
import countriesRoutes from './routes/countries.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/countries', countriesRoutes);
app.use('/clubLogos', express.static(path.join(__dirname, 'assets/clubLogos')));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
