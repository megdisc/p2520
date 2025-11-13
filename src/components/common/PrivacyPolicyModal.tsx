"use client"; // 閉じるボタン（onClick）のため

// 閉じるための props インターフェースを定義
interface PrivacyPolicyModalProps {
  onClose: () => void;
}

export default function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
  return (
    // スタイル (globals.css) を適用したオーバレイ
    // オーバレイクリックでモーダルを閉じる
    <div className="c-modal-overlay" onClick={onClose}>
      
      {/* e.stopPropagation() 
        モーダル内部（白い背景部分）をクリックした際に、
        親要素のオーバレイにクリックイベントが伝播し、
        モーダルが閉じてしまうのを防ぎます。
      */}
      <div 
        className="p-pp" 
        id="pp" 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* モック (lp_kaigo01.html) の #pp の内容を移植します。
          (thanks/page.tsx にあった不完全なものではなく、
           lp_kaigo01.html の完全なテキストを推奨します)
        */}
        <h2 className="p-pp__title">個人情報保護方針</h2>
        <div className="p-pp__entry">
          <p>
            シューペルブリアン株式会社（以下、「当社」といいます。）は、取り扱う個人情報を適切に管理することが弊社の事業活動の根幹に関わる責務であると認識し、個人情報の保護に関する方針を次のとおり定め、すべての役員、従業員及び関係スタッフが以下の項目について取り組むべく宣言いたします。
          </p>
          <ul>
            <li>a) 当社は個人情報の取扱いに関する法令、国が定める指針及びその他の規範を遵守いたします。</li>
            <li>b)
              当社は、人材派遣事業・人材紹介事業・介護福祉事業・障がい福祉事業・軽貨物運送業を含む全事業に関して大量に取扱う個人情報及び雇用等において取扱う個人情報について事業遂行のために必要な範囲内で利用目的を明確に定め、適切に個人情報の取得、利用及び提供を行います。
            </li>
            <li>c) 取得した個人情報は利用目的の範囲内でのみ利用し、目的外利用を行わないための措置を講じます。</li>
            <li>d) 当社は個人情報への不正アクセス、個人情報の漏えい、滅失又はき損の防止並びに是正に関して内部規程を定め、個人情報を保護いたします。</li>
            <li>e) 当社は個人情報の取扱いに関する苦情及び相談対応への内部規程を定め、苦情及び相談に対応いたします。</li>
            <li>f) 当社は、匿名加工情報及び仮名加工情報の取り扱いは致しません。</li>
            <li>g) 当社は個人情報保護マネジメントシステム（ＰＭＳ）の継続的改善を行います。</li>
          </ul>
          <p style={{ textAlign: "center" }}>制定日　平成２１年９月１日<br/>第７版　改定日　令和５年３月１日<br/>シューペルブリアン株式会社<br/>代表取締役 木下 昌幸</p>
          <p style={{ textAlign: "center" }}>
            個人情報に関する問い合わせ窓口：個人情報保護管理者<br/>担当者：古山 太一<br/>〒730-0013s　広島市中区八丁堀６番３号　和光八丁堀ビル７階<br/>082-962-3100</p>
        </div>
        
        {/* 閉じるボタンに React の onClick イベントを割り当て */}
        <button
          className="p-pp__button"
          type="button"
          aria-label="Close (Press escape to close)"
          onClick={onClose} // props で受け取った関数を実行
        ></button>
      </div>
    </div>
  );
}