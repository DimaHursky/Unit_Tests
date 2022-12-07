export interface ESDatePickerDayProps {
  day?: Date;
  focused?: boolean;
  selected?: boolean;
  inRange?: boolean;
  disabled?: boolean;
  isLastSelectedDay?: boolean;
  isFirstSelectedDay?: boolean;
  isHoveringRight?: boolean;
  rangeIsDifferent?: boolean;
  inHoveringRange?: boolean;
  onClick?(day: Date): void;
  onHover?(day?: Date): void;
}

export interface IWeekday {
  weekdayName: string;
  current: boolean;
}
