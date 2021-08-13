import { Problem } from '../screen/Answer';

export const mockData: Problem[] = [
  {
    selection: [
      {
        sentence: "A",
        flag: false,
      },
      {
        sentence: "B",
        flag: false,
      },
      {
        sentence: "C",
        flag: false,
      },
      {
        sentence: "ANS",
        flag: true,
      },
    ],
    question: 'sampleQuestion1',
  },
  {
    selection: [
      {
        sentence: "1",
        flag: false,
      },
      {
        sentence: "2",
        flag: false,
      },
      {
        sentence: "3",
        flag: false,
      },
      {
        sentence: "ANS",
        flag: true,
      },
    ],
    question: 'sampleQuestion2',
  },
  {
    selection: [
      {
        sentence: "あ",
        flag: false,
      },
      {
        sentence: "い",
        flag: false,
      },
      {
        sentence: "う",
        flag: false,
      },
      {
        sentence: "ANS",
        flag: true,
      },
    ],
    question: 'sampleQuestion3',
  }
];