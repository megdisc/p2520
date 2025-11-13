// p2520/src/app/(lp)/layout.tsx

import { Metadata } from 'next'; // Metadata 型をインポート
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

// CSS/Font のインポート
import "@/app/globals.css"; 

// --- ここから追加 ---
/**
 * (lp) グループ配下の全ページに適用するメタデータ
 * noindex, nofollow を設定し、検索エンジンへの登録を防ぎます。
 */
export const metadata: Metadata = {
  // robots メタタグを設定
  robots: {
    index: false,    // noindex
    follow: false,   // nofollow
    
    // 他のクローラーに対しても明示的に設定
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // (オプション) モックアップに合わせてタイトルを設定
  // title: "s-brillant (LP Kaigo)", // モックの <title>
};
// --- ここまで追加 ---


export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* (lp) ページでは、app/layout.tsx の子として、
        専用のヘッダーとフッターを適用する
      */}
      <Header />
      
      {/* トップページ (page.tsx) またはサンクスページ (thanks/page.tsx) が
        この children に入ります 
      */}
      {children}
      
      <Footer />
    </>
  );
}