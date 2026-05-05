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
        name: '鶏肉と長ネギの簡単すき煮',
        url: 'https://www.asahibeer.co.jp/enjoy/recipe/sp/recipe.psp.html?CODE=0000002509',
        ingredients: ['鶏肉', '長ねぎ', '卵'],
        category: '煮物',
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
        name: '鮭とむき海老のグラタン鍋',
        url: 'https://oceans-nadia.com/user/45109/recipe/403747',
        ingredients: [
            '生鮭',
            'むきえび',
            '玉ねぎ',
            'ほうれん草',
            'マカロニ',
            'ピザ用チーズ',
            '牛乳',
        ],
        category: '鍋',
    },
    {
        name: 'ほうれん草と卵の中華スープ',
        url: 'https://delishkitchen.tv/recipes/188187756797625425',
        ingredients: ['ほうれん草', '卵', '長ねぎ'],
        category: 'スープ',
    },
    {
        name: 'ブロッコリーの卵マヨサラダ',
        url: 'https://www.kurashiru.com/recipes/4200e4af-3ed4-48b6-bf01-19e46f16468a',
        ingredients: ['ブロッコリー', '卵'],
        category: 'サラダ',
    },
    {
        name: 'ブロッコリーとベーコンの豆乳スープ',
        url: 'https://delishkitchen.tv/recipes/232960072244790378',
        ingredients: ['ブロッコリー', 'ベーコン', '玉ねぎ', 'にんにく', '豆乳'],
        category: 'スープ',
    },
    {
        name: 'たらの寄せ鍋',
        url: 'https://delishkitchen.tv/recipes/421427524896031048',
        ingredients: ['タラ', '木綿豆腐', '白菜', '長ねぎ', 'にんじん', 'しいたけ'],
        category: '鍋',
    },
    {
        name: '本つゆ寄せ鍋',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00050371/',
        ingredients: ['豚バラ肉', '絹ごし豆腐', '白菜', '長ねぎ', 'にんじん', '水菜', 'しいたけ'],
        category: '鍋',
    },
    {
        name: 'じゃがいも、小松菜、油揚げのみそ汁',
        url: 'https://www.yamaki.co.jp/recipe/%E3%81%98%E3%82%83%E3%81%8C%E3%81%84%E3%82%82%E3%80%81%E5%B0%8F%E6%9D%BE%E8%8F%9C%E3%80%81%E6%B2%B9%E6%8F%9A%E3%81%92%E3%81%AE%E3%81%BF%E3%81%9D%E6%B1%81',
        ingredients: ['じゃがいも', '小松菜', '油揚げ', '玉ねぎ'],
        category: 'スープ',
    },
    {
        name: '鶏肉とたっぷりしめじの中華スープ',
        url: 'https://park.ajinomoto.co.jp/recipe/card/710132/',
        ingredients: ['鶏むね肉', 'しめじ', '大根', '卵', '細ねぎ'],
        category: 'スープ',
    },
    {
        name: 'サバ缶で時短卵とじ',
        url: 'https://www.kurashiru.com/recipes/a4cc3b86-5146-4134-8cbd-57a34cc3d79b',
        ingredients: ['サバ缶', 'しめじ', '玉ねぎ', '卵', 'バター', '細ねぎ'],
        category: '煮物',
    },
    {
        name: '白菜と卵の味噌汁',
        url: 'https://delishkitchen.tv/recipes/373004378077922379',
        ingredients: ['白菜', '卵'],
        category: 'スープ',
    },
    {
        name: 'ニラ玉豆腐',
        url: 'https://delishkitchen.tv/recipes/147145465693995482',
        ingredients: ['豆腐', '豚バラ肉', 'にら', '卵'],
        category: '煮物',
    },
    {
        name: '白菜のミネストローネ',
        url: 'https://delishkitchen.tv/recipes/156283894755230099',
        ingredients: ['白菜', 'じゃがいも', 'にんじん', '玉ねぎ', 'ベーコン'],
        category: 'スープ',
    },
    {
        name: '石狩鍋',
        url: 'https://delishkitchen.tv/recipes/322253018877658349',
        ingredients: [
            '生鮭',
            'キャベツ',
            '春菊',
            '玉ねぎ',
            'しいたけ',
            '木綿豆腐',
            'しらたき',
            'バター',
        ],
        category: '鍋',
    },
    {
        name: '春菊とたまごのコンソメスープ',
        url: 'https://macaro-ni.jp/104912',
        ingredients: ['春菊', '玉ねぎ', '卵'],
        category: 'スープ',
    },
    {
        name: '基本のチャーハン',
        url: 'https://oceans-nadia.com/user/253470/recipe/440737',
        ingredients: ['ごはん', '豚バラ肉', '長ねぎ', '卵', 'しょうが'],
        category: '炒め物',
    },
    {
        name: '春菊とえのき茸の豚肉巻き',
        url: 'https://daidokolog.pal-system.co.jp/recipe/8358',
        ingredients: ['豚ロース', '春菊', 'えのきだけ'],
        category: '焼き物',
    },
    {
        name: 'たらと春菊の小鍋立て',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00003426/',
        ingredients: ['タラ', '豆腐', '春菊', 'えのきだけ', '昆布'],
        category: '鍋',
    },
    {
        name: 'ふんわり卵の親子丼風おかず鍋',
        url: 'https://www.kikkoman.co.jp/homecook/search/recipe/00051587/',
        ingredients: ['白菜', 'しめじ', '鶏もも肉', '卵'],
        category: '煮物',
    },
    {
        name: '白身魚と野菜の中華風甘酢あん',
        url: 'https://oceans-nadia.com/user/484627/recipe/437571',
        ingredients: ['タラ', 'なす', 'にんじん', 'ピーマン'],
        category: '炒め物',
    },
    {
        name: '丸ごとピーマンの照りたま炒め',
        url: 'https://delishkitchen.tv/recipes/237893521191731585',
        ingredients: ['鶏もも肉', '卵', 'ピーマン'],
        category: '炒め物',
    },
    {
        name: 'バター醤油香る和風きのこスパゲッティ',
        url: 'https://park.ajinomoto.co.jp/recipe/card/708321/',
        ingredients: ['スパゲッティ', 'しめじ', 'ベーコン', '細ねぎ', 'のり'],
        category: 'パスタ',
    },
    {
        name: 'ささっと作れる！鮭の甘辛卵とじ丼',
        url: 'https://delishkitchen.tv/recipes/162383095436149228',
        ingredients: ['ごはん', '生鮭', '卵', '玉ねぎ', 'しいたけ', '細ねぎ'],
        category: '丼',
    },
    {
        name: 'マヨネーズでコクうま♪ベーコンと玉ねぎのマヨたま炒め',
        url: 'https://delishkitchen.tv/recipes/235912727472636201',
        ingredients: ['ベーコン', '卵', '玉ねぎ', 'ブロッコリー'],
        category: '炒め物',
    },
    {
        name: '簡単 鶏塩のたまごうどん',
        url: 'https://www.kurashiru.com/recipes/1a71c77f-092d-4e8c-ada7-5466c81456fb',
        ingredients: ['うどん', '鶏もも肉', '卵', 'かつお節'],
        category: 'うどん',
    },
    {
        name: 'とろーり優しい！かきたまあんかけうどん',
        url: 'https://delishkitchen.tv/recipes/183095988561379732',
        ingredients: ['うどん', '卵', '細ねぎ', 'しょうが'],
        category: 'うどん',
    },
    {
        name: 'ご飯が進む！豚バラニラ玉炒め',
        url: 'https://delishkitchen.tv/recipes/384418485242954080',
        ingredients: ['豚バラ肉', '卵', 'にら'],
        category: '炒め物',
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
