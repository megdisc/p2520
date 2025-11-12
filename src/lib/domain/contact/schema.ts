/**
 * フォームデータのバリデーションスキーマ
 * * Step 9 (DB連携) のタイミングで、Zodなどのライブラリを使用して
 * サーバーサイドバリデーションをここに実装します。
 * * 例:
 * import { z } from "zod";
 * * export const ContactFormSchema = z.object({
 * q8_name: z.string().min(1, "お名前は必須です"),
 * q10_email: z.string().email("有効なメールアドレスを入力してください"),
 * // ... 他のフィールド ...
 * });
 */
