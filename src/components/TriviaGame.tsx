import React, { useState, useEffect } from 'react';
import TriviaCard from './TriviaCard';
import TriviaHeader from './TriviaHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';
import { TriviaQuestion } from '@/data/triviaQuestions';

const TriviaGame: React.FC = () => {
  const { questions, loading, refreshQuestions } = useAppContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const startNewGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setGameComplete(false);
  };

  const handleRefreshQuestions = async () => {
    await refreshQuestions();
    startNewGame();
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  if (loading || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
        <div className="text-2xl font-bold text-purple-800">Loading questions...</div>
      </div>
    );
  }

  if (gameComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-400 shadow-2xl">
          <CardContent className="text-center p-8 space-y-6">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Game Complete!</h2>
            <div className="text-3xl font-bold text-purple-700">
              Final Score: {score}/{questions.length} ({percentage}%)
            </div>
            <Button onClick={startNewGame} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 text-xl rounded-full">
              🎮 Play Again!
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4">
      <TriviaHeader 
        score={score}
        totalQuestions={questions.length}
        currentQuestion={currentQuestionIndex + 1}
        streak={streak}
        onRefresh={handleRefreshQuestions}
        isRefreshing={loading}
      />
      
      <TriviaCard
        question={questions[currentQuestionIndex]}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showResult={showResult}
        onNext={handleNextQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default TriviaGame;