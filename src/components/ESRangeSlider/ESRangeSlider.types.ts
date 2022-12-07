import React from 'react';

export interface ESRangeSliderProps {
  label: React.ReactNode;
  id?: string;
  value: number | number[];
  min?: number;
  max?: number;
  step?: number;
  output?: boolean;
  helpText?: React.ReactNode;
  error?: string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange(value: number | number[]): void;
  onFocus?(): void;
  onBlur?(): void;
}
