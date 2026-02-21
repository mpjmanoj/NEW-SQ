export enum Step {
  Home,
  Form,
  Quiz,
  Certificate,
  Success
}

export interface UserData {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  countryCode: string;
  photo: string;
  optIn?: boolean;
  score?: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
}

export interface QuizAnswer {
  questionId: number;
  selectedOption: number;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: "What is the primary diet of sparrows?", options: ["Seeds & insects", "Fruits & nuts", "Fish", "Leaves"], correctAnswer: 0 },
  { id: 2, question: "What sound does a sparrow typically make?", options: ["Quack", "Hoot", "Chirp", "Caw"], correctAnswer: 2 },
  { id: 3, question: "How long do sparrows typically live in the wild?", options: ["1–2 years", "3–5 years", "6–10 years", "11–15 years"], correctAnswer: 1 },
  { id: 4, question: "What is a group of sparrows called?", options: ["Flock", "School", "Herd", "Swarm"], correctAnswer: 0 },
  { id: 5, question: "What is a baby sparrow called?", options: ["Kitten", "Pup", "Chick", "Cub"], correctAnswer: 2 },
  { id: 6, question: "How do sparrows communicate with each other?", options: ["Feather display", "Dances", "Beak taps", "Songs and calls"], correctAnswer: 3 },
  { id: 7, question: "How many species of sparrows are there?", options: ["About 50", "About 100", "About 200", "About 300"], correctAnswer: 2 },
  { id: 8, question: "What is the most common species of sparrow?", options: ["House Sparrow", "Song Sparrow", "Tree Sparrow", "Savannah Sparrow"], correctAnswer: 0 },
  { id: 9, question: "What's the average weight of a House Sparrow?", options: ["10–15 grams", "20–25 grams", "30–35 grams", "40–45 grams"], correctAnswer: 1 },
  { id: 10, question: "How far can sparrows travel from their nest to find food?", options: ["100 meters", "500 meters", "1 kilometer", "5 kilometers"], correctAnswer: 1 },
  { id: 11, question: "What season do sparrows molt their feathers?", options: ["Spring", "Summer", "Winter", "Fall"], correctAnswer: 3 },
  { id: 12, question: "What colour are the legs of a House Sparrow?", options: ["Blue", "Red", "Brown", "Yellow"], correctAnswer: 2 },
  { id: 13, question: "What type of sparrow has a black patch on its chest?", options: ["Tree Sparrow", "House Sparrow", "Song Sparrow", "Savannah Sparrow"], correctAnswer: 1 },
  { id: 14, question: "What is the wingspan of an average House Sparrow?", options: ["10–12 cm", "13–15 cm", "16–18 cm", "19–21 cm"], correctAnswer: 2 },
  { id: 15, question: "What is the scientific name of the House Sparrow?", options: ["Passer domesticus", "Passer montanus", "Melospiza melodia", "None of the above"], correctAnswer: 0 },
  { id: 16, question: "What feature distinguishes male and female House Sparrows?", options: ["Colour of feathers", "Beak size", "Leg length", "Tail shape"], correctAnswer: 0 },
  { id: 17, question: "How long does it take for sparrow eggs to hatch?", options: ["3–5 days", "6–8 days", "11–14 days", "15–20 days"], correctAnswer: 2 },
  { id: 18, question: "What is the typical clutch size for a sparrow?", options: ["1–2 eggs", "3–7 eggs", "8–10 eggs", "11–15 eggs"], correctAnswer: 1 },
  { id: 19, question: "Where are sparrows commonly found in India?", options: ["Assam", "Kashmir", "South India & Assam", "Mostly South"], correctAnswer: 2 },
  { id: 20, question: "How many eggs do sparrows usually lay?", options: ["5–6", "4–5", "6–8", "3–4"], correctAnswer: 1 },
];