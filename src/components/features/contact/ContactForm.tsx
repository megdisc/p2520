"use client"; // Client Component として宣言

import { useState, ChangeEvent } from "react";
import { useFormStatus } from "react-dom";
// Step 7 で作成する Server Action をインポート
import { submitContactForm } from "@/lib/actions/contactActions"; 

/**
 * 生まれ年の <option> タグを生成する (モックのインラインスクリプトの代替)
 */
const BirthYearOptions = () => {
  const years = [];
  // モックに合わせて 2005年～1960年
  for (let year = 2005; year >= 1960; year--) {
    years.push(
      <option key={year} value={year}>
        {year}年
      </option>
    );
  }
  return <>{years}</>;
};

/**
 * Server Action 送信中の pending 状態をハンドリングする送信ボタン
 */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <input
      type="submit"
      value={pending ? "送信中..." : "同意して登録する"}
      className="hs-submit"
      disabled={pending}
    />
  );
}


export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;

  // 「次へ」ボタン (モックのバリデーションは Server Action 側で実行)
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 「戻る」ボタン
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // ラジオボタン自動次へ (q1, q3, q4, q5)
  const handleAutoNext = (e: ChangeEvent<HTMLInputElement>) => {
    // 値が選択されたら次のステップへ
    handleNext();
  };

  // ステップインジケーターのJSX
  const stepIndicator = Array.from({ length: totalSteps }, (_, i) => i + 1).map(
    (step) => (
      <li key={step} className={currentStep === step ? "is-current" : ""}>
        {step}
      </li>
    )
  );

  return (
    <div className="c-form">
      <div className="c-form__titleBox">
        <p className="c-form__titleBox__title">
          {/* /images/ (public) を参照 */}
          <img src="/images/form_title.svg" alt="簡単30秒" />
        </p>
        <div className="c-form__titleBox__stepList">
          <ul>{stepIndicator}</ul>
        </div>
      </div>
      <div className="c-form__content">
        {/* Server Action を form の action 属性に渡します。
          Step 7 でこの関数 (submitContactForm) を作成します。
        */}
        <form id="multiStepForm" action={submitContactForm}>
          
          {/* ステップの表示制御:
            モックの form.js は display を切り替えているため、
            React の style 属性で現在のステップのみ 'block' にします。
          */}

          {/* ステップ 1 (q1) */}
          <div className="form-step" data-step="1" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
            <div className="field">
              <label><span className="required-icon">必須</span>今の気持ちを教えてください</label>
              <ul className="inputs-list multi-container">
                <li><label className="hs-form-radio"><input type="radio" name="q1" value="良い求人があれば" required onChange={handleAutoNext} /><span>良い求人があれば</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q1" value="今すぐ転職したい" onChange={handleAutoNext} /><span>今すぐ転職したい</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q1" value="転職を悩んでいる" onChange={handleAutoNext} /><span>転職を悩んでいる</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q1" value="その他" onChange={handleAutoNext} /><span>その他</span></label></li>
              </ul>
            </div>
          </div>
          
          {/* ステップ 2 (q2) */}
          <div className="form-step" data-step="2" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
            <div className="field">
              <label><span className="required-icon">必須</span>どんな資格をお持ちですか？</label>
              <ul className="inputs-list multi-container">
                {/* チェックボックスは自動遷移しない (form.js の動作) */}
                <li><label className="hs-form-checkbox"><input type="checkbox" name="q2" value="介護福祉士" /><span>介護福祉士</span></label></li>
                <li><label className="hs-form-checkbox"><input type="checkbox" name="q2" value="実務者研修" /><span>実務者研修</span></label></li>
                <li><label className="hs-form-checkbox"><input type="checkbox" name="q2" value="初任者研修" /><span>初任者研修</span></label></li>
                <li><label className="hs-form-checkbox"><input type="checkbox" name="q2" value="その他" /><span>その他</span></label></li>
                <li><label className="hs-form-checkbox"><input type="checkbox" name="q2" value="資格なし" /><span>資格なし</span></label></li>
              </ul>
            </div>
            <div className="button">
              {/* onClick イベントハンドラを React 形式で指定 */}
              <div className="button-back" onClick={handleBack}>戻る</div>
              <div className="button-next" onClick={handleNext}>次へ</div>
            </div>
          </div>

          {/* ステップ 3 (q3) */}
          <div className="form-step" data-step="3" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
            <div className="field">
              <label><span className="required-icon">必須</span>ご希望の働き方</label>
              <ul className="inputs-list multi-container">
                <li><label className="hs-form-radio"><input type="radio" name="q3" value="正社員" required onChange={handleAutoNext} /><span>正社員</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q3" value="派遣" onChange={handleAutoNext} /><span>派遣</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q3" value="パート" onChange={handleAutoNext} /><span>パート</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q3" value="こだわりなし" onChange={handleAutoNext} /><span>こだわりなし</span></label></li>
              </ul>
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
            </div>
          </div>
          
          {/* ステップ 4 (q4) */}
          <div className="form-step" data-step="4" style={{ display: currentStep === 4 ? 'block' : 'none' }}>
            <div className="field">
              <label><span className="required-icon">必須</span>ご希望の時間帯</label>
              <ul className="inputs-list multi-container">
                <li><label className="hs-form-radio"><input type="radio" name="q4" value="日勤のみ" required onChange={handleAutoNext} /><span>日勤のみ</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q4" value="夜勤のみ" onChange={handleAutoNext} /><span>夜勤のみ</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q4" value="交代制" onChange={handleAutoNext} /><span>交代制</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q4" value="こだわりなし" onChange={handleAutoNext} /><span>こだわりなし</span></label></li>
              </ul>
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
            </div>
          </div>

          {/* ステップ 5 (q5) */}
          <div className="form-step" data-step="5" style={{ display: currentStep === 5 ? 'block' : 'none' }}>
            <div className="field">
              <label><span className="required-icon">必須</span>転職希望時期</label>
              <ul className="inputs-list multi-container">
                <li><label className="hs-form-radio"><input type="radio" name="q5" value="すぐにでも" required onChange={handleAutoNext} /><span>すぐにでも</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q5" value="1ヶ月以内" onChange={handleAutoNext} /><span>1ヶ月以内</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q5" value="3ヶ月以内" onChange={handleAutoNext} /><span>3ヶ月以内</span></label></li>
                <li><label className="hs-form-radio"><input type="radio" name="q5" value="未定" onChange={handleAutoNext} /><span>未定</span></label></li>
              </ul>
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
            </div>
          </div>

          {/* ステップ 6 (q6) */}
          <div className="form-step" data-step="6" style={{ display: currentStep === 6 ? 'block' : 'none' }}>
            <div className="field">
              {/* 'for' を 'htmlFor' に修正 */}
              <label htmlFor="q6_pref"><span className="required-icon">必須</span>お住まいの都道府県</label>
              {/* 'selected' を 'defaultValue' に修正 */}
              <select id="q6_pref" name="q6_pref" required defaultValue="">
                <option value="" disabled>都道府県を選択</option>
                <option value="広島県">広島県</option>
                <option value="岡山県">岡山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="山口県">山口県</option>
                <option value="大阪府">大阪府</option>
                <option value="福岡県">福岡県</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="q6_city"><span className="required-icon">必須</span>市区町村</label>
              <input type="text" id="q6_city" name="q6_city" placeholder="例：広島市中区" required />
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
              <div className="button-next" onClick={handleNext}>次へ</div>
            </div>
          </div>

          {/* ステップ 7 (q7) */}
          <div className="form-step" data-step="7" style={{ display: currentStep === 7 ? 'block' : 'none' }}>
            <div className="field">
              <label htmlFor="q7_birth_year"><span className="required-icon">必須</span>生まれ年</label>
              {/* インラインスクリプトを BirthYearOptions コンポーネントで置き換え */}
              <select id="q7_birth_year" name="q7_birth_year" required defaultValue={1990}>
                <option value="" disabled>選択してください</option>
                <BirthYearOptions />
              </select>
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
              <div className="button-next" onClick={handleNext}>次へ</div>
            </div>
          </div>
          
          {/* ステップ 8 (q8, q9) */}
          <div className="form-step" data-step="8" style={{ display: currentStep === 8 ? 'block' : 'none' }}>
            <div className="field">
              <label htmlFor="q8_name"><span className="required-icon">必須</span>お名前</label>
              <input type="text" id="q8_name" name="q8_name" placeholder="例：山田 太郎" required />
            </div>
            <div className="field">
              <label htmlFor="q9_furigana"><span className="required-icon">必須</span>フリガナ</label>
              <input type="text" id="q9_furigana" name="q9_furigana" placeholder="例：ヤマダ タロウ" required />
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
              <div className="button-next" onClick={handleNext}>次へ</div>
            </div>
          </div>
          
          {/* ステップ 9 (q10, privacy_policy, submit) */}
          <div className="form-step" data-step="9" style={{ display: currentStep === 9 ? 'block' : 'none' }}>
            <div className="field">
              <label htmlFor="q10_tel"><span className="required-icon">必須</span>電話番号</label>
              <input type="tel" id="q10_tel" name="q10_tel" placeholder="例：09012345678" required />
            </div>
            <div className="field">
              <label htmlFor="q10_email"><span className="required-icon">必須</span>メールアドレス</label>
              <input type="email" id="q10_email" name="q10_email" placeholder="例：sample@example.com" required />
            </div>
            <div className="hs-privacy_policy">
              <label className="hs-form-booleancheckbox">
                <input type="checkbox" id="privacy_policy" name="privacy_policy" required />
                <span><a href="#pp" data-lity>個人情報保護方針</a>に同意する</span>
              </label>
            </div>
            <div className="actions">
              {/* 送信ボタン (pending 状態管理) */}
              <SubmitButton />
            </div>
            <div className="button">
              <div className="button-back" onClick={handleBack}>戻る</div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
