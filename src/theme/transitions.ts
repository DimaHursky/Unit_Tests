const duration = {
  0: '0ms',
  50: '50ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  250: '250ms',
  300: '300ms',
  350: '350ms',
  400: '400ms',
  450: '450ms',
  500: '500ms',
  5000: '5000ms',
};

const easing = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  linear: 'cubic-bezier(0, 0, 1, 1)',
};

const transitions = {
  duration,
  easing,
};

export default transitions;
