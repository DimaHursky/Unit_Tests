export interface ESDatePickerMonthProps {
  month: number;
  year: number;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  selected?: Interval;
  hoverDate?: Date;
  focusedDate?: Date;
  allowRange?: boolean;
  disableDatesBefore?: Date;
  disableDatesAfter?: Date;
  disableSpecificDates?: Date[];
  onChange?: (date: Interval) => void;
  onHover?: (date: Date) => void;
}

export interface Interval {
  start: Date;
  end: Date;
}
