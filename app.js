const hiragana = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'
};

const katakana = {
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
    'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
    'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
    'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
    'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
    'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
    'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
    'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
    'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
    'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
    'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
    'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo'
};

const lessons = [
    {
        id: 'n5-1',
        name: '自我介绍 (N5)',
        type: 'word',
        words: ['w1', 'w2', 'w3', 'w4', 'w5'],
        sentences: [
            {
                jp: '私は学生です。',
                cn: '我是学生。',
                segments: [
                    { text: '私', kana: 'わたし', romaji: 'watashi', cn: '我' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助词)' },
                    { text: '学生', kana: 'がくせい', romaji: 'gakusei', cn: '学生' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: '田中さんは先生です。',
                cn: '田中先生是老师。',
                segments: [
                    { text: '田中', kana: 'たなか', romaji: 'tanaka', cn: '田中' },
                    { text: 'さん', kana: 'さん', romaji: 'san', cn: '先生/女士' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助词)' },
                    { text: '先生', kana: 'せんせい', romaji: 'sensei', cn: '老师' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: '私は日本人です。',
                cn: '我是日本人。',
                segments: [
                    { text: '私', kana: 'わたし', romaji: 'watashi', cn: '我' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助词)' },
                    { text: '日本人', kana: 'にほんじん', romaji: 'nihonjin', cn: '日本人' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    {
        id: 'n5-2',
        name: '日常问候 (N5)',
        type: 'word',
        words: ['w6', 'w7', 'w8', 'w9', 'w10'],
        sentences: []
    },
    {
        id: 'hiragana-all',
        name: '平假名全集',
        type: 'kana-all',
        kanaType: 'hiragana',
        icon: 'あ',
        chapters: [
            { name: '清音', start: 0, end: 46 },
            { name: '浊音 & 半浊音', start: 46, end: 71 },
            { name: '拗音', start: 71, end: 104 }
        ]
    },
    {
        id: 'katakana-all',
        name: '片假名全集',
        type: 'kana-all',
        kanaType: 'katakana',
        icon: 'ア',
        chapters: [
            { name: '清音', start: 0, end: 46 },
            { name: '浊音 & 半浊音', start: 46, end: 71 },
            { name: '拗音', start: 71, end: 104 }
        ]
    },
    // 场景课程：购物
    {
        id: 'scene-shopping-1',
        name: '便利店购物',
        type: 'word',
        icon: '🏪',
        words: ['shopping_1', 'shopping_2', 'shopping_3', 'shopping_4', 'shopping_5'],
        sentences: [
            {
                jp: 'いくらですか。',
                cn: '多少钱？',
                segments: [
                    { text: 'いくら', kana: 'いくら', romaji: 'ikura', cn: '多少钱' },
                    { text: 'ですか', kana: 'ですか', romaji: 'desuka', cn: '是...吗' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: 'これをください。',
                cn: '请给我这个。',
                segments: [
                    { text: 'これ', kana: 'これ', romaji: 'kore', cn: '这个' },
                    { text: 'を', kana: 'を', romaji: 'wo', cn: '(助词)' },
                    { text: 'ください', kana: 'ください', romaji: 'kudasai', cn: '请给我/拜托了' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 场景课程：餐厅
    {
        id: 'scene-food-1',
        name: '餐厅点餐',
        type: 'word',
        icon: '🍜',
        words: ['food_1', 'food_2', 'food_3', 'food_4', 'food_5'],
        sentences: [
            {
                jp: '水をください。',
                cn: '请给我水。',
                segments: [
                    { text: '水', kana: 'みず', romaji: 'mizu', cn: '水' },
                    { text: 'を', kana: 'を', romaji: 'wo', cn: '(助词)' },
                    { text: 'ください', kana: 'ください', romaji: 'kudasai', cn: '请给我' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: 'メニューをお願いします。',
                cn: '请给我菜单。',
                segments: [
                    { text: 'メニュー', kana: 'メニュー', romaji: 'menyu-', cn: '菜单' },
                    { text: 'を', kana: 'を', romaji: 'wo', cn: '(助词)' },
                    { text: 'お願いします', kana: 'おねがいします', romaji: 'onegaishimasu', cn: '拜托了' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 场景课程：时间表达
    {
        id: 'scene-time-1',
        name: '时间与日期',
        type: 'word',
        icon: '🕐',
        words: ['time_1', 'time_2', 'time_morning', 'time_noon', 'time_night'],
        sentences: [
            {
                jp: '今、何時ですか。',
                cn: '现在几点了？',
                segments: [
                    { text: '今', kana: 'いま', romaji: 'ima', cn: '现在' },
                    { text: '、', kana: '、', romaji: '', cn: '' },
                    { text: '何時', kana: 'なんじ', romaji: 'nanji', cn: '几点' },
                    { text: 'ですか', kana: 'ですか', romaji: 'desuka', cn: '是...吗' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: '今は三時です。',
                cn: '现在是三点。',
                segments: [
                    { text: '今', kana: 'いま', romaji: 'ima', cn: '现在' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助)' },
                    { text: '三時', kana: 'sanji', romaji: 'sanji', cn: '三点' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 场景课程：旅行问路
    {
        id: 'scene-travel-1',
        name: '旅行问路',
        type: 'word',
        icon: '🗾',
        words: ['travel_1', 'travel_2', 'travel_3', 'travel_4', 'travel_5'],
        sentences: [
            {
                jp: '駅はどこですか。',
                cn: '车站在哪里？',
                segments: [
                    { text: '駅', kana: 'えき', romaji: 'eki', cn: '车站' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助词)' },
                    { text: 'どこ', kana: 'どこ', romaji: 'doko', cn: '哪里' },
                    { text: 'ですか', kana: 'ですか', romaji: 'desuka', cn: '是...吗' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 新增课程：数字进阶
    // 场景课程：数字全集 (1-10)
    {
        id: 'scene-numbers-full',
        name: '数字基础 (1-10)',
        type: 'word',
        icon: '🔢',
        words: ['num_1', 'num_2', 'num_3', 'num_4', 'num_5', 'num_6', 'num_7', 'num_8', 'num_9', 'num_10'],
        sentences: [
            {
                jp: '一、二、三。',
                cn: '一、二、三。',
                segments: [
                    { text: '一', kana: 'いち', romaji: 'ichi', cn: '一' },
                    { text: '二', kana: 'に', romaji: 'ni', cn: '二' },
                    { text: '三', kana: 'さん', romaji: 'san', cn: '三' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            },
            {
                jp: '八、九、十。',
                cn: '八、九、十。',
                segments: [
                    { text: '八', kana: 'はち', romaji: 'hachi', cn: '八' },
                    { text: '九', kana: 'きゅう', romaji: 'kyuu', cn: '九' },
                    { text: '十', kana: 'じゅう', romaji: 'juu', cn: '十' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 场景课程：大数字
    {
        id: 'scene-numbers-big',
        name: '数字进阶 (百千万)',
        type: 'word',
        icon: '💰',
        words: ['num_100', 'num_1000', 'num_10000'],
        sentences: [
            {
                jp: 'これは百円です。',
                cn: '这是一百日元。',
                segments: [
                    { text: 'これ', kana: 'これ', romaji: 'kore', cn: '这个' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助)' },
                    { text: '百', kana: 'ひゃく', romaji: 'hyaku', cn: '百' },
                    { text: '円', kana: 'えん', romaji: 'en', cn: '日元' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    },
    // 新增课程：时间表达
    {
        id: 'n5-4',
        name: '时间与日期 (N5)',
        type: 'word',
        icon: '📅',
        words: ['time_morning', 'time_noon', 'time_night', 'time_today', 'time_tomorrow', 'time_yesterday'],
        sentences: [
            {
                jp: '今日は土曜日です。',
                cn: '今天是星期六。',
                segments: [
                    { text: '今日', kana: 'きょう', romaji: 'kyou', cn: '今天' },
                    { text: 'は', kana: 'は', romaji: 'wa', cn: '(助)' },
                    { text: '土曜日', kana: 'どようび', romaji: 'doyoubi', cn: '星期六' },
                    { text: 'です', kana: 'です', romaji: 'desu', cn: '是' },
                    { text: '。', kana: '。', romaji: '', cn: '' }
                ]
            }
        ]
    }
];

const wordsData = {
    'w1': { jp: '私', kana: 'わたし', romaji: 'watashi', cn: '我' },
    'w2': { jp: '学生', kana: 'がくせい', romaji: 'gakusei', cn: '学生' },
    'w3': { jp: '先生', kana: 'せんせい', romaji: 'sensei', cn: '老师' },
    'w4': { jp: '会社員', kana: 'かいしゃいん', romaji: 'kaishain', cn: '公司职员' },
    'w5': { jp: '日本人', kana: 'にほんじん', romaji: 'nihonjin', cn: '日本人' },
    'w6': { jp: 'おはよう', kana: 'おはよう', romaji: 'ohayou', cn: '早安' },
    'w7': { jp: 'こんにちは', kana: 'こんにちは', romaji: 'konnichiwa', cn: '你好' },
    'w8': { jp: 'こんばんは', kana: 'こんばんは', romaji: 'konbanwa', cn: '晚上好' },
    'w9': { jp: 'さようなら', kana: 'さようなら', romaji: 'sayounara', cn: '再见' },
    'w10': { jp: 'ありがとう', kana: 'ありがとう', romaji: 'arigatou', cn: '谢谢' },

    // Shopping
    'shopping_1': { jp: 'いくら', kana: 'いくら', romaji: 'ikura', cn: '多少钱' },
    'shopping_2': { jp: 'これ', kana: 'これ', romaji: 'kore', cn: '这个' },
    'shopping_3': { jp: 'それ', kana: 'それ', romaji: 'sore', cn: '那个' },
    'shopping_4': { jp: '高い', kana: 'たかい', romaji: 'takai', cn: '贵/高' },
    'shopping_5': { jp: '安い', kana: 'やすい', romaji: 'yasui', cn: '便宜' },

    // Food
    'food_1': { jp: '水', kana: 'みず', romaji: 'mizu', cn: '水' },
    'food_2': { jp: 'メニュー', kana: 'メニュー', romaji: 'menyu-', cn: '菜单' },
    'food_3': { jp: '美味しい', kana: 'おいしい', romaji: 'oishii', cn: '好吃' },
    'food_4': { jp: '注文', kana: 'ちゅうもん', romaji: 'chuumon', cn: '点餐' },
    'food_5': { jp: 'ご飯', kana: 'ごはん', romaji: 'gohan', cn: '米饭/饭' },

    // Numbers & Time
    'num_1': { jp: '一', kana: 'いち', romaji: 'ichi', cn: '一' },
    'num_2': { jp: '二', kana: 'に', romaji: 'ni', cn: '二' },
    'num_3': { jp: '三', kana: 'さん', romaji: 'san', cn: '三' },
    'time_1': { jp: '何時', kana: 'なんじ', romaji: 'nanji', cn: '几点' },
    'time_2': { jp: '今', kana: 'いま', romaji: 'ima', cn: '现在' },

    // Travel
    'travel_1': { jp: '駅', kana: 'えき', romaji: 'eki', cn: '车站' },
    'travel_2': { jp: 'トイレ', kana: 'といれ', romaji: 'toire', cn: '厕所' },
    'travel_3': { jp: 'どこ', kana: 'どこ', romaji: 'doko', cn: '哪里' },
    'travel_4': { jp: 'ホテル', kana: 'ほてる', romaji: 'hoteru', cn: '酒店' },
    'travel_5': { jp: 'バス', kana: 'ばす', romaji: 'basu', cn: '巴士' },

    // Numbers Extended
    'num_4': { jp: '四', kana: 'よん', romaji: 'yon', cn: '四' },
    'num_5': { jp: '五', kana: 'ご', romaji: 'go', cn: '五' },
    'num_6': { jp: '六', kana: 'ろく', romaji: 'roku', cn: '六' },
    'num_7': { jp: '七', kana: 'なな', romaji: 'nana', cn: '七' },
    'num_8': { jp: '八', kana: 'はち', romaji: 'hachi', cn: '八' },
    'num_9': { jp: '九', kana: 'きゅう', romaji: 'kyuu', cn: '九' },
    'num_10': { jp: '十', kana: 'じゅう', romaji: 'juu', cn: '十' },
    'num_100': { jp: '百', kana: 'ひゃく', romaji: 'hyaku', cn: '百' },
    'num_1000': { jp: '千', kana: 'せん', romaji: 'sen', cn: '千' },
    'num_10000': { jp: '万', kana: 'まん', romaji: 'man', cn: '万' },

    // Time Extended
    'time_morning': { jp: '朝', kana: 'あさ', romaji: 'asa', cn: '早上' },
    'time_noon': { jp: '昼', kana: 'ひる', romaji: 'hiru', cn: '中午' },
    'time_night': { jp: '夜', kana: 'よる', romaji: 'yoru', cn: '晚上' },
    'time_today': { jp: '今日', kana: 'きょう', romaji: 'kyou', cn: '今天' },
    'time_tomorrow': { jp: '明日', kana: 'あした', romaji: 'ashita', cn: '明天' },
    'time_yesterday': { jp: '昨日', kana: 'きのう', romaji: 'kinou', cn: '昨天' },
    'time_3oclock': { jp: '三時', kana: 'さんじ', romaji: 'sanji', cn: '三点' }
};

const soundManager = {
    ctx: null,
    init() {
        if (!this.ctx) {
            try {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) { console.warn('AudioContext init failed', e); }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume().catch(e => console.warn('AudioContext resume failed', e));
        }
    },
    playTone(freq, duration, type = 'sine', volume = 0.1) {
        this.init();
        if (!this.ctx) return;

        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(volume, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) { console.warn('Audio play failed', e); }
    },
    click() { this.playTone(800, 0.1, 'sine', 0.05); },
    correct() {
        this.playTone(600, 0.1);
        setTimeout(() => this.playTone(1200, 0.2), 100);
    },
    incorrect() {
        this.playTone(300, 0.1, 'square');
        setTimeout(() => this.playTone(200, 0.3, 'square'), 100);
    },
    levelUp() {
        this.playTone(500, 0.2);
        this.playTone(700, 0.2);
        this.playTone(900, 0.5);
    }
};

// Audio & TTS Management (Using Youdao Online API for natural voice)
const ttsManager = {
    speak(text, rate = 0.9, lang = 'ja-JP') {
        if (!text) return;
        const cleanText = text.replace(/\s+/g, '');
        const speechLang = (lang === 'ja' || lang === 'ja-JP') ? 'ja-JP' : 'zh-CN';

        // Helper to try multiple sources
        const sources = [
            `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&le=jap&type=2`,
            `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&le=jap&type=1`,
            `https://fanyi.baidu.com/getvoice?lan=${speechLang === 'ja-JP' ? 'jp' : 'zh'}&text=${encodeURIComponent(cleanText)}`
        ];

        let sourceIndex = 0;
        const tryNextSource = () => {
            if (sourceIndex >= sources.length) {
                console.warn('All online TTS sources failed. Using fallback.');
                this.fallbackSpeak(cleanText, rate, speechLang);
                return;
            }

            if (window._activeAudio) {
                window._activeAudio.pause();
                window._activeAudio.onended = null;
                window._activeAudio.onerror = null;
            }

            const audio = new Audio();
            window._activeAudio = audio;
            audio.src = sources[sourceIndex++];

            const playPromise = audio.play();
            if (playPromise) {
                playPromise.catch(() => tryNextSource());
            }
            audio.onerror = () => tryNextSource();

            // Safety timeout for slow response
            setTimeout(() => {
                if (audio.paused && !audio.ended && window._activeAudio === audio) {
                    tryNextSource();
                }
            }, 1500);
        };

        tryNextSource();
    },

    fallbackSpeak(text, rate, lang) {
        if (!window.speechSynthesis) return;

        const doSpeak = () => {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = rate;
            const voices = window.speechSynthesis.getVoices();
            const jaVoice = voices.find(v => v.lang.startsWith('ja')) || voices.find(v => v.lang.includes('JP'));
            if (jaVoice) utterance.voice = jaVoice;
            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = doSpeak;
            // Force a call just in case it doesn't fire
            setTimeout(doSpeak, 100);
        } else {
            doSpeak();
        }
    }
};
// Removed ttsManager.init() as it is no longer needed

let state = {
    user: { xp: 0, level: 1, hearts: 5, streak: 0, lessonsCompleted: [] },
    currentPath: 'dashboard',
    history: ['dashboard'],
    practice: { active: false, questions: [], currentIndex: 0, correctCount: 0, selectedAnswer: null, builtSentence: [], lessonId: null, mistakes: [], activeHintId: null }
};

function updateNavbar() {
    const xpCount = document.getElementById('xpCount');
    const streakCount = document.getElementById('streakCount');
    if (xpCount) xpCount.textContent = state.user.xp;
    if (streakCount) streakCount.textContent = state.user.streak;
}

function saveState() { localStorage.setItem('japanese_learning_state', JSON.stringify(state.user)); }
function loadState() {
    try {
        const saved = localStorage.getItem('japanese_learning_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                state.user = { ...state.user, ...parsed };
            }
        }
        updateNavbar();
    } catch (e) {
        console.error('State load error', e);
        localStorage.removeItem('japanese_learning_state');
    }
}

function renderPage(path, push = true) {
    if (push) state.history.push(path);
    state.currentPath = path;
    const container = document.getElementById('mainContent');
    // Force reflow to restart animation (Android Fix)
    container.classList.remove('fade-in');
    void container.offsetWidth;
    container.classList.add('fade-in');
    switch (path) {
        case 'dashboard': renderDashboard(); break;
        case 'lessons': renderLessons(); break;
        case 'kana': renderKanaPage(); break;
        case 'stats': renderStats(); break;
    }
    if (window.innerWidth < 768) {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }
}

function renderDashboard() {
    const hour = new Date().getHours();
    let greeting = '你好';
    if (hour >= 5 && hour < 11) greeting = '早上好';
    else if (hour >= 11 && hour < 14) greeting = '中午好';
    else if (hour >= 14 && hour < 18) greeting = '下午好';
    else if (hour >= 18 && hour < 24) greeting = '晚上好';
    else greeting = '夜深了';

    const container = document.getElementById('mainContent');
    container.innerHTML = `
        <div class="dashboard">
            <div class="welcome-card">
                <h1 class="welcome-title">${greeting}，${state.user.level} 级的学习者！</h1>
                <p class="welcome-subtitle">今天也要加油哦！</p>
                <button class="btn btn-primary" onclick="app.startQuickPractice()">开始快速练习</button>
            </div>
            <div class="daily-goal">
                <div class="daily-goal-header">
                    <span style="font-weight: 800">今日目标</span>
                    <span>50 / 100 XP</span>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: 50%"></div></div>
            </div>
            <div class="stats-grid">
                <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-value">${state.user.streak}</div><div class="stat-label">连续天数</div></div>
                <div class="stat-card"><div class="stat-icon">💡</div><div class="stat-value">${state.user.xp}</div><div class="stat-label">总 XP</div></div>
            </div>
        </div>
    `;
}

function renderLessons() {
    const container = document.getElementById('mainContent');
    container.innerHTML = `
        <h1 style="margin-bottom: var(--spacing-xl)">课程</h1>
        <div class="lessons-grid">
            ${lessons.map(l => `
                <div class="lesson-card" onclick="app.startLesson('${l.id}')">
                    <div class="lesson-icon">${l.icon || (l.type === 'kana' ? '🔤' : '📖')}</div>
                    <div class="lesson-info">
                        <div class="lesson-name">${l.name}</div>
                    <div class="lesson-type">${l.type === 'kana-all' ? '从清音到拗音全覆盖' :
            l.type === 'kana' ? '五十音局部练习' :
                '词汇与短句实战'
        }</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderKanaPage() {
    const container = document.getElementById('mainContent');
    container.innerHTML = `
        <div class="kana-layout">
            <div class="kana-header">
                <h1>五十音</h1>
                <div class="kana-tabs">
                    <button class="btn" onclick="document.getElementById('hiraganaGrid').style.display='grid'; document.getElementById('katakanaGrid').style.display='none'">平假名</button>
                    <button class="btn" onclick="document.getElementById('hiraganaGrid').style.display='none'; document.getElementById('katakanaGrid').style.display='grid'">片假名</button>
                </div>
            </div>
            <div id="hiraganaGrid" class="kana-grid">
                ${Object.entries(hiragana).map(([k, v]) => `
                    <div class="kana-character-box">
                        <div class="kana-card" onclick="app.showKanaDetail(this, '${k}', '${v}')">
                            <div class="kana-char">${k}</div>
                            <div class="kana-romaji">${v}</div>
                        </div>
                        <div class="kana-bubble">
                            <div class="hint-romaji">${v}</div>
                        </div>
                    </div>`).join('')}
            </div>
            <div id="katakanaGrid" class="kana-grid" style="display: none">
                ${Object.entries(katakana).map(([k, v]) => `
                    <div class="kana-character-box">
                        <div class="kana-card" onclick="app.showKanaDetail(this, '${k}', '${v}')">
                            <div class="kana-char">${k}</div>
                            <div class="kana-romaji">${v}</div>
                        </div>
                        <div class="kana-bubble">
                            <div class="hint-romaji">${v}</div>
                        </div>
                    </div>`).join('')}
            </div>
        </div>
    `;
}

function renderStats() {
    const container = document.getElementById('mainContent');
    container.innerHTML = `<h1>学习统计</h1><div class="stats-grid"><div class="stat-card"><div class="stat-value">${state.user.xp}</div><div class="stat-label">总 XP</div></div><div class="stat-card"><div class="stat-value">${state.user.level}</div><div class="stat-label">当前等级</div></div></div>`;
}

function renderPractice() {
    const q = state.practice.questions[state.practice.currentIndex];
    const progress = (state.practice.currentIndex / state.practice.questions.length) * 100;
    const container = document.querySelector('.practice-container');
    const textToSpeak = q.audio || q.display || '';
    if (state.practice.currentIndex === 0 || q.type !== 'sentence-building') ttsManager.speak(textToSpeak, 0.85, 'ja');

    container.innerHTML = `
        <div class="practice-header">
            <button class="practice-close" onclick="app.closePractice()">✕</button>
            <div style="display:flex; gap:10px;">
                ${state.practice.currentIndex > 0 ? `<button class="practice-nav-btn" onclick="app.prevQuestion()">上一页</button>` : ''}
                <button class="practice-nav-btn" onclick="app.checkAnswer(true)" style="opacity:0.5; font-size:0.8rem;">跳过本页</button>
            </div>
            <div class="practice-progress"><div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div></div>
            <div class="practice-hearts">❤️ ${state.user.hearts}</div>
        </div>
        ${q.chapterName ? `<div class="chapter-indicator">当前章节：${q.chapterName}</div>` : ''}
        <div class="practice-content">
            ${renderQuestionContent(q)}
        </div>
        <div class="practice-footer">
            ${renderQuestionFooter(q)}
        </div>
    `;
}

function renderQuestionContent(q) {
    if (q.type === 'sentence-building') {
        return `
            <div class="target-sentence-cn">${q.cn}</div>
            <div class="sentence-build-area" id="builtSentence">
                ${(state.practice.builtSentence || []).map((idx, i) => `<button class="build-block" onclick="app.removeBuildingBlock(${i})">${q.blocks[idx]}</button>`).join('')}
            </div>
            <div class="build-blocks-pool">
                ${q.blocks.map((block, i) => {
            const isUsed = (state.practice.builtSentence || []).includes(i);
            return `<button class="build-block ${isUsed ? 'used' : ''}" onclick="app.addBuildingBlock(${i})">${block}</button>`;
        }).join('')}
            </div>
        `;
    } else if (q.type === 'matching') {
        return `
            <h2 class="question-text">匹配单词与含义</h2>
             <div class="matching-grid">
                <div class="matching-col">
                    ${q.leftItems.map(item => `
                        <div class="match-card-wrapper ${state.practice.activeHintId === 'left-' + item.id ? 'active' : ''}">
                            <button class="match-card ${item.matched ? 'matched' : ''} ${state.practice.matching?.left?.id === item.id ? 'selected' : ''}" 
                                    onclick="app.handleMatchClick('left', ${item.id}, event)" ${item.matched ? 'disabled' : ''}>
                                ${item.originalJp || item.left}
                            </button>
                            <div class="match-hint">
                                <div class="hint-kana">${item.kana}</div>
                                <div class="hint-romaji">${item.romaji || ''}</div>
                                <div class="hint-cn">${item.right}</div>
                            </div>
                        </div>`).join('')}
                </div>
                <div class="matching-col">
                    ${q.rightItems.map(item => `
                        <div class="match-card-wrapper">
                            <button class="match-card ${item.matched ? 'matched' : ''} ${state.practice.matching?.right?.id === item.id ? 'selected' : ''}" 
                                    onclick="app.handleMatchClick('right', ${item.id}, event)" ${item.matched ? 'disabled' : ''}>
                                ${item.right}
                            </button>
                        </div>`).join('')}
                </div>
            </div>
        `;
    } else if (q.type === 'speaking') {
        // Construct full Kana string for most reliable TTS
        let playAudio = (q.audio || q.display).replace(/[\。\.]/g, '');
        if (q.segments) {
            playAudio = q.segments.map(s => s.kana || s.text).join('').replace(/[\。\.]/g, '');
        }

        return `
            <h2 class="question-text">请大声朗读</h2>
            <div class="speaking-layout">
                <div class="speaking-prompt-container" style="display: flex; align-items: flex-start; justify-content: center; gap: 15px; margin-bottom: 25px; width: 100%;">
                     <!-- margin-top to align with Japanese text below Romaji -->
                     <button class="speaker-icon" style="margin-top: 28px; position: relative; z-index: 10; background:transparent; border:none;" onclick="app.speakText('${playAudio}', 'ja');">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.03,19.86 21,16.28 21,12C21,7.72 18.03,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg>
                     </button>
                     <div class="text-stack" style="display: flex; flex-direction: column; align-items: center;">
                          <div class="hint-kana" style="font-size: 1.2rem; color: var(--color-primary); font-weight: 700; opacity: 0.9;">${q.fullKana || ''}</div>
                          <div class="hint-romaji" style="font-size: 1.0rem; color: var(--text-secondary); margin-bottom: 6px; font-weight: 500; font-style: italic;">${q.romaji}</div>
                         ${q.segments ?
                `<div class="sentence-segments" style="justify-content: center;">
                                ${q.segments.map((seg, idx) => {
                    if (!seg.text || ['。', '？', '！', '.', '?', '!'].includes(seg.text)) return '';
                    return `<div class="segment-wrapper" onclick="app.showSegmentHint(this, ${idx})"><div class="segment-text" style="font-size: 2.2rem;">${seg.text}</div><div class="segment-hint"><div class="hint-kana">${seg.kana || ''}</div><div class="hint-romaji">${(seg.romaji || '').toLowerCase()}</div><div class="hint-cn">${seg.cn}</div></div></div>`;
                }).join('')}
                            </div>`
                : `<div class="question-kana" style="font-size: 2.2rem; line-height: 1.2;">${q.display.replace(/[\。\.]/g, '')}</div>`
            }
                     </div>
                </div>
                
                <div class="mic-container">
                    <button class="mic-btn ${state.practice.isListening ? 'listening' : ''}" onclick="app.toggleListening()">
                        ${state.practice.isListening ? '<div class="wave-anim"></div>' : '🎙️'}
                    </button>
                    ${state.practice.isListening ?
                `<div class="listening-wave">
                         <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                       </div>`
                : `<div class="mic-status">点击麦克风开始说话</div>`
            }
                    ${state.practice.speechResult ? `<div class="speech-result">"${state.practice.speechResult}"</div>` : ''}
                </div>
            </div>
        `;
    } else {
        const textToSpeak = q.audio || q.display || '';
        return `
             <div class="question-kana-container kana-card-wrapper">
                <button class="speaker-icon" style="background:transparent; border:none; cursor:pointer;" onclick="app.showKanaDetail(this, '${textToSpeak.replace(/[\。\.\s]/g, '')}', '${q.romaji || ''}');">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.03,19.86 21,16.28 21,12C21,7.72 18.03,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg>
                </button>
                ${q.segments ?
                `<div class="sentence-segments">
                        ${q.segments.map((seg, idx) => {
                    if (!seg.text || ['。', '？', '！', '.', '?', '!'].includes(seg.text)) return '';
                    return `<div class="segment-wrapper" onclick="app.showSegmentHint(this, ${idx})"><div class="segment-text">${seg.text}</div><div class="segment-hint"><div class="hint-kana">${seg.kana || ''}</div><div class="hint-romaji">${(seg.romaji || '').toLowerCase()}</div><div class="hint-cn">${seg.cn}</div></div></div>`;
                }).join('')}
                    </div>` : `
                    <div class="kana-character-box">
                        <div class="question-kana" onclick="app.showKanaDetail(this, '${textToSpeak.replace(/[\。\.\s]/g, '')}', '${q.romaji || ''}')">${q.display}</div>
                        <div class="kana-bubble">
                            <div class="hint-romaji">${q.romaji || ''}</div>
                        </div>
                    </div>
                    ${q.type === 'kana' ? `
                        <div class="stroke-order-panel">
                            <div class="stroke-order-title">笔顺动画</div>
                            <img class="stroke-order-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/${hiragana[q.display] ? 'Hiragana' : 'Katakana'}_${encodeURIComponent(q.display)}_stroke_order_animation.gif" alt="Stroke Order">
                        </div>
                    ` : ''}
                    `
            }
            </div>
            <div class="options-grid">${q.options.map((opt, i) => `<button class="option-btn" onclick="app.selectAnswer(${i})">${opt}</button>`).join('')}</div>
        `;
    }
}

function renderQuestionFooter(q) {
    if (q.type === 'matching') {
        return ''; // Matching auto-checks
    } else if (q.type === 'speaking') {
        return `<button class="btn btn-primary btn-block" onclick="app.checkSpeaking(true)">跳过 / 我读完了</button>`;
    }
    return `<button class="btn btn-primary btn-block" id="checkBtn" onclick="app.checkAnswer()" ${q.type === 'sentence-building' && (!state.practice.builtSentence || state.practice.builtSentence.length === 0) ? 'disabled' : (q.type !== 'sentence-building' && state.practice.selectedAnswer === null ? 'disabled' : '')}>检查</button>`;

}

function selectAnswer(index) {
    // Allow changing answer: do not check if selectedAnswer !== null
    state.practice.selectedAnswer = index;
    soundManager.click();
    const q = state.practice.questions[state.practice.currentIndex];
    const optionText = q.options[index];

    // Better Feedback: Always try to speak when selecting an answer
    // For Kana: Speak the character
    // For Word: Speak the Japanese word corresponding to the selected Chinese meaning
    if (q.type === 'kana') {
        let textToSpeak = optionText;
        // Convert romaji back to kana if needed
        for (const [k, v] of Object.entries(hiragana)) { if (v === optionText) { textToSpeak = k; break; } }
        for (const [k, v] of Object.entries(katakana)) { if (v === optionText) { textToSpeak = k; break; } }
        ttsManager.speak(textToSpeak, 1.0, 'ja-JP');
    } else if (q.type === 'word') {
        // If it's a word question, the options are meanings (CN). 
        // If user clicks the generic CN option, we should ideally speak the JP word IF it is correct?
        // Or just speak the JP word of the *current question* to reinforce?
        // Let's speak the Question's JP Word (q.audio) to reinforce the sound.
        if (q.audio) ttsManager.speak(q.audio, 1.0, 'ja-JP');
    }
    // For sentences, maybe too long to speak on every click.


    // Update UI: Clear formatting from all, then select the click one
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
    document.getElementById('checkBtn').disabled = false;
}



// Overload checkAnswer for Matching auto-complete
function checkAnswer(isMatchingComplete = false) {
    if (isMatchingComplete) {
        soundManager.correct();
        state.practice.correctCount++;
        addXP(10);

        const footer = document.querySelector('.practice-footer');
        // Matching often doesn't have a footer, so we inject or navigate
        // Force navigate next:
        app.nextQuestion();
        return;
    }

    // Default Check Logic
    const q = state.practice.questions[state.practice.currentIndex];
    let isCorrect = false;

    // Helper to strip punctuation for lenient checking
    const clean = (str) => str ? str.replace(/[。？！，、．,!\?\.\s]/g, '') : '';

    if (q.type === 'sentence-building') {
        const built = (state.practice.builtSentence || []).map(idx => q.blocks[idx]).join('');
        // Compare cleaned strings
        isCorrect = clean(built) === clean(q.answer);
    } else if (q.type !== 'matching' && q.type !== 'speaking') {
        // Matching handled above, Speaking handled separately
        isCorrect = state.practice.selectedAnswer === q.correctIndex;
        document.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.disabled = true;
            if (i === q.correctIndex) btn.classList.add('correct');
            else if (i === state.practice.selectedAnswer) btn.classList.add('incorrect');
        });
    }

    const footer = document.querySelector('.practice-footer');
    footer.innerHTML = `
        <div class="feedback-banner ${isCorrect ? 'correct' : 'incorrect'} show">
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-text">
                <div class="feedback-title">${isCorrect ? '太棒了！' : '由于错误...'}</div>
                <div class="feedback-detail">${isCorrect ? '' : '正确答案是：' + (q.answer || q.options[q.correctIndex])}</div>
            </div>
            <button class="btn ${isCorrect ? 'btn-success' : 'btn-danger'}" onclick="app.nextQuestion()">继续</button>
        </div>
        `;
    if (isCorrect) {
        soundManager.correct();
        state.practice.correctCount++;
        addXP(10);
        app.createParticles(window.innerWidth / 2, window.innerHeight / 2);
    }
    else {
        soundManager.incorrect(); state.user.hearts = Math.max(0, state.user.hearts - 1);
        const mistakeKey = q.type === 'sentence-building' ? q.answer : q.display;
        if (!state.practice.mistakes.find(m => (m.display || m.answer) === mistakeKey)) state.practice.mistakes.push(q);
    }
}

function nextQuestion() {
    state.practice.currentIndex++;
    state.practice.selectedAnswer = null;
    state.practice.builtSentence = [];
    if (state.practice.currentIndex < state.practice.questions.length && state.user.hearts > 0) renderPractice();
    else if (state.user.hearts <= 0) showResult(false);
    else showResult(true);
}

function prevQuestion() {
    if (state.practice.currentIndex > 0) {
        state.practice.currentIndex--;
        state.practice.selectedAnswer = null;
        state.practice.builtSentence = []; // Reset state
        renderPractice();
    }
}

function showResult(success) {
    state.practice.showingResult = true;
    state.practice.resultSuccess = success;

    // Only update progress once
    if (success && state.practice.lessonId && !state.user.lessonsCompleted.includes(state.practice.lessonId)) {
        state.user.lessonsCompleted.push(state.practice.lessonId);
        saveState();
    }

    const container = document.querySelector('.practice-container');
    const accuracy = Math.round((state.practice.correctCount / state.practice.questions.length) * 100);
    container.innerHTML = `
        <div class="result-container fade-in">
            <div class="result-icon">${success ? '🏆' : '💔'}</div>
            <h1 class="result-title">${success ? '完成练习！' : '再接再厉'}</h1>
            <div class="result-stats">
                <div class="result-stat"><div class="result-stat-value">${state.practice.correctCount}</div><div class="result-stat-label">正确</div></div>
                <div class="result-stat"><div class="result-stat-value">${accuracy}%</div><div class="result-stat-label">正确率</div></div>
            </div>
            
            ${success && state.practice.lessonId ? renderWordSummary() : ''}

            ${!success ? `<button class="btn btn-primary btn-block" onclick="location.reload()">重试</button>` :
            state.practice.mistakes.length > 0 ? `<button class="btn btn-secondary btn-block" onclick="app.startReviewMistakes()">复习错题</button>` : ''
        }
    <button class="btn btn-primary btn-block" onclick="app.closeResult()">返回主页</button>
        </div>
        `;
}

function startLesson(id) {
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) return;
    soundManager.click();
    ttsManager.speak(lesson.name);
    let questions = [];

    // 1. Word Questions (Learn Words)
    if (lesson.type === 'word') {
        const wordQuestions = lesson.words.map(wid => {
            const w = wordsData[wid];
            const options = [w.cn.replace(/。/g, '')];
            const allCN = Object.values(wordsData).map(x => x.cn.replace(/。/g, ''));
            while (options.length < 4) {
                const r = allCN[Math.floor(Math.random() * allCN.length)];
                if (!options.includes(r)) options.push(r);
            }
            options.sort(() => Math.random() - 0.5);
            return { display: w.jp.replace(/。/g, ''), audio: w.kana, segments: [{ text: w.jp, kana: w.kana, romaji: w.romaji, cn: w.cn }], options, correctIndex: options.indexOf(w.cn.replace(/。/g, '')), type: 'word' };
        });
        questions.push(...wordQuestions);

        // 2. Matching Question (Pairs) - using learnt words
        if (lesson.words && lesson.words.length >= 4) {
            // Take up to 5 words from the current lesson for matching
            const matchingWords = lesson.words.slice(0, 5).map(wid => wordsData[wid]);
            const pairs = matchingWords.map((w, i) => ({ id: i, originalJp: w.jp, left: w.kana, kana: w.kana, romaji: w.romaji, right: w.cn, matched: false }));
            questions.push({
                type: 'matching',
                title: '单词配对',
                leftItems: [...pairs].sort(() => Math.random() - 0.5),
                rightItems: [...pairs].sort(() => Math.random() - 0.5),
                originalPairs: pairs,
                solvedCount: 0
            });
        }

        lesson.sentences.forEach(s => {
            // 3. Sentence Building (Make Sentences)
            if (s.segments) {
                const blocks = s.segments.filter(seg => seg.text && !['。', '？', '！', '!', '?', '.'].includes(seg.text)).map(seg => seg.text);
                questions.push({
                    cn: s.cn.replace(/[。？！\!\?\. ]/g, ''),
                    answer: s.jp,
                    blocks: [...blocks].sort(() => Math.random() - 0.5),
                    segments: s.segments,
                    type: 'sentence-building'
                });
            }

            // 4. Speaking (Shadowing)
            questions.push({
                display: s.jp,
                romaji: s.segments ? s.segments.map(seg => seg.romaji).join(' ') : '',
                fullKana: s.segments ? s.segments.map(seg => seg.kana || (['。', '？', '！', '!', '?', '.'].includes(seg.text) ? seg.text : '')).join('') : (s.kana || ''),
                cn: s.cn,
                audio: s.jp,
                audioKana: s.segments ? s.segments.map(seg => seg.kana || seg.text).join('').replace(/[。\. ?！!]/g, '') : s.jp,
                type: 'speaking',
                segments: s.segments
            });
        });

    } else if (lesson.type === 'kana-all') {
        const kanaSet = lesson.kanaType === 'hiragana' ? hiragana : katakana;
        const allKeys = Object.keys(kanaSet);
        const allValues = Object.values(kanaSet);

        lesson.chapters.forEach(chap => {
            const keys = allKeys.slice(chap.start, chap.end);
            const chapQuestions = keys.map(k => {
                const options = [kanaSet[k]];
                while (options.length < 4) {
                    const r = allValues[Math.floor(Math.random() * allValues.length)];
                    if (!options.includes(r)) options.push(r);
                }
                options.sort(() => Math.random() - 0.5);
                return {
                    display: k,
                    romaji: kanaSet[k],
                    options,
                    correctIndex: options.indexOf(kanaSet[k]),
                    type: 'kana',
                    chapterName: chap.name
                };
            });
            questions.push(...chapQuestions);
        });
    } else {
        const kanaSet = lesson.type === 'kana' ? hiragana : katakana;
        const keys = Object.keys(kanaSet).slice(lesson.start, lesson.end);
        questions = keys.map(k => {
            const options = [kanaSet[k]];
            const allV = Object.values(kanaSet);
            while (options.length < 4) { const r = allV[Math.floor(Math.random() * allV.length)]; if (!options.includes(r)) options.push(r); }
            options.sort(() => Math.random() - 0.5);
            return { display: k, romaji: kanaSet[k], options, correctIndex: options.indexOf(kanaSet[k]), type: 'kana' };
        });
    }

    state.practice = {
        active: true,
        questions: questions, // Use the ordered list directly, NO RANDOM SORT
        currentIndex: 0,
        correctCount: 0,
        selectedAnswer: null,
        builtSentence: [],
        lessonId: lesson.id,
        mistakes: [],
        matching: { left: null, right: null },
        isListening: false,
        speechResult: '',
        showingResult: false,
        resultSuccess: false
    };

    document.getElementById('practiceModal').classList.add('open');
    renderPractice();
}

function handleMatchClick(side, id, event) {
    const q = state.practice.questions[state.practice.currentIndex];

    // Play sound on click & speak Japanese if it's the left side (Japanese word)
    soundManager.click();
    if (side === 'left') {
        const item = q.leftItems.find(i => i.id === id);
        const textToSpeak = item.kana || item.left;
        app.speakText(textToSpeak, 'ja');

        // Show bubble hint directly on DOM to avoid layout jump
        if (event) {
            const wrapper = event.currentTarget.closest('.match-card-wrapper');
            if (wrapper) {
                wrapper.classList.add('active');
                setTimeout(() => wrapper.classList.remove('active'), 2000);
            }
        }
    }

    // Update local selection
    if (!state.practice.matching) state.practice.matching = {};

    // If clicking same side again, update selection
    state.practice.matching[side] = { id };

    // Update UI directly for selection instead of full render to keep hint alive
    if (event) {
        // Clear previous selection visually in the same column
        const col = event.currentTarget.closest('.matching-col');
        col.querySelectorAll('.match-card').forEach(btn => btn.classList.remove('selected'));
        // Add selected class to current
        event.currentTarget.classList.add('selected');
    }

    // Check match if both sides selected
    if (state.practice.matching.left && state.practice.matching.right) {
        const leftId = state.practice.matching.left.id;
        const rightId = state.practice.matching.right.id;

        if (leftId === rightId) {
            // Correct Match - Now we can do a full render to clean up and update 'matched' status
            setTimeout(() => {
                soundManager.correct();

                const leftItem = q.leftItems.find(i => i.id === leftId);
                const rightItem = q.rightItems.find(i => i.id === rightId);
                if (leftItem) leftItem.matched = true;
                if (rightItem) rightItem.matched = true;
                q.solvedCount = (q.solvedCount || 0) + 1;
                state.practice.matching = { left: null, right: null };

                if (q.solvedCount >= q.originalPairs.length) {
                    app.checkAnswer(true);
                } else {
                    renderPractice();
                }
            }, 300);
        } else {
            // Incorrect - Visual feedback then clear
            document.querySelectorAll('.match-card.selected').forEach(el => {
                el.classList.add('incorrect');
                el.style.animation = 'none';
                void el.offsetWidth;
                el.style.animation = 'shake 0.4s ease-in-out';
            });

            setTimeout(() => {
                soundManager.incorrect();
                state.practice.matching = { left: null, right: null };
                renderPractice();
            }, 500);
        }
    }
}



function toggleListening() {
    if (state.practice.isListening) {
        // Stop
        state.practice.isListening = false;
        if (state.recognition) state.recognition.stop();
        if (state.recognition) state.recognition.stop();
        stopAudioVisualizer(); // Ensure cleanup
        renderPractice();
    } else {
        // Start
        state.practice.isListening = true;
        state.practice.speechResult = '';
        renderPractice();

        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                showToast("您的浏览器不支持语音识别");
                state.practice.isListening = false;
                renderPractice();
                return;
            }
            const recognition = new SpeechRecognition();
            state.recognition = recognition;
            recognition.lang = 'ja-JP';
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                state.practice.speechResult = transcript;
                state.practice.isListening = false;
                checkSpeaking(false, transcript);
            };

            recognition.onerror = (event) => {
                console.warn('Speech Error', event.error);
                state.practice.isListening = false;
                showToast("听不清楚，请重试");
                renderPractice();
            };

            recognition.onend = () => {
                if (state.practice.isListening) {
                    state.practice.isListening = false;
                    stopAudioVisualizer(); // Stop visualizer
                    renderPractice();
                }
            };

            recognition.start();
            initAudioVisualizer(); // Start visualizer
        } catch (e) {
            console.error(e);
            state.practice.isListening = false;
            renderPractice();
        }
    }
}

// Audio Visualizer Logic
let audioContext = null;
let analyser = null;
let microphone = null;
let javascriptNode = null;
let visualizerInterval = null;

function initAudioVisualizer() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;

            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);

            visualizerInterval = setInterval(() => {
                if (!state.practice.isListening) return;

                const array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);

                // Calculate average volume
                let values = 0;
                const length = array.length;
                for (let i = 0; i < length; i++) {
                    values += array[i];
                }
                const average = values / length;

                // Update UI bars
                const bars = document.querySelectorAll('.wave-bar');
                if (bars.length > 0) {
                    bars.forEach((bar, i) => {
                        const volumeHeight = Math.min(100, Math.max(4, average * 1.5 + Math.random() * 10));
                        bar.style.height = `${volumeHeight}%`;
                        bar.style.animation = 'none';
                    });
                }
            }, 50);

            javascriptNode.onaudioprocess = function () {
                // Needed for Chrome to keep processing audio
            };
        })
        .catch(function (err) {
            console.warn('Microphone access denied for visualizer', err);
        });
}

function stopAudioVisualizer() {
    if (visualizerInterval) clearInterval(visualizerInterval);
    if (javascriptNode) javascriptNode.disconnect();
    if (analyser) analyser.disconnect();
    if (microphone) microphone.disconnect();
    if (audioContext && audioContext.state !== 'closed') audioContext.close();

    // Reset vars
    audioContext = null;
    analyser = null;
    microphone = null;
    javascriptNode = null;
    visualizerInterval = null;
}

function checkSpeaking(forcePass = false, transcript = '') {
    const q = state.practice.questions[state.practice.currentIndex];

    // Simple verification
    let isCorrect = forcePass;
    if (!forcePass && transcript) {
        // Very loose check just to encourage speaking
        isCorrect = true;
    }

    if (isCorrect) {
        soundManager.correct();
        state.practice.correctCount++;
        addXP(10);

        // Show banner
        const footer = document.querySelector('.practice-footer');
        footer.innerHTML = `
        <div class="feedback-banner correct show">
                <div class="feedback-icon">✅</div>
                <div class="feedback-text">
                    <div class="feedback-title">发音不错！</div>
                    <div class="feedback-detail">
                        ${q.cn ? `<div style="font-size: 1.2rem; color: #fff; margin-bottom: 4px; font-weight: 800; border-left: 4px solid rgba(255,255,255,0.3); padding-left: 10px;">${q.cn}</div>` : ''}
                        ${transcript ? `你说了: ${transcript}` : '继续加油'}
                    </div>
                </div>
                <button class="btn btn-success" onclick="app.nextQuestion()">继续</button>
            </div>
        `;
    }
}





function startQuickPractice() { startLesson('n5-1'); }
function startReviewMistakes() {
    state.practice.questions = [...state.practice.mistakes].sort(() => Math.random() - 0.5);
    state.practice.currentIndex = 0;
    state.practice.correctCount = 0;
    state.practice.mistakes = [];
    state.user.hearts = 5;
    renderPractice();
}

function closePractice() {
    document.getElementById('practiceModal').classList.remove('open');
    state.practice.active = false;
}
function closeResult() { closePractice(); renderPage('dashboard'); }

function showKanaDetail(el, char, romaji) {
    // Attempt to trigger a beep to unlock/verify audio context
    try { soundManager.click(); } catch (e) { }

    ttsManager.speak(char, 0.8, 'ja-JP');

    // Toggle bubble
    const wrapper = el.closest('.kana-character-box') || el.closest('.kana-card-wrapper');
    if (wrapper) {
        document.querySelectorAll('.active').forEach(w => w.classList.remove('active'));
        wrapper.classList.add('active');
        setTimeout(() => wrapper.classList.remove('active'), 3000);
    }
}


function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('visible');
    setTimeout(() => t.classList.remove('visible'), 3000);
}

function addXP(amount) { state.user.xp += amount; createXPParticle(amount); updateNavbar(); checkLevelUp(); }
function checkLevelUp() {
    const oldLevel = state.user.level;
    state.user.level = Math.floor(state.user.xp / 100) + 1;
    if (state.user.level > oldLevel) { soundManager.levelUp(); }
}

function createXPParticle(amount) {
    const xpDisplay = document.getElementById('xpDisplay');
    if (!xpDisplay) return;
    const rect = xpDisplay.getBoundingClientRect();
    const p = document.createElement('div');
    p.className = 'xp-particle';
    p.textContent = `+ ${amount} XP`;
    p.style.left = `${rect.left}px`; p.style.top = `${rect.top}px`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
}

function renderWordSummary() {
    const lesson = lessons.find(l => l.id === state.practice.lessonId);
    if (!lesson || !lesson.words || lesson.words.length === 0) return '';

    const wordList = lesson.words.map(wid => wordsData[wid]);

    return `
        <div class="word-summary-container" style="margin: 20px 0; background: var(--bg-card); padding: 15px; border-radius: 12px; width: 100%;">
            <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.1rem; color: var(--text-secondary);">本节生词回顾</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; width: 100%;">
                ${wordList.map((w, i) => `
                    <div class="summary-word-wrapper ${state.practice.activeSummaryHint === i ? 'active' : ''}" style="position: relative;">
                        <div class="summary-word-item" onclick="app.showSummaryHint(${i}, '${w.kana}', event)" style="text-align: center; padding: 14px 18px; background: var(--bg-primary); border: 2px solid var(--bg-tertiary); border-radius: 12px; cursor: pointer; white-space: nowrap;">
                            <div style="font-size: 1.4rem; font-weight: bold; overflow: hidden; text-overflow: ellipsis;">${w.jp}</div>
                        </div>
                        <div class="match-hint summary-hint">
                            <div class="hint-kana">${w.kana}</div>
                            <div class="hint-romaji">${w.romaji || ''}</div>
                            <div class="hint-cn">${w.cn}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showSummaryHint(index, kana, event) {
    app.speakText(kana, 'ja');

    // Toggle class directly on the wrapper without full re-render to prevent jumping
    const wrapper = event.currentTarget.closest('.summary-word-wrapper');
    if (wrapper) {
        wrapper.classList.add('active');
        setTimeout(() => wrapper.classList.remove('active'), 2000);
    }
}

function createParticles(x, y) {
    const colors = ['#58CC02', '#1CB0F6', '#FFD900', '#FF4B4B'];
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.left = x + 'px';
        p.style.top = y + 'px';

        // Random velocity
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * 100;
        const ty = Math.sin(angle) * 100;

        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1200);
    }
}

function speakText(text, lang) { ttsManager.speak(text, 0.9, lang === 'ja' ? 'ja-JP' : 'zh-CN'); }

function showSegmentHint(el, idx) {
    const q = state.practice.questions[state.practice.currentIndex];
    const seg = q.segments[idx];
    if (!seg) return;

    // Play interaction sound for feedback
    soundManager.click();

    // determine text: prefer kana for pronunciation, fallback to text
    const text = (seg.kana || seg.text || '').replace(/[。\. ?！!]/g, '');

    // Use the unified speakText function
    if (text) {
        app.speakText(text, 'ja');
    }

    const wasActive = el.classList.contains('active');
    document.querySelectorAll('.segment-wrapper').forEach(w => w.classList.remove('active'));
    if (!wasActive) el.classList.add('active');

    clearTimeout(el.hintTimeout);
    el.hintTimeout = setTimeout(() => el.classList.remove('active'), 3000);
}

function addBuildingBlock(i) {
    if (state.practice.builtSentence.includes(i)) return;
    soundManager.click();
    const q = state.practice.questions[state.practice.currentIndex];

    // Pronunciation fix: Try to find the segment to speak the correct Kana
    const blockText = q.blocks[i];
    let textToSpeak = blockText;
    if (q.segments) {
        const seg = q.segments.find(s => s.text === blockText);
        if (seg && seg.kana) textToSpeak = seg.kana;
    }

    ttsManager.speak(textToSpeak, 1.0, 'ja-JP');
    state.practice.builtSentence.push(i);
    renderPractice();
}

function removeBuildingBlock(builtIdx) {
    soundManager.click();
    state.practice.builtSentence.splice(builtIdx, 1);
    renderPractice();
}

window.app = { startLesson, startQuickPractice, selectAnswer, checkAnswer, nextQuestion, prevQuestion, closePractice, closeResult, showKanaDetail, speakText, showSegmentHint, addBuildingBlock, removeBuildingBlock, startReviewMistakes, handleMatchClick, toggleListening, checkSpeaking, showToast, createParticles, showSummaryHint };

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderPage('dashboard', false);
    // Unified navigation handler
    const handleNavigation = (e) => {
        const target = e.currentTarget;
        let page = target.getAttribute('data-page');
        if (page === 'home') page = 'dashboard';

        // Update UI active states
        document.querySelectorAll('.sidebar-link, .bottom-nav-btn').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-page') === target.getAttribute('data-page')) {
                el.classList.add('active');
            }
        });

        renderPage(page);
    };

    // Attach listeners to sidebar links and bottom nav buttons
    document.querySelectorAll('.sidebar-link, .bottom-nav-btn').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(e);
        });
    });
});
