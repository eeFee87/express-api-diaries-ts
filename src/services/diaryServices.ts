import { DiaryEntry } from '../types';
import diariesData from '../data/diaries.json';

const diaries: DiaryEntry[] = diariesData as DiaryEntry[];

export const getEntries = () => diaries;

export const addEntry = () => null;
