// p2520/src/app/(lp)/thanks/page.tsx

"use client"; // モーダル操作のため Client Component に変更

import { useEffect } from "react"; // useEffect をインポート
import Link from "next/link"; // Next.js のリンクコンポーネント

// lity のグローバル型を宣言 (TypeScript エラー回避のため)
declare global {
  interface Window {
    // jQuery プラグインとして lity がロードされることを想定
    jQuery: {
      lity: (target: string) => void;
    };
    // もし lity がスタンドアロンで window にアタッチされる場合はこちら
    // lity: (target: string) => void;
  }
}

export default function ThanksPage() {
  // クライアントサイドでドキュメントのタイトルを設定
  useEffect(() => {
    document.title = "ご登録ありがとうございました (LP Kaigo)";
  }, []);

  // モックアップのモーダル表示スクリプトを useEffect で再現
  // jQuery と lity は layout.tsx で読み込まれている前提
  useEffect(() => {
    // lity を実行する関数を定義
    const showModal = () => {
      try {
        // グローバルレイアウトで jQuery と lity が読み込まれていると仮定
        if (window.jQuery && typeof window.jQuery.lity === "function") {
          window.jQuery.lity("#thanks-modal");
        }
        /* // もし lity がスタンドアロンで読み込まれている場合
        else if (typeof window.lity === "function") {
           window.lity("#thanks-modal");
        } 
        */
        else {
          console.warn(
            "lity() is not available. Check script loading in layout.tsx."
          );
        }
      } catch (e) {
        console.error("Lity modal error:", e);
      }
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

      {/* モックアップ (lp_kaigo01-thanks.html) の <aside> (モーダル定義) を移植
        注意: #pp (プライバシーポリシー) モーダルが
        (lp)/layout.tsx や Footer で共通管理されている場合、
        ここの #pp の <div className="p-pp lity-hide"...> は削除してください。
        ここでは #thanks-modal のみを移植するのが安全です。
      */}
      <aside>
        <div id="thanks-modal" className="lity-hide c-thanksModal">
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
            className="p-pp__button"
            type="button"
            aria-label="Close (Press escape to close)"
            data-lity-close=""
          ></button>
        </div>

        {/* #pp モーダル。
          (lp)/layout.tsx で共通定義されている場合は、以下の div は不要です。
        */}
        <div className="p-pp lity-hide" id="pp">
          <h2 className="p-pp__title">個人情報保護方針</h2>
          <div className="p-pp__entry">
            <p>
              シューペルブリアン株式会社（以下、「当社」といいます。）は、当社の提供するサービス（以下、「本サービス」といいます。）における、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>
            {/* ... (モックアップでは省略されているポリシー本文) ... */}
          </div>
          <button
            className="p-pp__button"
            type="button"
            aria-label="Close (Press escape to close)"
            data-lity-close=""
          ></button>
        </div>
      </aside>
    </>
  );
}