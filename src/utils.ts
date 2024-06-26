import { type NewDiaryEntry } from './types';
import { Visibility, Weather } from './enums';

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment');
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date');
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (typeof weatherFromRequest !== 'string' || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather');
  }

  return weatherFromRequest as Weather;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility');
  }
  return visibilityFromRequest;
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param as Visibility);
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param as Weather);
};
const isString = (string: any): boolean => {
  return typeof string === 'string';
};

const isDate = (date: any): boolean => {
  if (typeof date !== 'string') {
    return false;
  }
  return Boolean(Date.parse(date));
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };
  return newEntry;
};

export default toNewDiaryEntry;
