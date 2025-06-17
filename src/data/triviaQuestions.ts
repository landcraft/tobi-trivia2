export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}

// All questions sourced from freely available educational content and general knowledge
export const triviaQuestions: TriviaQuestion[] = [
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "64", "48"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "How many minutes are in 2 hours?",
    options: ["100", "110", "120", "130"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: 2,
    category: "Space",
    difficulty: "Medium"
  },
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Medium"
  },
  {
    question: "What is 144 ÷ 12?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "Which gas makes up about 78% of Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "How many sides does a pentagon have?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Medium"
  },
  {
    question: "What is 15 + 27?",
    options: ["40", "41", "42", "43"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "How many bones are in an adult human body?",
    options: ["106", "156", "206", "256"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "What is 9²?",
    options: ["72", "81", "90", "99"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "How long does it take Earth to orbit the Sun?",
    options: ["364 days", "365 days", "366 days", "367 days"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "Medium"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "If you have 3 dozens of eggs, how many eggs do you have?",
    options: ["24", "30", "36", "42"],
    correctAnswer: 2,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "How many chambers does a human heart have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "What is 100 - 37?",
    options: ["63", "67", "73", "77"],
    correctAnswer: 0,
    category: "Math",
    difficulty: "Medium"
  },
  {
    question: "Which planet has rings around it?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: 2,
    category: "Space",
    difficulty: "Medium"
  },
  {
    question: "What temperature does water freeze at in Celsius?",
    options: ["0°C", "10°C", "32°C", "100°C"],
    correctAnswer: 0,
    category: "Science",
    difficulty: "Medium"
  },
  {
    question: "How many angles does a triangle have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Math",
    difficulty: "Easy"
  }
];

export const getRandomQuestions = (count: number = 10): TriviaQuestion[] => {
  const shuffled = [...triviaQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, triviaQuestions.length));
};