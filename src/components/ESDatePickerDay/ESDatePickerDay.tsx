import React, { useEffect, useRef } from 'react';
import { useThemeProps } from '@mui/material';
import clsx from 'clsx';
import { getDate, isSameDay } from 'date-fns';
import { ESDatePickerDayProps } from './ESDatePickerDay.types';
import ESDatePickerDayStyled, { DayStyled } from './ESDatePickerDay.styled';

const ESDatePickerDay = (inProps: ESDatePickerDayProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESDatePickerDay' });
  const dayNode = useRef<HTMLButtonElement>(null);

  const {
    day,
    focused,
    selected = false,
    inRange = false,
    disabled = false,
    isLastSelectedDay = false,
    isFirstSelectedDay = false,
    isHoveringRight = false,
    rangeIsDifferent = false,
    inHoveringRange = false,
    onClick,
    onHover = () => {},
  } = props;

  useEffect(() => {
    if (focused && dayNode.current) {
      dayNode.current.focus();
    }
  }, [focused]);

  if (!day) {
    return <ESDatePickerDayStyled />;
  }

  const dayCellClasses = clsx({ dayCell: Boolean(day) });
  const dayClasses = clsx({
    selected,
    inRange: inRange || inHoveringRange,
    lastInRange: isLastSelectedDay,
    firstInRange: isFirstSelectedDay,
    hoverRight: isHoveringRight,
    hasRange: rangeIsDifferent,
    current: isSameDay(day, new Date()),
  });

  const handleClick = (newDay: Date) => {
    if (typeof onClick === 'function') {
      onClick(newDay);
    }
  };

  return (
    <ESDatePickerDayStyled className={dayCellClasses}>
      <DayStyled
        ref={dayNode}
        variant="text"
        className={dayClasses}
        disabled={disabled}
        onClick={() => handleClick(day)}
        onMouseOver={() => onHover(day)}
      >
        {getDate(day)}
      </DayStyled>
    </ESDatePickerDayStyled>
  );
};

export default ESDatePickerDay;
