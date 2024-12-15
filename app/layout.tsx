import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "./components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 必要に応じてメタタグやリンクタグを追加 */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ padding: 0 }}
      >
        <AppWrapper>
          <header
            style={{
              backgroundColor: "rgb(41, 76, 122)", // 背景色
              color: "white", // テキスト色
              padding: "8px 16px", // ヘッダー内の余白
              display: "flex", // フレックスボックスで横並び
              alignItems: "center", // 縦中央揃え
              justifyContent: "space-between", // 両端揃え
              width: "100%", // 幅を全体に広げる
            }}
          >
            {/* ロゴとキャッチフレーズ */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                PRTIMES
              </div>
              <div style={{ fontSize: "0.875rem" }}>
                プレスリリース・ニュースリリース配信サービスのPR TIMES
              </div>
            </div>

            {/* ナビゲーションメニュー */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px", // ナビゲーション間の隙間
              }}
            >
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                地図表示
              </a>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                ランキング
              </a>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                TV
              </a>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                ストーリー
              </a>
            </nav>

            {/* 検索ボックス */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white", // 背景色を白
                borderRadius: "4px", // 角を丸く
                padding: "4px 8px", // 内側の余白
              }}
            >
              <input
                type="text"
                placeholder="キーワードで検索"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "0.875rem",
                  flex: 1, // 入力部分を広げる
                }}
              />
              <button
                style={{
                  backgroundColor: "rgb(41, 76, 122)", // ボタン背景色
                  color: "white", // テキスト色
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                🔍
              </button>
            </div>
          </header>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
