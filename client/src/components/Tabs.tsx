import React, { ReactElement, useState } from 'react';

interface ITabTitle {
  index: number;
  title: string;
  selectedTab: number;
  onClick: (e: React.MouseEvent) => void;
}

interface ITabs {
  children: ReactElement[];
}

const TabTitle: React.FC<ITabTitle> = ({
  index,
  title,
  selectedTab,
  onClick
}) => {
  return (
    <li
      className={'tab' + ' ' + `${selectedTab === index ? 'selectedTab' : ''}`}
      tabIndex={index}
      onClick={onClick}
    >
      {title}
    </li>
  );
};

const Tabs: React.FC<ITabs> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleOnTabChange = (e: React.MouseEvent, tabIndex: number) => {
    e.preventDefault();
    setSelectedTab(tabIndex);
  };

  return (
    <section>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            index={index}
            onClick={(e) => handleOnTabChange(e, index)}
            selectedTab={selectedTab}
            title={item.props.title}
          />
        ))}
      </ul>
      {children}
    </section>
  );
};

export default Tabs;
