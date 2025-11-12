// フォームから送信されるデータの型定義

export interface ContactFormData {
  q1: string; // 今の気持ち
  q2: string[]; // 資格 (複数選択可)
  q3: string; // 希望の働き方
  q4: string; // 希望の時間帯
  q5: string; // 転職希望時期
  q6_pref: string; // 都道府県
  q6_city: string; // 市区町村
  q7_birth_year: string; // 生まれ年
  q8_name: string; // お名前
  q9_furigana: string; // フリガナ
  q10_tel: string; // 電話番号
  q10_email: string; // メールアドレス
  privacy_policy: "on" | string; // 同意 (チェック時は "on")
}
