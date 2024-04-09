import express from 'express';
import diaryRoutes from './routes/diaries';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (_, res) => {
  res.send('Welcome to API diaries with TypeScript');
});

app.use('/api/diaries', diaryRoutes);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
