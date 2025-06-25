import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { TriviaQuestion } from '@/data/triviaQuestions';
import { TriviaService } from '@/services/triviaService';
import { triviaQuestions as fallbackQuestions } from '@/data/triviaQuestions';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  questions: TriviaQuestion[];
  loading: boolean;
  error: string | null;
  refreshQuestions: () => Promise<void>;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  questions: [],
  loading: false,
  error: null,
  refreshQuestions: async () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const fetchQuestions = async (count: number = 10) => {
    setLoading(true);
    setError(null);
    console.log('Fetching fresh questions...');

    try {
      // Always fetch fresh questions from Open Trivia DB
      await TriviaService.fetchAndStoreQuestions({ amount: count });
      
      // Get questions from database
      const dbQuestions = await TriviaService.getQuestionsFromDB(count);
      
      if (dbQuestions.length > 0) {
        console.log('Loaded', dbQuestions.length, 'fresh questions');
        setQuestions(dbQuestions);
      } else {
        // Fallback to static questions
        const shuffled = [...fallbackQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, count));
      }
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch questions');
      
      // Use fallback questions
      const shuffled = [...fallbackQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, count));
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshQuestions = async () => {
    try {
      await fetchQuestions(10);
      toast({
        title: "Questions Updated",
        description: "Fresh trivia questions loaded from Open Trivia DB!",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load new questions. Using cached questions.",
        variant: "destructive",
      });
    }
  };

  // Load initial questions
  useEffect(() => {
    fetchQuestions(10);
  }, []);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        questions,
        loading,
        error,
        refreshQuestions: handleRefreshQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};