import { useState, useEffect } from "react";
import { db } from '../../firebase';
import {
  Question,
  Selection,
  Problem,
  SelectionFromFirestore
} from '../interface/models';

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selections, setSelections] = useState<Selection[]>();
  const [adjustmentData, setAdjustmentData] = useState<Problem[]>([]);

  // 問題データの取得
  useEffect(() => {
    getData();
  }, []);

  // 問題データが更新された後に選択肢データを取得
  useEffect(() => {
    getSelection(questions);
  }, [questions]);

  // 選択肢データの取得後にコンポーネントに渡すようのデータを作成
  useEffect(() => {
    dataAdjustment(questions, selections);
  }, [selections]);

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
    setQuestions(target);
  }

  // 選択肢の取得
  const getSelection = async (questions: Question[]) => {
    // TODO: 型をつける
    const target: any = [];
    for (let i = 0; i < questions.length; i++) {
      const colRef = db.collection("answer-test").where('question_id', '==', questions[i].id);
      // 無理やり型キャスト
      // TODO: URLのやつに書き換え
      // https://firebase.google.com/docs/reference/js/firebase.firestore.FirestoreDataConverter?hl=ja
      const snapshots = await colRef.get() as SelectionFromFirestore
      const docs = snapshots.docs.map(doc => doc.data());
      target.push(docs);
    }
    setSelections(target);
  }

  // 問題データと選択肢データの調整
  // 前提：questionsとselectionsのそれぞれの配列のインデックス番号は必ず一致している
  // 前提が崩れるパターンが見つかったらidをもとに検索して、データを作成する方針に変更する
  const dataAdjustment = (questions: any, selections: any) => {
    const data: Problem[] = [];
    for (let i = 0; i < questions.length; i++) {
      let problem: Problem = {
        selections: selections[i],
        question: questions[i].question
      }
      data.push(problem);
    }
    setAdjustmentData(data);
  }
  
  return { questions, selections, adjustmentData };
};