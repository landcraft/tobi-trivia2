import { useState, useCallback } from 'react';
import { TriviaQuestion } from '@/data/triviaQuestions';
import { TriviaService } from '@/services/triviaService';
import { triviaQuestions as fallbackQuestions } from '@/data/triviaQuestions';

export const useTriviaQuestions = () => {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestions = useCallback(async (count: number = 10) => {
    setLoading(true);
    setError(null);
    console.log('Starting to fetch questions, count:', count);

    try {
      // First check if we have questions in the database
      console.log('Checking for existing questions in database...');
      let dbQuestions = await TriviaService.getQuestionsFromDB(count);
      
      // If we don't have enough questions, fetch new ones with filtering
      if (dbQuestions.length < count) {
        console.log(`Only ${dbQuestions.length} questions in DB, fetching fresh filtered ones...`);
        
        // Fetch from multiple appropriate categories to ensure variety
        const categories = ['17', '19', '22']; // Science, Math, Geography
        for (const category of categories) {
          try {
            await TriviaService.fetchAndStoreQuestions({ 
              amount: Math.ceil(count / categories.length) + 5, 
              category,
              difficulty: 'easy' // Appropriate for 8/9 year olds
            });
          } catch (catError) {
            console.warn(`Failed to fetch from category ${category}:`, catError);
          }
        }
        
        // Try getting questions again after fetching
        dbQuestions = await TriviaService.getQuestionsFromDB(count);
      }
      
      if (dbQuestions.length > 0) {
        console.log('Successfully loaded', dbQuestions.length, 'filtered questions from database');
        setQuestions(dbQuestions);
      } else {
        console.log('No questions available, using curated fallback');
        // Use our curated age-appropriate questions as fallback
        const shuffled = [...fallbackQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, count));
      }
    } catch (err) {
      console.error('Error in fetchQuestions:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch questions');
      
      // Always fallback to our curated questions on error
      console.log('Using curated fallback questions due to error');
      const shuffled = [...fallbackQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, count));
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshQuestions = useCallback(async (count: number = 10) => {
    console.log('Refreshing questions - fetching fresh filtered ones...');
    setLoading(true);
    setError(null);
    
    try {
      // Fetch fresh questions from appropriate categories with filtering
      const categories = ['17', '19', '22']; // Science, Math, Geography
      let fetchSuccess = false;
      
      for (const category of categories) {
        try {
          await TriviaService.fetchAndStoreQuestions({ 
            amount: Math.ceil(count / categories.length) + 3,
            category,
            difficulty: 'easy'
          });
          fetchSuccess = true;
        } catch (catError) {
          console.warn(`Failed to refresh from category ${category}:`, catError);
        }
      }
      
      if (fetchSuccess) {
        const freshQuestions = await TriviaService.getQuestionsFromDB(count);
        
        if (freshQuestions.length > 0) {
          console.log('Refreshed with', freshQuestions.length, 'fresh filtered questions');
          setQuestions(freshQuestions);
          return;
        }
      }
      
      // If refresh fails, mix database questions with curated ones
      const dbQuestions = await TriviaService.getQuestionsFromDB(Math.floor(count / 2));
      const curatedQuestions = [...fallbackQuestions].sort(() => 0.5 - Math.random()).slice(0, count - dbQuestions.length);
      const mixedQuestions = [...dbQuestions, ...curatedQuestions].sort(() => 0.5 - Math.random());
      
      setQuestions(mixedQuestions.slice(0, count));
      console.log('Used mixed questions (DB + curated) for refresh');
      
    } catch (err) {
      console.error('Error refreshing questions:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh questions');
      
      // Fallback to curated questions
      const shuffled = [...fallbackQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, count));
      console.log('Used curated fallback due to refresh error');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    questions,
    loading,
    error,
    fetchQuestions,
    refreshQuestions
  };
};