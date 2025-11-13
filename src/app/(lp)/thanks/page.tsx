// p2520/src/app/(lp)/thanks/page.tsx

"use client"; 

// useState, useEffect をインポート
import { useState, useEffect } from "react"; 
import Link from "next/link"; // Next.js のリンクコンポーネント

// lity や jQuery のグローバル型宣言は不要なため削除
/*
declare global {
  interface Window {
    jQuery: { lity: (target: string) => void; };
    lity: (target: string) => void;
  }
}
*/

export default function ThanksPage() {
  // サンクスモーダルの表示状態を管理 (追加)
  const [isThanksModalOpen, setIsThanksModalOpen] = useState(false);

  // クライアントサイドでドキュメントのタイトルを設定
  useEffect(() => {
    document.title = "ご登録ありがとうございました (LP Kaigo)";
  }, []);

  // 1秒後にサンクスモーダルを表示するロジック (lity 呼び出しを useState に変更)
  useEffect(() => {
    // lity を実行する関数を定義
    const showModal = () => {
      // lity() の呼び出しの代わりに、React の状態を更新
      setIsThanksModalOpen(true);
    };

    // 1秒後にモーダルを表示
    const timer = setTimeout(showModal, 1000); // 1秒後に実行

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => clearTimeout(timer);
  }, []); // 空の依存配列で、マウント時に1回だけ実行

  return (
    <>
      <main>
        {/* lp_kaigo01-thanks.html の <section class="p-thanks"> を移植 */}
        <section className="p-thanks">
          <div className="l-container">
            <div className="p-thanks__inner">
              {/* モックアップの p-thanks__content に修正 */}
              <div className="p-thanks__content">
                <h1 className="p-thanks__content__title">
                  ご登録ありがとうございます！
                </h1>
                <div className="p-thanks__content__text">
                  <p>
                    担当者より「お電話」または「メール」にて、
                    <br />
                    <span className="underline">
                      1営業日以内にご連絡いたします。
                    </span>
                  </p>
                  <p>
                    もし、数日経過しても担当よりご連絡がない場合は、
                    <br className="is-pc" />
                    お電話番号やメールアドレスの誤入力の可能性がございますので、
                    <br className="is-pc" />
                    お手数ですが下記電話番号またはメールアドレスまでご連絡くださいませ。
                  </p>
                </div>
              </div>

              {/* モックアップの p-thanks__textBox に修正 */}
              <div className="p-thanks__textBox">
                <div className="p-thanks__textBox__text">
                  <p>
                    求職者様に安心して働けるように
                    <br />
                    担当コンサルタントが徹底サポートします。
                    <br />
                    あなたのスキルや経験を活かし、キャリアを築いていきませんか？
                  </p>
                  <p>お会いできる機会を心よりお待ちしております。</p>
                </div>
                <p className="p-thanks__textBox__button">
                  {/*
                    モックアップは 'lp_kaigo01.html' (相対パス) へのリンク。
                    Next.js プロジェクトのルート (LPトップ '/') へのリンクに変更します。
                    クラス名は元の page.tsx の 'c-button' を使用します。
                  */}
                  <Link href="/" className="c-button">
                    TOPページへ
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* モーダル定義 (aside タグは必須ではありませんが、構造を維持)
        lity に依存しないため、React の条件付きレンダリングを使用します。
      */}
      <aside>
        
        {/* --- サンクスモーダル --- */}
        {/* isThanksModalOpen が true の場合のみ、モーダルを描画 */}
        {isThanksModalOpen && (
          // オーバレイ (クリックで閉じる)
          <div className="c-modal-overlay" onClick={() => setIsThanksModalOpen(false)}>
            
            <div 
              id="thanks-modal" 
              className="c-thanksModal" // lity-hide は削除
              onClick={(e) => e.stopPropagation()} // 内部クリックで閉じないように
            >
              <h2 className="c-thanksModal__title">ご連絡について</h2>
              <div className="c-thanksModal__content">
                <p>
                  担当者より<span className="underline">1営業日以内</span>
                  にご連絡いたします。
                </p>
                <p>
                  もし連絡がない場合は、お手数ですが下記までお問い合わせください。
                </p>
                <div className="c-thanksModal__contact">
                  <p>電話番号：0120-939-393</p>
                  <p>Mail：spb.cs@s-brillant.co.jp</p>
                </div>
              </div>
              <button
                className="p-pp__button" // モックの thanks.html はこのクラスを使っている
                type="button"
                aria-label="Close (Press escape to close)"
                onClick={() => setIsThanksModalOpen(false)} // data-lity-close の代わり
              ></button>
            </div>
          </div>
        )}

        {/* #pp モーダル。
          共通コンポーネント (PrivacyPolicyModal) に移行したため、
          ここの <div className="p-pp lity-hide"...> は完全に削除します。
        */}
        
      </aside>
    </>
  );
}