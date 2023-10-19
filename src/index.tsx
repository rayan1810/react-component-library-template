import React from 'react';
import './index.styles.css';

interface IMyAwesomeComponentProps {
  /** Message that you want to render on device | @default "Hello World" */
  textMessage?: string;
}

export function MyAwesomeComponent({
  textMessage = 'Hello World',
  ...props
}: IMyAwesomeComponentProps & {}) {
  return (
    <div {...props} className="MyAwesomeComponentStyles">
      {textMessage}
    </div>
  );
}
