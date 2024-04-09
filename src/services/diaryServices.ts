import type { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diariesData from '../data/diaries.json';

const diaries: DiaryEntry[] = diariesData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  return entry;
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

export const addEntry = () => null;
