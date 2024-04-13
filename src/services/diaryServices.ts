import type { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diariesData from '../data/diaries.json';
import fs from 'node:fs/promises';

const diaries = diariesData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    };
  });
};

export const addDiary = async (newDiaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  };
  diaries.push(newDiary);

  const updatedData = JSON.stringify(diaries, null, 2);
  await fs.writeFile('src/data/diaries.json', updatedData);

  return newDiary;
};
