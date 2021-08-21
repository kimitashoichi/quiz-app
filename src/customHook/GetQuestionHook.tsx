import { useState, useEffect } from "react";
import { db } from '../../firebase';

// 1. まず問題を取得する
// 2. 問題のドキュメントIDを保存しておく
// 3. 選択肢データのquestion_idフィールドと問題のドキュメントIDが同じものを全て取得する
// 4. 1-3を繰り返して10問分の問題データを取得
// 5. 表示側で使用したいオブジェクトのデータ型に合わせて詰め込む

export interface Problem {
  selection: Selection;
  question: string;
}

export interface Selection {
  selection:[{
      sentence: string;
      flag: boolean;
    }]
}

export interface GetData {
  answer_text: string;
  correct: boolean;
  question_id: string;
}

interface Question {
  id: string;
  question: string;
}

export const useGetQuestions = () => {
  // TODO：インターフェイスProblemの配列型にする
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selections, setSelections] = useState<any>();

  // 問題データの取得
  useEffect(() => {
    getData()
  }, []);

  // 問題データが更新された後に選択肢データの取得が呼ばれる様にするため
  useEffect(() => {
    getSelection(questions)
  }, [questions]);

  // 問題文と問題文IDの取得処理
  const getData = async () => {
    const colRef = db.collection("quiz-test").limit(10);
    const snapshots = await colRef.get();
    const ids = snapshots.docs.map(doc => doc.id);
    const docs: string[] = snapshots.docs.map(doc => doc.data().question);

    const target: Question[] = [];
    for (let i = 0; i < ids.length; i++) {
      let data: Question = {
        id: ids[i],
        question: docs[i],
      }
      target.push(data);
    }
    console.log(target);
    setQuestions(target);
  }

  // 選択肢の取得
  const getSelection = async (questions: Question[]) => {
    const target: any = [];
    for (let i = 0; i < questions.length; i++) {
      const colRef = db.collection("answer-test").where('question_id', '==', questions[i].id);
      const snapshots = await colRef.get();
      const docs = snapshots.docs.map(doc => doc.data());
      target.push(docs);
    }
    setSelections(target);
    console.log('getSelection', target);
  }
  
  return { questions, selections };
};