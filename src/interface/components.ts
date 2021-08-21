import { Selection } from './models';

export interface AnswerProps {
  selections: Selection[];
  // TODO:型付けする
  checkAnswer: any; 
}

export interface QuestionProps {
  questionText: string;
}