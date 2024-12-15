/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PR TIMES</title>
        <meta
          name="description"
          content="プレスリリース・ニュースリリース配信サービスのPR TIMES"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* 背景画像とオーバーレイ */}
        <div
          style={{
            position: "fixed", // 背景を固定
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/moriback.jpg')`, // 背景画像のパスを指定
            backgroundSize: "cover", // 画面全体を覆う
            backgroundRepeat: "no-repeat", // 繰り返しを無効化
            backgroundPosition: "center", // 中央揃え
            zIndex: -1, // 背景画像を後ろに配置
          }}
        />
        <div
          style={{
            position: "fixed", // 背景の上にオーバーレイを配置
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // 半透明の白をオーバーレイ
            zIndex: -1, // 背景画像のすぐ上に配置
          }}
        />

        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh", // ビューポート全体の高さ
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main
        style={{
          flex: 1,
          padding: "16px", // メインコンテンツの余白
        }}
      >
        {children}
      </main>
    </div>
  );
}

function Header() {
  return (
    <header
      style={{
        backgroundColor: "rgb(41, 76, 122)", // ヘッダー背景色
        color: "white", // テキスト色
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {/* ロゴとキャッチフレーズ */}
      <Logo />

      {/* ナビゲーション */}
      <Navigation />

      {/* 検索ボックス */}
      <SearchBox />
    </header>
  );
}

function Logo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>PR TIMES</div>
      <div style={{ fontSize: "0.875rem" }}>
        プレスリリース・ニュースリリース配信サービスのPR TIMES
      </div>
    </div>
  );
}

function Navigation() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        fontSize: "1rem",
      }}
    >
      <a href="#" style={navLinkStyle}>
        プレスリリース
      </a>
      <a href="#" style={navLinkStyle}>
        ランキング
      </a>
      <a href="#" style={navLinkStyle}>
        TV
      </a>
      <a href="#" style={navLinkStyle}>
        ストーリー
      </a>
    </nav>
  );
}

function SearchBox() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "4px",
        padding: "4px 8px",
        gap: "8px",
        maxWidth: "300px",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="キーワードで検索"
        style={{
          border: "none",
          outline: "none",
          fontSize: "0.875rem",
          flex: 1,
        }}
      />
      <button
        style={{
          backgroundColor: "rgb(41, 76, 122)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "4px 12px",
          cursor: "pointer",
        }}
      >
        🔍
      </button>
    </div>
  );
}
