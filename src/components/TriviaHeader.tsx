import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import RefreshButton from './RefreshButton';

interface TriviaHeaderProps {
  score: number;
  totalQuestions: number;
  currentQuestion: number;
  streak: number;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const TriviaHeader: React.FC<TriviaHeaderProps> = ({
  score,
  totalQuestions,
  currentQuestion,
  streak,
  onRefresh,
  isRefreshing = false
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 p-6 rounded-3xl shadow-2xl">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            🧠 Tobi's Daily Trivia 🎉
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Test your knowledge and have a blast!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Badge className="bg-white/20 text-white text-lg px-4 py-2 font-bold">
            Score: {score}/{totalQuestions}
          </Badge>
          <Badge className="bg-white/20 text-white text-lg px-4 py-2 font-bold">
            Question: {currentQuestion}/{totalQuestions}
          </Badge>
          {streak > 0 && (
            <Badge className="bg-orange-500 text-white text-lg px-4 py-2 font-bold animate-pulse">
              🔥 Streak: {streak}
            </Badge>
          )}
        </div>
        
        {onRefresh && (
          <div className="flex justify-center mb-4">
            <RefreshButton onRefresh={onRefresh} isLoading={isRefreshing} />
          </div>
        )}
        
        <div className="bg-white/20 rounded-full p-2">
          <Progress 
            value={progress} 
            className="h-4"
            variant="success"
          />
        </div>
      </div>
    </div>
  );
};

export default TriviaHeader;