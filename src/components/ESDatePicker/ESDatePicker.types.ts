export interface ESDatePickerProps {
  id?: string;
  month: number;
  year: number;
  selected?: Date | DateRange;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  allowRange?: boolean;
  multiMonth?: boolean;
  disableDatesBefore?: Date;
  disableDatesAfter?: Date;
  disableSpecificDates?: Date[];
  onChange?: (date: DateRange) => void;
  onMonthChange?: (month: number, year: number) => void;
}

export interface DateRange {
  start: Date;
  end: Date;
}
