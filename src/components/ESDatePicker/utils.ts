import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  getMonth,
  intlFormat,
  isAfter,
  isBefore,
  isEqual,
  startOfWeek,
} from 'date-fns';
import { DateRange } from './ESDatePicker.types';
import { IWeekday } from '../ESDatePickerDay';

export const getWeekdayNamesAndCurrent = (
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  lang = 'en',
) => {
  const now = new Date();
  const dates = eachDayOfInterval({
    start: startOfWeek(now, { weekStartsOn }),
    end: endOfWeek(now, { weekStartsOn }),
  });

  const arrOfDays: IWeekday[] = [];
  dates.map((date) => {
    const isCurrent = date.getDay() === new Date().getDay();
    return arrOfDays.push({
      weekdayName: intlFormat(date, { weekday: 'long' }, { locale: lang }),
      current: isCurrent,
    });
  });

  return arrOfDays;
};

export const getMonthAndYear = (month: number, year: number) => {
  const date = new Date(year, month);

  return `${format(date, 'MMMM')} ${year}`;
};

export const getOrderedWeekdays = (weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
  const weeks = [0, 1, 2, 3, 4, 5, 6];
  const restOfDays = weeks.splice(weekStartsOn);
  return [...restOfDays, ...weeks];
};

export const getWeeksForMonth = (
  month: number,
  year: number,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6,
) => {
  let currentDate = new Date(year, month, 1);
  const firstDayOdWeek = getDay(currentDate);
  const weeks: (Date | null)[][] = [[]];
  let currentWeek: (Date | null)[] = weeks[0];

  const orderedWeekday = getOrderedWeekdays(weekStartsOn);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < orderedWeekday.indexOf(firstDayOdWeek); i++) {
    currentWeek.push(null);
  }

  while (getMonth(currentDate) === month) {
    if (currentWeek.length === 7) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
};

export const getNextMonth = (month: number) => {
  if (month === 11) {
    return 0;
  }
  return month + 1;
};

export const getPreviousMonth = (month: number) => {
  if (month === 0) {
    return 11;
  }
  return month - 1;
};

export const getNextYear = (month: number, year: number) => {
  if (month === 11) {
    return year + 1;
  }
  return year;
};

export const getPreviousYear = (month: number, year: number) => {
  if (month === 0) {
    return year - 1;
  }
  return year;
};

export const deriveRange = (selected?: Date | DateRange) =>
  selected instanceof Date ? { start: selected, end: selected } : selected;

export const isDateDisabled = (date: Date, datesToCompare: Date[]) =>
  datesToCompare.some((dateToCompare: Date) => isEqual(date, dateToCompare));

export const isDateStart = (date: Date | null, range: DateRange) => {
  if (date == null) return false;
  const { start } = range;

  return Boolean(start && isEqual(start, date));
};

export const isDateEnd = (date: Date | null, range: DateRange) => {
  if (date == null) return false;
  const { end } = range;

  return Boolean(end && isEqual(end, date));
};

export const dateIsSelected = (date: Date | null, range: DateRange) => {
  if (date == null) return false;
  const { start, end } = range;

  return Boolean(
    (start && isEqual(start, date)) || (end && isEqual(end, date)),
  );
};

export const getNewRange = (
  range: DateRange | undefined,
  selected: Date,
): DateRange => {
  if (!range) {
    return { start: selected, end: selected };
  }

  const { start, end } = range;

  if ((end && isAfter(start, end)) || isBefore(start, end)) {
    return { start: selected, end: selected };
  }

  if (start) {
    if (isBefore(selected, start)) {
      return { start: selected, end: selected };
    }
    return { start, end: selected };
  }

  if (end) {
    if (isBefore(selected, end)) {
      return { start: selected, end };
    }
    return { start: start || end, end: selected };
  }

  return { start: selected, end: selected };
};

export const hoveringDateIsInRange = (
  day: Date | null,
  range: DateRange,
  hoverEndDate: Date,
) => {
  if (day === null) {
    return false;
  }

  const { start, end } = range;
  return Boolean(isEqual(start, end) && day > start && day <= hoverEndDate);
};
