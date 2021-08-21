import firebase from 'firebase/app';

export interface Problem {
  selections: Selection[];
  question: string;
}

export interface Selection {
  answer_text: string;
  correct: boolean;
  question_id: string;
}

export interface Question {
  id: string;
  question: string;
}

export type SelectionFromFirestore = firebase.firestore.QuerySnapshot<Selection>;