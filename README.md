# 俺の自炊

杉本の自炊記録サイト。食材でフィルタリングできるレシピ集。

[![Deploy to GitHub Pages](https://github.com/kaisugi/cooking/actions/workflows/deploy.yml/badge.svg)](https://github.com/kaisugi/cooking/actions/workflows/deploy.yml)

🔗 **URL**: https://kaisugi.github.io/cooking/

<p align="center">
  <img src="public/logo-192.png" alt="俺の自炊" width="128" />
</p>

## 技術スタック

- **Astro 4.0** - 静的サイトジェネレーター
- **TypeScript** - 型安全性
- **Preact** - 軽量UIライブラリ（3KB）
- **Tailwind CSS** - ユーティリティファーストCSS
- **GitHub Pages** - ホスティング
- **GitHub Actions** - 自動デプロイ

## 主な機能

- ✅ 食材による複数選択フィルター（AND条件）
- ✅ ページロード時のランダム表示
- ✅ カテゴリ表示（うどん、パスタ、スープなど）
- ✅ レスポンシブデザイン（モバイル対応）
- ✅ アクセシビリティ対応（キーボード操作可能）
- ✅ kaisugi.me風のモダンなデザイン
- ✅ PWA対応（ホーム画面に追加してアプリとして使用可能）

## 開発環境のセットアップ

```bash
# 依存関係のインストール
yarn install

# 開発サーバーの起動
yarn dev
# → http://localhost:4321/cooking

# プロダクションビルド
yarn build

# ビルドのプレビュー
yarn preview
```

## デプロイ

mainブランチへのpushで自動的にGitHub Pagesへデプロイされます。

```bash
git add .
git commit -m "Update recipes"
git push
```

## レシピの追加方法

`src/data/recipes.ts`の`recipes`配列に追加：

```typescript
{
  "name": "料理名",
  "url": "https://example.com/recipe",
  "ingredients": ["食材1", "食材2", "食材3"],
  "category": "カテゴリ"
}
```

詳細は [CLAUDE.md](./CLAUDE.md) を参照。

## プロジェクト構成

```
src/
├── components/     # Astro & Preactコンポーネント
├── layouts/        # レイアウト
├── pages/          # ページ
├── data/           # レシピデータ
├── types/          # TypeScript型定義
└── utils/          # ユーティリティ関数
```

## ライセンス

Private project
