// Server Componentとして動作します (デフォルト)
// "use client" は不要です

export default function Header() {
  return (
    <header>
      <div className="p-header">
        <div className="l-container">
          <div className="p-header__inner">
            <div className="p-header__logoBox">
              <p className="p-header__logoBox__logo">
                {/* Step 0 で public/images/ にコピー済み。
                  CSSでサイズが制御されているため、通常の img タグを使用します。
                */}
                <img src="/images/logo_swork_kaigo.png" alt="シューペルワーク for 介護" />
              </p>
              <h1 className="p-header__logoBox__text">介護の求人・転職ならシューペルワーク</h1>
            </div>
            <p className="p-header__button">
              {/* 外部リンクのため <a> タグをそのまま使用 */}
              <a href="https://s-brillant.co.jp/contact" target="_blank" rel="noopener noreferrer">
                採用ご担当者様はこちら
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
