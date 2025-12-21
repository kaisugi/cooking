# 俺の自炊 - プロジェクトドキュメント

## 概要
杉本の自炊記録サイト。料理レシピを食材でフィルタリングして管理できる静的Webサイト。

## 技術スタック
- Astro 4.0（静的サイトジェネレーター）
- TypeScript（型安全性）
- Preact（軽量UIライブラリ 3KB）
- Tailwind CSS（ユーティリティファーストCSS）
- GitHub Pages対応（GitHub Actions自動デプロイ）

## ファイル構成
```
cooking/
├── src/
│   ├── components/
│   │   ├── Header.astro         # 静的ヘッダー
│   │   ├── Stats.astro          # 統計表示
│   │   ├── FilterPanel.tsx      # 食材フィルター（Preact）
│   │   ├── RecipeGrid.tsx       # レシピ表示（Preact）
│   │   └── MainApp.tsx          # メインアプリ（Preact）
│   ├── layouts/
│   │   └── Layout.astro         # ベースレイアウト
│   ├── pages/
│   │   └── index.astro          # トップページ
│   ├── data/
│   │   └── recipes.ts           # レシピデータ（TypeScript）
│   ├── types/
│   │   └── recipe.ts            # 型定義
│   └── utils/
│       └── shuffle.ts           # シャッフル関数
├── public/
│   └── ogp-image.png            # OGP画像
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions設定
├── astro.config.mjs             # Astro設定
├── tailwind.config.mjs          # Tailwind設定
├── tsconfig.json                # TypeScript設定
├── package.json                 # 依存関係
└── CLAUDE.md                    # このファイル
```

## データ構造

### src/data/recipes.ts の形式
```typescript
import type { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    "name": "料理名",
    "url": "レシピのURL",
    "ingredients": ["食材1", "食材2", "食材3"],
    "category": "カテゴリ"  // うどん、パスタ、スープ、炒め物、焼き物、煮物、副菜、リゾット、サラダなど
  }
];
```

### 型定義（src/types/recipe.ts）
```typescript
export interface Recipe {
  name: string;
  url: string;
  ingredients: string[];
  category: string;
}
```

### 重要な規則
1. **日付は管理しない** - `date`フィールドは不要
2. **調味料は含めない** - 以下のような調味料は`ingredients`から除外する
   - 塩、こしょう、砂糖
   - 醤油、みそ、みりん、酒
   - サラダ油、オリーブオイル、ごま油
   - 酢、料理酒、だし、コンソメ
   - 水、片栗粉、薄力粉、小麦粉
   - パセリなどの飾り用ハーブ
3. **主要食材のみ記録** - 肉、魚、野菜、きのこ、加工食品（キムチ、缶詰など）
4. **表記統一** - 食材名の表記揺れを避ける
   - 例: スパゲッティ（○）/ スパゲティ（×）
   - 例: 細ねぎ（○）/ 小ねぎ（×）

## デザイン

### カラースキーム
- **ベース**: 明るい背景（白〜ライトグレー）
- **アクセント**: 青系（`#2563eb`）
- **アクティブ**: 緑系（`#22c55e`）
- **テキスト**: ダークグレー（`#2c3e50`, `#1e293b`）

### デザインコンセプト
- kaisugi.me のデザインテイストを踏襲
- 外出先（スーパーなど）での使用を想定した明るく見やすいデザイン
- スマホ対応（タップしやすいボタンサイズ：最小44px）
- スタイリッシュなアニメーション効果

### リンクスタイル
- 通常時: テキストと同色
- ホバー時: 青色に変化し、左から右へアニメーションする下線が表示

## 機能

### ランダム表示
- ページ読み込み時や食材フィルター変更時に、料理の表示順をランダムにシャッフル
- 毎回違う順番で表示されることで、飽きずに料理を探せる

### 食材フィルター
- 食材タグをクリックして絞り込み
- 複数選択可能（AND条件：すべての食材を含む料理を表示）
- アクティブなタグは緑色で表示

### カテゴリ表示
- 各レシピにカテゴリラベルを表示（料理名の右横）
- カテゴリ例: うどん、パスタ、スープ、炒め物、焼き物、煮物、副菜、リゾット、サラダ
- 透明な背景の控えめなデザインで、主張しすぎない表示

### 統計表示
- 登録料理数
- 使用食材の種類数

## データ追加方法

### 1. URLからレシピを追加する場合
1. WebFetchツールでレシピURLから料理名と食材を取得
2. 調味料を除外して主要食材のみ抽出
3. WebFetchツールでレシピURLからカテゴリを推定
   - プロンプト例: 「このレシピのカテゴリを1つ判定してください。『うどん』『パスタ』『スープ』『炒め物』『焼き物』『煮物』『副菜』『リゾット』『サラダ』などから最も適切なものを1つ選んでください。」
4. `src/data/recipes.ts`の`recipes`配列に追加

### 2. 手動で追加する場合
```typescript
// src/data/recipes.tsのrecipes配列に以下の形式で追加
{
  "name": "料理名",
  "url": "https://example.com/recipe",  // リンクがない場合は ""
  "ingredients": ["食材1", "食材2", "食材3"],  // 調味料を除く
  "category": "カテゴリ"  // うどん、パスタ、スープ、炒め物、焼き物、煮物、副菜、リゾット、サラダなど
}
```

## 開発環境のセットアップ

```bash
# 依存関係のインストール
yarn install

# 開発サーバーの起動（http://localhost:4321/cooking）
yarn dev

# プロダクションビルド
yarn build

# ビルドのプレビュー
yarn preview
```

## GitHub Pages へのデプロイ

GitHub Actionsによる自動デプロイが設定されています。

```bash
# レシピ更新時
git add src/data/recipes.ts
git commit -m "Add new recipes"
git push

# または全体をコミット
git add .
git commit -m "Update recipes and components"
git push
```

mainブランチにpushすると、GitHub Actionsが自動的にビルド・デプロイを実行します。
`https://kaisugi.github.io/cooking/`でアクセス可能。

### GitHub Pagesの設定（初回のみ）
リポジトリのSettings > Pages > Source で「GitHub Actions」を選択。

## 今後の拡張案
- カテゴリでのフィルタリング機能
- お気に入り機能
- レシピメモ機能
- 買い物リスト生成
