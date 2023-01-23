import React, { useCallback, useState } from 'react';
import { useThemeProps } from '@mui/material';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { addDays, isAfter, isBefore } from 'date-fns';
import { DateRange, ESDatePickerProps } from './ESDatePicker.types';
import ESDatePickerStyled, {
  DatePickerHeader,
  DatePickerMonthWrapper,
  MonthSwitcher,
} from './ESDatePicker.styled';
import {
  deriveRange,
  getNextMonth,
  getNextYear,
  getPreviousMonth,
  getPreviousYear,
  isDateDisabled,
} from './utils';
import ESDatePickerMonth from '../ESDatePickerMonth/ESDatePickerMonth';

const ESDatePicker = (inProps: ESDatePickerProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESDatePicker' });

  const {
    month,
    year,
    selected,
    weekStartsOn = 0,
    allowRange,
    multiMonth = false,
    disableDatesBefore,
    disableDatesAfter,
    disableSpecificDates,
    onMonthChange,
    onChange = () => {},
    ...other
  } = props;

  const [hoverDate, setHoverDate] = useState<Date | undefined>(undefined);
  const [focusDate, setFocusDate] = useState<Date | undefined>(undefined);

  const nextMonth = getNextMonth(month);
  const previousMonth = getPreviousMonth(month);
  const nextYear = getNextYear(month, year);
  const previousYear = getPreviousYear(month, year);
  const selectedInterval = deriveRange(selected);

  const handleMonthChangeClick = useCallback(
    (curMonth: number, curYear: number) => {
      if (typeof onMonthChange !== 'function') {
        return;
      }
      setFocusDate(undefined);
      onMonthChange(curMonth, curYear);
    },
    [onMonthChange],
  );

  const handleHover = (date: Date) => setHoverDate(date);

  const handleSelection = useCallback(
    (range: DateRange) => {
      const { end } = range;
      setHoverDate(end);
      setFocusDate(new Date(end));
      onChange(range);
    },
    [onChange],
  );

  const setFocusDateAndHandleMonthChange = useCallback(
    (date: Date) => {
      if (onMonthChange) {
        onMonthChange(date.getMonth(), date.getFullYear());
      }
      setHoverDate(date);
      setFocusDate(date);
    },
    [onMonthChange],
  );

  const handleKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      const { key } = event;

      const range = deriveRange(selected);
      const focusedDate = focusDate || (range && range.start);

      if (focusedDate === null) {
        return;
      }

      if (key === 'ArrowUp' && focusedDate) {
        const selectedDate = addDays(focusedDate, -7);
        if (
          !(
            (disableDatesBefore &&
              isBefore(selectedDate, disableDatesBefore)) ||
            (disableSpecificDates &&
              isDateDisabled(selectedDate, disableSpecificDates))
          )
        ) {
          setFocusDateAndHandleMonthChange(selectedDate);
        }
      }

      if (key === 'ArrowDown' && focusedDate) {
        const selectedDate = addDays(focusedDate, 7);
        if (
          !(disableDatesAfter && isAfter(selectedDate, disableDatesAfter)) ||
          (disableSpecificDates &&
            isDateDisabled(selectedDate, disableSpecificDates))
        ) {
          setFocusDateAndHandleMonthChange(selectedDate);
        }
      }

      if (key === 'ArrowRight' && focusedDate) {
        const selectedDate = addDays(focusedDate, 1);
        if (
          !(disableDatesAfter && isAfter(selectedDate, disableDatesAfter)) ||
          (disableSpecificDates &&
            isDateDisabled(selectedDate, disableSpecificDates))
        ) {
          setFocusDateAndHandleMonthChange(selectedDate);
        }
      }

      if (key === 'ArrowLeft' && focusedDate) {
        const selectedDate = addDays(focusedDate, -1);
        if (
          !(disableDatesBefore && isBefore(selectedDate, disableDatesBefore)) ||
          (disableSpecificDates &&
            isDateDisabled(selectedDate, disableSpecificDates))
        ) {
          setFocusDateAndHandleMonthChange(selectedDate);
        }
      }
    },
    [
      disableDatesAfter,
      disableDatesBefore,
      disableSpecificDates,
      focusDate,
      selected,
      setFocusDateAndHandleMonthChange,
    ],
  );

  const secondMonth = multiMonth ? (
    <ESDatePickerMonth
      month={nextMonth}
      year={nextYear}
      onHover={handleHover}
      weekStartsOn={weekStartsOn}
      focusedDate={focusDate}
      hoverDate={hoverDate}
      selected={selectedInterval}
      disableDatesAfter={disableDatesAfter}
      disableDatesBefore={disableDatesBefore}
      disableSpecificDates={disableSpecificDates}
      allowRange={allowRange}
      onChange={handleSelection}
    />
  ) : null;

  return (
    <ESDatePickerStyled
      {...other}
      component="div"
      onKeyUp={handleKeyUp}
      data-testid="date-picker"
    >
      <DatePickerHeader>
        <MonthSwitcher
          data-testid="Previuse-Month"
          variant="text"
          onClick={() => handleMonthChangeClick(previousMonth, previousYear)}
        >
          <WestRoundedIcon fontSize="small" />
        </MonthSwitcher>
        <MonthSwitcher data-testid="Next-Month" variant="text">
          <EastRoundedIcon
            fontSize="small"
            onClick={() => handleMonthChangeClick(nextMonth, nextYear)}
          />
        </MonthSwitcher>
      </DatePickerHeader>
      <DatePickerMonthWrapper>
        <ESDatePickerMonth
          month={month}
          year={year}
          hoverDate={hoverDate}
          weekStartsOn={weekStartsOn}
          focusedDate={focusDate}
          selected={selectedInterval}
          disableDatesAfter={disableDatesAfter}
          disableDatesBefore={disableDatesBefore}
          disableSpecificDates={disableSpecificDates}
          allowRange={allowRange}
          onChange={handleSelection}
          onHover={handleHover}
        />
        {secondMonth}
      </DatePickerMonthWrapper>
    </ESDatePickerStyled>
  );
};
export default ESDatePicker;
