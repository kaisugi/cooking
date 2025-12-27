import type { Recipe } from '../types/recipe';

// 自炊記録データ
export const recipes: Recipe[] = [
    {
        name: '鮭のキムチちゃんちゃん焼き',
        url: 'https://delishkitchen.tv/recipes/297532154596820087',
        ingredients: ['生鮭', 'もやし', 'キャベツ', 'にんじん', 'キムチ', 'にんにく'],
        category: '焼き物',
    },
    {
        name: 'たっぷり野菜のミネストローネ',
        url: 'https://park.ajinomoto.co.jp/recipe/card/701794/',
        ingredients: ['じゃがいも', 'にんじん', '玉ねぎ', 'キャベツ', 'にんにく', 'ホールトマト缶'],
        category: 'スープ',
    },
    {
        name: '鶏肉と野菜の具だくさんおかずスープ',
        url: 'https://park.ajinomoto.co.jp/recipe/card/801743/',
        ingredients: ['鶏もも肉', 'キャベツ', 'ほうれん草', 'しめじ'],
        category: 'スープ',
    },
    {
        name: 'きのことほうれん草のミルクスープ野菜',
        url: 'https://park.ajinomoto.co.jp/recipe/card/710464/',
        ingredients: ['しめじ', 'ほうれん草', 'ベーコン', '牛乳'],
        category: 'スープ',
    },
    {
        name: '豚とキャベツの味噌煮込みうどん',
        url: 'https://www.kurashiru.com/recipes/2d84b7cb-ce30-4c0d-bd33-b1934f50a914',
        ingredients: ['うどん', '豚ロース', 'キャベツ', '長ねぎ', 'にんにく'],
        category: 'うどん',
    },
    {
        name: '豚肉と小松菜の簡単煮込みうどん',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00005877/',
        ingredients: ['うどん', '豚肉', '玉ねぎ', '小松菜', '卵'],
        category: 'うどん',
    },
    {
        name: '納豆と小松菜の和風パスタ',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00051953/',
        ingredients: ['スパゲッティ', '小松菜', '納豆', 'レモン', 'のり'],
        category: 'パスタ',
    },
    {
        name: 'すき焼きうどん',
        url: 'https://delishkitchen.tv/recipes/370947955068241042',
        ingredients: ['うどん', '牛肉', '卵', 'しいたけ', '春菊', '長ねぎ'],
        category: 'うどん',
    },
    {
        name: 'たらのみぞれ煮',
        url: 'https://delishkitchen.tv/recipes/218796425465561371',
        ingredients: ['タラ', '大根', '細ねぎ'],
        category: '煮物',
    },
    {
        name: 'えびと卵のオーロラ炒め',
        url: 'https://delishkitchen.tv/recipes/215714405805982038',
        ingredients: ['むきえび', '卵'],
        category: '炒め物',
    },
    {
        name: 'えびとアボカドのクリームパスタ',
        url: 'https://delishkitchen.tv/recipes/172670688363020691',
        ingredients: ['スパゲッティ', 'むきえび', 'アボカド', '牛乳'],
        category: 'パスタ',
    },
    {
        name: 'にんじんと白菜の卵炒め',
        url: 'https://delishkitchen.tv/recipes/226429303569514765',
        ingredients: ['卵', 'にんじん', '白菜', 'かつお節', '細ねぎ'],
        category: '炒め物',
    },
    {
        name: 'にんじんとしめじの中華卵スープ',
        url: 'https://delishkitchen.tv/recipes/366627073969620031',
        ingredients: ['卵', 'にんじん', 'しめじ'],
        category: 'スープ',
    },
    {
        name: '野菜たっぷり味噌煮込みうどん',
        url: 'https://recipe-navi.jp/recipes/43266',
        ingredients: [
            '豚バラ肉',
            '大根',
            'にんじん',
            '白菜',
            'しめじ',
            '長ねぎ',
            'うどん',
            '温泉卵',
        ],
        category: 'うどん',
    },
    {
        name: 'キャベツと玉ねぎの中華卵スープ',
        url: 'https://delishkitchen.tv/recipes/366775745604747528',
        ingredients: ['卵', 'キャベツ', '玉ねぎ'],
        category: 'スープ',
    },
    {
        name: 'アボカドとじゃがいものガーリックチーズ焼き',
        url: 'https://park.ajinomoto.co.jp/recipe/card/709401/',
        ingredients: ['アボカド', 'じゃがいも', 'ベーコン', 'にんにく', 'ピザ用チーズ'],
        category: '焼き物',
    },
    {
        name: '甘酢ねぎだれの納豆チーズ焼き',
        url: 'https://delishkitchen.tv/recipes/159611893365866988',
        ingredients: ['納豆', 'ピザ用チーズ', '細ねぎ'],
        category: '焼き物',
    },
    {
        name: '卵みそそぼろ',
        url: 'https://delishkitchen.tv/recipes/172002586738557420',
        ingredients: ['卵'],
        category: '副菜',
    },
    {
        name: 'じゃがいもとにんじんのベーコン炒め',
        url: 'https://www.kyounoryouri.jp/recipe/4186_%E3%81%98%E3%82%83%E3%81%8C%E3%81%84%E3%82%82%E3%81%A8%E3%81%AB%E3%82%93%E3%81%98%E3%82%93%E3%81%AE%E3%83%99%E3%83%BC%E3%82%B3%E3%83%B3%E7%82%92%E3%82%81.html',
        ingredients: ['じゃがいも', 'にんじん', 'ベーコン', '玉ねぎ'],
        category: '炒め物',
    },
    {
        name: 'お手軽ジャーマンポテト',
        url: 'https://delishkitchen.tv/recipes/487319397262688679',
        ingredients: ['じゃがいも', '玉ねぎ', 'にんにく'],
        category: '副菜',
    },
    {
        name: 'ソーセージとなすのトマトパスタ',
        url: 'https://delishkitchen.tv/recipes/360525710202241437',
        ingredients: ['スパゲッティ', 'ソーセージ', 'なす', '玉ねぎ', 'にんにく', 'カットトマト缶'],
        category: 'パスタ',
    },
    {
        name: 'チーズリゾット',
        url: 'https://delishkitchen.tv/recipes/117897536852721988',
        ingredients: ['ごはん', 'ベーコン', '玉ねぎ', 'しめじ', 'にんにく', 'ピザ用チーズ'],
        category: 'リゾット',
    },
    {
        name: '豚肉と玉ねぎのチーズケチャップ炒め',
        url: 'https://www.kurashiru.com/recipes/e7cea7bd-9c12-4107-a9bf-95d3a41d769a',
        ingredients: ['豚こま切れ肉', '玉ねぎ', 'ピザ用チーズ', 'レタス'],
        category: '炒め物',
    },
    {
        name: '白身魚のにらたま焼き',
        url: 'https://cookpad.com/jp/recipes/20066248',
        ingredients: ['白身魚', '卵', 'にら'],
        category: '焼き物',
    },
    {
        name: '豚しゃぶサラダうどん',
        url: 'https://recipe.rakuten.co.jp/recipe/1080044402/',
        ingredients: ['豚ロース', 'レタス', 'きゅうり', 'トマト', '温泉卵', 'うどん'],
        category: 'サラダ',
    },
    {
        name: 'もやしとベーコンのとんぺい焼き風',
        url: 'https://saruwakakun.com/life/recipe/tonpei-2',
        ingredients: ['卵', 'もやし', 'ベーコン'],
        category: '焼き物',
    },
    {
        name: 'レンジでかんたん♪ 玉ねぎのめんつゆナムル',
        url: 'https://delishkitchen.tv/recipes/307512022193407039',
        ingredients: ['玉ねぎ'],
        category: '副菜',
    },
    {
        name: 'レンジでやみつき！かんたん無限きのこ',
        url: 'https://delishkitchen.tv/recipes/118861594473005380',
        ingredients: ['ツナ缶', 'しめじ', 'まいたけ', 'エリンギ'],
        category: '副菜',
    },
    {
        name: '鶏むね肉ときのこのソテー',
        url: 'https://www.kewpie.co.jp/recipes/recipe/QP10005887/',
        ingredients: ['鶏むね肉', 'しめじ', 'えのきだけ', '玉ねぎ', '細ねぎ'],
        category: '焼き物',
    },
    {
        name: '納豆としらすの冷やしうどん',
        url: 'https://delishkitchen.tv/recipes/139064440132731379',
        ingredients: ['うどん', '温泉卵', '納豆', 'しらす', 'かつお節', '細ねぎ'],
        category: 'うどん',
    },
    {
        name: '牡蠣と長ねぎの炙りすき焼き',
        url: 'https://www.asahibeer.co.jp/enjoy/recipe/sp/recipe.psp.html?CODE=0000002509',
        ingredients: ['牡蠣', '長ねぎ', '卵'],
        category: '焼き物',
    },
    {
        name: '小松菜としいたけの中華うま煮',
        url: 'https://daidokolog.pal-system.co.jp/recipe/908',
        ingredients: ['小松菜', 'しいたけ', 'にんにく'],
        category: '煮物',
    },
    {
        name: 'さわらと小松菜の煮物',
        url: 'https://delishkitchen.tv/recipes/173833078513336723',
        ingredients: ['さわら', '小松菜', 'にんじん', 'しょうが'],
        category: '煮物',
    },
    {
        name: 'ふんわり卵の親子丼風おかず鍋',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00051587/',
        ingredients: ['白菜', 'しめじ', '鶏もも肉', '卵'],
        category: '煮物',
    },
];

/**
 * すべてのユニークな食材を取得する
 */
export function getAllIngredients(recipeList: Recipe[]): string[] {
    const ingredients = new Set<string>();
    recipeList.forEach((recipe) => {
        recipe.ingredients.forEach((ing) => ingredients.add(ing));
    });
    return Array.from(ingredients).sort();
}

/**
 * レシピ数を取得する
 */
export function getRecipeCount(recipeList: Recipe[]): number {
    return recipeList.length;
}
