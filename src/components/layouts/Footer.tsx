// Server Componentとして動作します (デフォルト)

export default function Footer() {
  return (
    <footer>
      <div className="p-footer">
        <div className="l-container">
          <div className="p-footer__inner">
            <p className="p-footer__text">
              運営会社：シューペルブリアン株式会社　
              <br className="is-sp" />
              労働者派遣事業許可番号：派34-300226　
              <br className="is-sp" />
              有料職業紹介事業許可番号：34-ユ-300135
            </p>
            <p className="p-footer__link">
              {/* 外部リンクのため <a> タグをそのまま使用 */}
              <a href="https://s-brillant.co.jp/contact" target="_blank" rel="noopener noreferrer">
                採用ご担当者様はこちら
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
