import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const BugIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M4 2a1 1 0 10-2 0v.228a7.166 7.166 0 003.187 5.96c-.056.338-.1.685-.131 1.039a11.254 11.254 0 00-3.357-1.124l-.534-.09a1 1 0 10-.329 1.973l.534.09a9.254 9.254 0 013.648 1.452c.012.347.03.687.057 1.02l-.607.729a11 11 0 00-2.4 5.233l-.054.326a1 1 0 101.973.328l.054-.325a9 9 0 011.473-3.636C6.153 17.492 7.482 19 10 19s3.848-1.508 4.487-3.797a8.999 8.999 0 011.473 3.636l.054.325a1 1 0 101.973-.328l-.055-.326a11 11 0 00-2.4-5.233l-.607-.729c.027-.337.046-.683.058-1.035l.4-.3a5.236 5.236 0 012.282-.977l1.5-.25a1 1 0 10-.329-1.972l-1.5.25a7.236 7.236 0 00-2.401.855c-.03-.317-.072-.628-.122-.932A7.166 7.166 0 0018 2.228V2a1 1 0 10-2 0v.228c0 1.502-.65 2.894-1.727 3.855C13.395 3.635 11.81 2 10 2 8.19 2 6.605 3.635 5.728 6.083A5.165 5.165 0 014 2.228V2z" />
  </ESSvgIcon>
);

export default BugIcon;