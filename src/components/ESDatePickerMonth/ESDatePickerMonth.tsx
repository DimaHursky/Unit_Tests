import React, { useCallback } from 'react';
import { useThemeProps } from '@mui/material';
import {
  isAfter,
  isBefore,
  isEqual,
  isThisMonth,
  isThisYear,
  isWithinInterval,
} from 'date-fns';
import { useGetLocale } from '@pankod/refine-core';
import clsx from 'clsx';
import { ESDatePickerMonthProps } from './ESDatePickerMonth.types';
import ESDatePickerMonthStyled, {
  DatePickerCaption,
  Month,
  Week,
  Weekday,
} from './ESDatePickerMonth.styled';

import {
  dateIsSelected,
  getMonthAndYear,
  getNewRange,
  getWeekdayNamesAndCurrent,
  getWeeksForMonth,
  hoveringDateIsInRange,
  isDateDisabled,
  isDateEnd,
  isDateStart,
} from '../ESDatePicker/utils';
import ESDatePickerDay from '../ESDatePickerDay/ESDatePickerDay';
import { IWeekday } from '../ESDatePickerDay';

const ESDatePickerMonth = (inProps: ESDatePickerMonthProps) => {
  const props = useThemeProps({
    props: inProps,
    name: 'ESDatePickerMonth',
  });

  const locale = useGetLocale();
  const lang = locale();

  const {
    month,
    year,
    weekStartsOn,
    selected,
    hoverDate,
    focusedDate,
    allowRange,
    disableDatesAfter,
    disableDatesBefore,
    disableSpecificDates,
    onChange = () => {},
    onHover = () => {},
  } = props;

  const weekdays = getWeekdayNamesAndCurrent(weekStartsOn, lang);
  const monthYear = getMonthAndYear(month, year);
  const weeks = getWeeksForMonth(month, year, weekStartsOn);
  const isInHoveringRange = allowRange ? hoveringDateIsInRange : () => false;
  const isCurrentMonthYear =
    isThisMonth(new Date(year, month)) && isThisYear(new Date(year, month));

  const monthYearClasses = clsx({
    current: isCurrentMonthYear,
  });

  const handleDateClick = useCallback(
    (selectedDate: Date) => {
      onChange(getNewRange(allowRange ? selected : undefined, selectedDate));
    },
    [allowRange, onChange, selected],
  );

  function renderWeek(day: Date | null, dayIndex: number) {
    if (day === null) {
      return <ESDatePickerDay key={`day=${dayIndex}` || dayIndex} />;
    }

    const isDisabled =
      (disableDatesBefore && isBefore(day, disableDatesBefore)) ||
      (disableDatesAfter && isAfter(day, disableDatesAfter)) ||
      (disableSpecificDates && isDateDisabled(day, disableSpecificDates));

    const isFirstSelectedDay =
      allowRange && !!selected && isDateStart(day, selected);

    const isLastSelectedDay =
      allowRange &&
      !!selected &&
      ((!isEqual(selected.start, selected.end) && isDateEnd(day, selected)) ||
        (!!hoverDate &&
          isEqual(selected.start, selected.end) &&
          isAfter(hoverDate, selected.start) &&
          isEqual(day, hoverDate) &&
          !isFirstSelectedDay));

    const isHoveringRight = hoverDate && isBefore(day, hoverDate);

    const rangeIsDifferent = !(
      selected && isEqual(selected.start, selected.end)
    );

    const isSelected = !!selected && dateIsSelected(day, selected);

    return (
      <ESDatePickerDay
        day={day}
        disabled={isDisabled}
        focused={!!focusedDate && isEqual(day, focusedDate)}
        selected={isSelected}
        isFirstSelectedDay={isFirstSelectedDay}
        isLastSelectedDay={isLastSelectedDay}
        inRange={!!selected && isWithinInterval(day, selected)}
        isHoveringRight={isHoveringRight}
        rangeIsDifferent={rangeIsDifferent}
        inHoveringRange={
          !!selected &&
          !!hoverDate &&
          isInHoveringRange(day, selected, hoverDate)
        }
        key={`day=${dayIndex}` || dayIndex}
        onClick={handleDateClick}
        onHover={onHover}
      />
    );
  }

  const weekdaysMarkup = weekdays.map((weekday: IWeekday, idx: number) => {
    const weekdayClasses = clsx({
      current: isCurrentMonthYear && weekday.current,
    });

    return (
      <Weekday
        aria-label={weekday.weekdayName}
        key={`weekday-${idx}` || idx}
        className={weekdayClasses}
      >
        {weekday.weekdayName.slice(0, 2)}
      </Weekday>
    );
  });

  const weeksMarkup = weeks.map((week: (Date | null)[], idx: number) => (
    <Week key={`week-${idx}` || idx}>{week.map(renderWeek)}</Week>
  ));

  return (
    <ESDatePickerMonthStyled>
      <Month>
        <DatePickerCaption className={monthYearClasses}>
          {monthYear}
        </DatePickerCaption>
        <thead>
          <tr>{weekdaysMarkup}</tr>
        </thead>
        <tbody>{weeksMarkup}</tbody>
      </Month>
    </ESDatePickerMonthStyled>
  );
};

export default ESDatePickerMonth;
