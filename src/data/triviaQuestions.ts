export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}

// Questions focused on topics for 8/9 year old boys: Math, Science, Space, Literature (NO Pokemon/Games)
export const triviaQuestions: TriviaQuestion[] = [
  // Math - Addition
  {
    question: "What is 25 + 17?",
    options: ["40", "41", "42", "43"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  {
    question: "What is 34 + 28?",
    options: ["60", "61", "62", "63"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  // Math - Subtraction
  {
    question: "What is 85 - 29?",
    options: ["54", "55", "56", "57"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  {
    question: "What is 72 - 35?",
    options: ["35", "36", "37", "38"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  // Math - Multiplication
  {
    question: "What is 6 × 7?",
    options: ["40", "41", "42", "43"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "What is 8 × 9?",
    options: ["70", "71", "72", "73"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "What is 12 × 5?",
    options: ["58", "59", "60", "61"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  // Math - Division
  {
    question: "What is 48 ÷ 6?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "What is 81 ÷ 9?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Medium"
  },
  // Math - Time
  {
    question: "How many minutes are in 3 hours?",
    options: ["160", "170", "180", "190"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  {
    question: "How many seconds are in 5 minutes?",
    options: ["250", "280", "300", "320"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Easy"
  },
  // Science
  {
    question: "What do plants need to make their own food?",
    options: ["Water only", "Sunlight only", "Sunlight and water", "Soil only"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy"
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "How many bones are in an adult human body?",
    options: ["196", "206", "216", "226"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "What gas do we breathe in to stay alive?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Easy"
  },
  // Space/Solar System
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Easy"
  },
  {
    question: "How many moons does Earth have?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Easy"
  },
  {
    question: "Which planet has rings around it?",
    options: ["Mars", "Venus", "Saturn", "Mercury"],
    correctAnswer: 2,
    category: "Space",
    difficulty: "Easy"
  },
  {
    question: "What is the closest star to Earth?",
    options: ["The Moon", "The Sun", "Mars", "Venus"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Easy"
  },
  {
    question: "Which planet is the largest in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Medium"
  },
  // Literature - Dog Man
  {
    question: "Who created the Dog Man comic series?",
    options: ["Jeff Kinney", "Dav Pilkey", "Rick Riordan", "Roald Dahl"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "Medium"
  },
  {
    question: "What is Dog Man's real identity?",
    options: ["A police officer", "Half dog, half police officer", "A superhero", "A regular dog"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "Easy"
  },
  // Literature - Diary of a Wimpy Kid
  {
    question: "Who is the main character in Diary of a Wimpy Kid?",
    options: ["Rowley", "Greg Heffley", "Manny", "Rodrick"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "Easy"
  },
  {
    question: "What is the name of Greg's best friend?",
    options: ["Rowley", "Fregley", "Chirag", "Rodrick"],
    correctAnswer: 0,
    category: "Literature",
    difficulty: "Easy"
  }
];

export const getRandomQuestions = (count: number = 10): TriviaQuestion[] => {
  const shuffled = [...triviaQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, triviaQuestions.length));
};