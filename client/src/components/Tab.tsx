import React, { ReactElement } from 'react';

interface TabProps {
  title: string;
  children?: React.ReactNode;
}
const Tab: React.FC<TabProps> = ({ title, children }) => {
  return (
    <div title={title} className="">
      {children}
    </div>
  );
};

export default Tab;
