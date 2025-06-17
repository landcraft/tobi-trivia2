import React from 'react';
import TriviaGame from './TriviaGame';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <TriviaGame />
    </div>
  );
};

export default AppLayout;