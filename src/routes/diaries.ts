import express from 'express';
import * as diaryServices from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404);
});

router.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body;

    const addedDiaryEntry = diaryServices.addDiary({
      date,
      weather,
      visibility,
      comment
    });
    res.json(addedDiaryEntry);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('Ocurrió un error desconocido');
    }
  }
});

export default router;
