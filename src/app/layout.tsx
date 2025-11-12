import type { Metadata } from "next";
import Script from "next/script"; // next/script をインポート
import "./globals.css";

// デフォルトのフォント設定（Geist）は削除

export const metadata: Metadata = {
  // lp_kaigo01.html の <head> に基づいて更新
  title: "s-brillant (LP Kaigo)",
  description: "", // 必要に応じて設定してください
  robots: "index",
  // 他のメタタグ（format-detectionなど）は必要に応じて追加
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* lity.min.css を <head> で読み込む */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.min.css"
          integrity="sha512-UiVP2uTd2EwFRqPM4IzVXuSFAzw+Vo84jxICHVbOA1VZFUyr4a6giD9O3uvGPFIuB2p3iTnfDVLnkdY7D/SJJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/* モックアップの body#index に合わせて id を付与 */}
      <body id="index">
        {children}

        {/* 外部スクリプトを next/script で読み込む */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
          integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive" // フォーム動作に必要なため、早めに読み込む
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.min.js"
          integrity="sha512-UU0D/t+4/SgJpOeBYkY+lG16MaNF8aqmermRIz8dlmQhOlBnw6iQrnt4Ijty513WB3w+q4JO75IX03lDj6qQNA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="lazyOnload" // ページ表示後に読み込む
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js"
          integrity="sha512-eyHL1atYNycXNXZMDndxrDhNAegH2BDWt1TmkXJPoGf1WLlNYt08CSjkqF5lnCRmdm3IrkHid8s2jOUY4NIZVQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="lazyOnload" // フォーム表示までに読み込む (必要なら strategy="beforeInteractive" に変更)
        />
        
        {/* モックアップの form.js は、Client Component (ContactForm.tsx) で
          useEffect を使って読み込むか、ここで読み込む必要があります。
          今回はモックアップの動作を優先し、ここで読み込みます。
          (本来は /js/form.js として public ディレクトリに配置すべきですが、
           今回は mocks/js/form.js をコピーしていないため、
           後続のステップで ContactForm.tsx にロジックを移植することを推奨します)
           
           ※※ 注意: このままでは /js/form.js が見つからず 404 になります ※※
           ※※ Step 6 でフォームロジックを React (TSX) に移植します ※※
        */}
        {/* <Script src="/js/form.js" strategy="lazyOnload" /> */}

      </body>
    </html>
  );
}
