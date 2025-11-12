// Server Componentとして動作します (デフォルト)

// メタデータ（タイトル）を設定
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ご登録ありがとうございました (LP Kaigo)",
};

export default function ThanksPage() {
  return (
    <main>
      {/* lp_kaigo01-thanks.html の <section class="p-thanks"> を移植 */}
      <section className="p-thanks">
        <div className="l-container">
          <div className="p-thanks__inner">
            <div className="p-thanks__titleBox">
              <p className="p-thanks__titleBox__title">
                ご登録いただき
                <br />
                ありがとうございました
              </p>
              <p className="p-thanks__titleBox__text">
                ご入力いただいた内容を確認の上、
                <br className="is-sp" />
                担当者よりご連絡させていただきます。
                <br />
                今しばらくお待ちくださいませ。
              </p>
            </div>
            <div className="p-thanks__button">
              {/* 外部リンクのため <a> タグを使用 */}
              <a
                href="https://swork.s-brillant.co.jp/"
                className="c-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                トップページへ戻る
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}