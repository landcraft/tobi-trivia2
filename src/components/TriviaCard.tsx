import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}

interface TriviaCardProps {
  question: TriviaQuestion;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  showResult: boolean;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const TriviaCard: React.FC<TriviaCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult,
  onNext,
  questionNumber,
  totalQuestions
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-300 shadow-xl">
      <CardHeader className="text-center">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
            {question.category}
          </Badge>
          <Badge variant="outline" className="bg-blue-200 text-blue-800">
            {questionNumber}/{totalQuestions}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-purple-800 leading-tight">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => {
            let buttonClass = "h-auto p-4 text-left font-medium text-lg transition-all duration-200 ";
            
            if (showResult) {
              if (index === question.correctAnswer) {
                buttonClass += "bg-green-200 border-green-400 text-green-800 hover:bg-green-200";
              } else if (index === selectedAnswer) {
                buttonClass += "bg-red-200 border-red-400 text-red-800 hover:bg-red-200";
              } else {
                buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
              }
            } else {
              buttonClass += selectedAnswer === index 
                ? "bg-blue-200 border-blue-400 text-blue-800" 
                : "bg-white border-purple-300 text-purple-700 hover:bg-purple-50";
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => !showResult && onAnswerSelect(index)}
                disabled={showResult}
              >
                {String.fromCharCode(65 + index)}. {option}
              </Button>
            );
          })}
        </div>
        
        {showResult && (
          <div className="text-center space-y-4">
            <div className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '🎉 Correct! Well done!' : '❌ Oops! Better luck next time!'}
            </div>
            <Button 
              onClick={onNext}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 text-lg"
            >
              Next Question →
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TriviaCard;