"use server"; // Server Action として宣言

import { redirect } from "next/navigation";
import { ContactFormData } from "../domain/contact/types";

// フォーム送信時の処理
export async function submitContactForm(formData: FormData) {
  
  // 1. FormDataからデータを抽出
  // (q2 のみ getAll で配列として取得)
  const data: ContactFormData = {
    q1: formData.get("q1") as string,
    q2: formData.getAll("q2") as string[],
    q3: formData.get("q3") as string,
    q4: formData.get("q4") as string,
    q5: formData.get("q5") as string,
    q6_pref: formData.get("q6_pref") as string,
    q6_city: formData.get("q6_city") as string,
    q7_birth_year: formData.get("q7_birth_year") as string,
    q8_name: formData.get("q8_name") as string,
    q9_furigana: formData.get("q9_furigana") as string,
    q10_tel: formData.get("q10_tel") as string,
    q10_email: formData.get("q10_email") as string,
    privacy_policy: formData.get("privacy_policy") as string,
  };

  // 2. ダミー処理 (コンソールにログ出力)
  // (ターミナル (npm run dev の実行場所) を確認してください)
  console.log("===== Server Action: フォームデータ受信 (ダミー) =====");
  console.log(data);
  console.log("=================================================");

  // (Step 9 でここに Supabase への保存処理を実装します)
  
  // 3. pending 状態をUIで確認するために 1秒待機 (ダミー)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 4. サンクスページへリダイレクト
  redirect("/thanks");

  // (バリデーションエラー時の処理は Step 9 で実装)
}
