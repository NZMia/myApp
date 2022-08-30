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
    <section className="page">
      <ul className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
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
      {children[selectedTab]}
    </section>
  );
};

export default Tabs;
