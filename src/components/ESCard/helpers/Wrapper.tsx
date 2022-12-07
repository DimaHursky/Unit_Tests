import React, { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '16px',
      paddingRight: '16px',
    }}
  >
    {children}
  </div>
);

export default Wrapper;
