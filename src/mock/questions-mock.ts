import { Problem } from '../interface/models';

export const mockData: Problem[] = [
  {
    selections: [
      {
        answer_text: "A",
        correct: true,
        question_id: '1'
      },
      {
        answer_text: "B",
        correct: false,
        question_id: '1'
      },
      {
        answer_text: "C",
        correct: false,
        question_id: '1'
      },
      {
        answer_text: "D",
        correct: false,
        question_id: '1'
      },
    ],
    question: 'sampleQuestion1',
  },
  {
    selections: [
      {
        answer_text: "A",
        correct: true,
        question_id: '1'
      },
      {
        answer_text: "B",
        correct: false,
        question_id: '1'
      },
      {
        answer_text: "C",
        correct: false,
        question_id: '1'
      },
      {
        answer_text: "D",
        correct: false,
        question_id: '1'
      },
    ],
    question: 'sampleQuestion1',
  },
  {
    selections: [
      {
        answer_text: "あ",
        correct: true,
        question_id: '2'
      },
      {
        answer_text: "い",
        correct: false,
        question_id: '2'
      },
      {
        answer_text: "う",
        correct: false,
        question_id: '2'
      },
      {
        answer_text: "え",
        correct: false,
        question_id: '2'
      },
    ],
    question: 'sampleQuestion2',
  },
  {
    selections: [
      {
        answer_text: "1",
        correct: true,
        question_id: '3'
      },
      {
        answer_text: "2",
        correct: false,
        question_id: '3'
      },
      {
        answer_text: "3",
        correct: false,
        question_id: '3'
      },
      {
        answer_text: "4",
        correct: false,
        question_id: '3'
      },
    ],
    question: 'sampleQuestion3',
  }
];