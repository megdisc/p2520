// Server Componentとして動作します (デフォルト)
// フォーム自体 (ContactForm) は Client Component になりますが、
// このページコンポーネントは Server Component です。

import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/features/contact/ContactForm"; // Step 6 で作成済み

export default function TopPage() {
  return (
    <main>
      {/* lp_kaigo01.html の p-mainVisual セクションの構造を再現 */}
      <section className="p-mainVisual">
        <div className="l-container">
          <div className="p-mainVisual__inner">
            
            {/* Step 4 で作成した静的コンテンツ */}
            <Hero />
            
            {/* Step 6 で作成したフォームコンポーネントのラッパー 
              (ContactForm.tsx は div.c-form から実装されています)
            */}
            <div className="p-mainVisual__form">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}