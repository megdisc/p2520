"use server"; // Server Action として動作させるために必須

import { redirect } from 'next/navigation';
import fs from 'fs/promises'; // Node.js の File System モジュール (非同期版)
import path from 'path'; // Node.js の Path モジュール

/**
 * FormData を (q2 のチェックボックスを配列として正しく) 
 * オブジェクトに変換するヘルパー関数
 */
function convertFormDataToObject(formData: FormData) {
  const obj: { [key: string]: any } = {};
  
  // フォームの全キーを走査
  // (q2 のような同名キーを
  // 配列として取得するためにキーのSetを使う)
  const keys = Array.from(formData.keys());
  
  for (const key of keys) {
    // 'q2' (チェックボックス) は 'getAll' を使って配列で取得
    if (key === 'q2') {
      obj[key] = formData.getAll(key);
    } else {
      // その他は 'get' で単一の値を取得
      obj[key] = formData.get(key);
    }
  }
  return obj;
}


export async function submitContactForm(formData: FormData) {
  
  // 1. FormData を JSON 化可能なオブジェクトに変換
  const data = convertFormDataToObject(formData);

  // 2. 保存先ディレクトリをご指定の 'dummydb' に変更
  // process.cwd() はプロジェクトのルートディレクトリ (p2520/) を指します
  const submissionsDir = path.join(process.cwd(), 'dummydb');

  // 3. ユニークなファイル名を生成 (タイムスタンプベース)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `submission-${timestamp}.json`;
  const filePath = path.join(submissionsDir, filename);

  try {
    // 4. ディレクトリが存在するか確認し、なければ作成
    // (WSL/ローカル開発環境では動作します)
    await fs.mkdir(submissionsDir, { recursive: true });

    // 5. JSON データをファイルに書き込み
    // (JSON.stringify の第3引数 '2' は、読みやすいようインデントを付加)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    console.log(`ダミー送信データを保存しました: ${filePath}`);

  } catch (error) {
    // 開発環境でのみ動作する想定のため、エラーはコンソールに出力
    console.error("JSONファイルの書き込みに失敗しました:", error);
    
    // (ダミー送信なので、書き込み失敗時も処理を続行し、
    //  ユーザーをサンクスページに送ります)
  }

  // 6. 処理完了後、サンクスページにリダイレクト
  // (モックの form.js の動作を再現)
  redirect('/thanks');
}