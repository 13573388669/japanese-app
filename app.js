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
    { id: 'n5-2', name: '日常问候 (N5)', type: 'word', words: ['w6', 'w7', 'w8', 'w9', 'w10'], sentences: [] },
    { id: 'h-1', name: '清音 (あ行)', type: 'kana', start: 0, end: 5 },
    { id: 'h-2', name: '清音 (か行)', type: 'kana', start: 5, end: 10 }
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
    'w10': { jp: 'ありがとう', kana: 'ありがとう', romaji: 'arigatou', cn: '谢谢' }
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
        try {
            // Android Best Practice: Create new Audio instance for every play to avoid state issues
            const audio = new Audio();

            // Determine API language param: le=jap for Japanese, le=eng for English, default (empty) for others (Chinese)
            let leParam = '';
            if (lang && lang.includes('ja')) leParam = '&le=jap';
            // Simple heuristic: if text contains kana, force jap
            if (/[\u3040-\u309F\u30A0-\u30FF]/.test(text)) leParam = '&le=jap';

            const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}${leParam}`;
            audio.src = url;

            // Visual Feedback
            // showToast(`播放: ${text}`); // Optional: debug feedback

            audio.onerror = (e) => {
                console.warn('Audio File Error', e);
                // Fallback or silent fail (toast is too intrusive for every click if network is bad)
                const t = document.getElementById('toast');
                if (t && !t.classList.contains('visible')) {
                    showToast('音频加载失败 (请检查网络)');
                }
            };

            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn('Audio Play Blocked', error);
                });
            }
        } catch (e) {
            console.warn('Audio System Error', e);
        }
    }
};
// Removed ttsManager.init() as it is no longer needed

let state = {
    user: { xp: 0, level: 1, hearts: 5, streak: 0, lessonsCompleted: [] },
    currentPath: 'dashboard',
    history: ['dashboard'],
    practice: { active: false, questions: [], currentIndex: 0, correctCount: 0, selectedAnswer: null, builtSentence: [], lessonId: null, mistakes: [] }
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
    const container = document.getElementById('mainContent');
    container.innerHTML = `
        <div class="dashboard">
            <div class="welcome-card">
                <h1 class="welcome-title">中午好，${state.user.level} 级的学习者！</h1>
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
                    <div class="lesson-icon">${l.type === 'kana' ? '🔤' : '📖'}</div>
                    <div class="lesson-info">
                        <div class="lesson-name">${l.name}</div>
                        <div class="lesson-type">${l.type === 'kana' ? '五十音' : '词汇与短句'}</div>
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
                ${Object.entries(hiragana).map(([k, v]) => `<div class="kana-card" onclick="app.showKanaDetail('${k}', '${v}')"><div class="kana-char">${k}</div><div class="kana-romaji">${v}</div></div>`).join('')}
            </div>
            <div id="katakanaGrid" class="kana-grid" style="display: none">
                ${Object.entries(katakana).map(([k, v]) => `<div class="kana-card" onclick="app.showKanaDetail('${k}', '${v}')"><div class="kana-char">${k}</div><div class="kana-romaji">${v}</div></div>`).join('')}
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
            ${state.practice.currentIndex > 0 ? `<button class="practice-nav-btn" onclick="app.prevQuestion()">上一页</button>` : ''}
            <div class="practice-progress"><div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div></div>
            <div class="practice-hearts">❤️ ${state.user.hearts}</div>
        </div>
        <div class="practice-content">
            ${q.type === 'sentence-building' ? `
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
            ` : `
                <div class="question-kana-container">
                    <div class="speaker-icon" onclick="event.stopPropagation(); app.speakText('${textToSpeak.replace(/[\。\.]/g, '')}', 'ja')">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.03,19.86 21,16.28 21,12C21,7.72 18.03,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg>
                    </div>
                    ${q.segments ?
            `<div class="sentence-segments">
                            ${q.segments.map((seg, idx) => {
                // Fix: Hide punctuation per user request
                if (!seg.text || ['。', '？', '！', '.', '?', '!'].includes(seg.text)) return ''; // Return empty string to hide
                return `<div class="segment-wrapper" onclick="app.showSegmentHint(this, ${idx})"><div class="segment-text">${seg.text}</div><div class="segment-hint"><div class="hint-romaji">${(seg.romaji || '').toLowerCase()}</div><div class="hint-cn">${seg.cn}</div></div></div>`;
            }).join('')}
                        </div>` : `<div class="question-kana" onclick="app.speakText('${textToSpeak.replace(/[\。\.]/g, '')}', 'ja')">${q.display}</div>`
        }
                </div>
                <div class="options-grid">${q.options.map((opt, i) => `<button class="option-btn" onclick="app.selectAnswer(${i})">${opt}</button>`).join('')}</div>
            `}
        </div>
        <div class="practice-footer">
            <button class="btn btn-primary btn-block" id="checkBtn" onclick="app.checkAnswer()" ${q.type === 'sentence-building' && (!state.practice.builtSentence || state.practice.builtSentence.length === 0) ? 'disabled' : (q.type !== 'sentence-building' && state.practice.selectedAnswer === null ? 'disabled' : '')}>检查</button>
        </div>
    `;
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

function checkAnswer() {
    const q = state.practice.questions[state.practice.currentIndex];
    let isCorrect = false;

    // Helper to strip punctuation for lenient checking
    const clean = (str) => str ? str.replace(/[。？！\!\?\. ]/g, '') : '';

    if (q.type === 'sentence-building') {
        const built = (state.practice.builtSentence || []).map(idx => q.blocks[idx]).join('');
        // Compare cleaned strings
        isCorrect = clean(built) === clean(q.answer);
    } else {
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
    if (isCorrect) { soundManager.correct(); state.practice.correctCount++; addXP(10); }
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
            ${!success ? `<button class="btn btn-primary btn-block" onclick="location.reload()">重试</button>` :
            state.practice.mistakes.length > 0 ? `<button class="btn btn-secondary btn-block" onclick="app.startReviewMistakes()">复习错题</button>` : ''}
            <button class="btn btn-primary btn-block" onclick="app.closeResult()">返回主页</button>
        </div>
    `;
    if (success && state.practice.lessonId) state.user.lessonsCompleted.push(state.practice.lessonId);
    saveState();
}

function startLesson(id) {
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) return;
    soundManager.click();
    ttsManager.speak(lesson.name);
    let questions = [];
    if (lesson.type === 'word') {
        questions = lesson.words.map(wid => {
            const w = wordsData[wid];
            // Remove periods from options
            const options = [w.cn.replace(/。/g, '')];
            const allCN = Object.values(wordsData).map(x => x.cn.replace(/。/g, ''));
            while (options.length < 4) {
                const r = allCN[Math.floor(Math.random() * allCN.length)];
                if (!options.includes(r)) options.push(r);
            }
            options.sort(() => Math.random() - 0.5);
            return { display: w.jp.replace(/。/g, ''), audio: w.kana, segments: [{ text: w.jp, kana: w.kana, romaji: w.romaji, cn: w.cn }], options, correctIndex: options.indexOf(w.cn.replace(/。/g, '')), type: 'word' };
        });
        lesson.sentences.forEach(s => {
            // Remove periods from sentence options
            const options = [s.cn.replace(/。/g, ''), '还是学生吗', '田中先生是学生', '我不去学校'].sort(() => Math.random() - 0.5);
            // Fix: remove period from audio source AND display
            questions.push({ display: s.jp.replace(/。/g, ''), audio: s.jp.replace(/。/g, ''), segments: s.segments, options, correctIndex: options.indexOf(s.cn.replace(/。/g, '')), type: 'sentence' });
            if (s.segments) {
                // Filter out punctuation completely for blocks
                const blocks = s.segments.filter(seg => seg.text && !['。', '？', '！', '!', '?', '.'].includes(seg.text)).map(seg => seg.text);

                // Pass segments for lookup
                questions.push({
                    cn: s.cn.replace(/[。？！\!\?\. ]/g, ''), // Remove punct from prompt
                    answer: s.jp,
                    blocks: [...blocks].sort(() => Math.random() - 0.5),
                    segments: s.segments, // Add this for pronunciation lookup
                    type: 'sentence-building'
                });
            }
        });
    } else {
        const kanaSet = lesson.type === 'kana' ? hiragana : katakana;
        const keys = Object.keys(kanaSet).slice(lesson.start, lesson.end);
        questions = keys.map(k => {
            const options = [kanaSet[k]];
            const allV = Object.values(kanaSet);
            while (options.length < 4) { const r = allV[Math.floor(Math.random() * allV.length)]; if (!options.includes(r)) options.push(r); }
            options.sort(() => Math.random() - 0.5);
            return { display: k, options, correctIndex: options.indexOf(kanaSet[k]), type: 'kana' };
        });
    }
    state.practice = { active: true, questions: questions.sort(() => Math.random() - 0.5), currentIndex: 0, correctCount: 0, selectedAnswer: null, builtSentence: [], lessonId: lesson.id, mistakes: [] };
    document.getElementById('practiceModal').classList.add('open');
    renderPractice();
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

function showKanaDetail(char, romaji) {
    ttsManager.speak(char, 0.8, 'ja-JP');
    showToast(`发音: ${char} (${romaji})`);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('visible');
    setTimeout(() => t.classList.remove('visible'), 3000);
}

function addXP(amount) { state.user.xp += amount; createXPParticle(amount); updateNavbar(); checkLevelUp(); }
function checkLevelUp() {
    const oldLevel = state.user.level;
    state.user.level = Math.floor(state.user.xp / 100) + 1;
    if (state.user.level > oldLevel) { soundManager.levelUp(); showToast(`等级提升：等级 ${state.user.level}`); }
}

function createXPParticle(amount) {
    const xpDisplay = document.getElementById('xpDisplay');
    if (!xpDisplay) return;
    const rect = xpDisplay.getBoundingClientRect();
    const p = document.createElement('div');
    p.className = 'xp-particle';
    p.textContent = `+${amount} XP`;
    p.style.left = `${rect.left}px`; p.style.top = `${rect.top}px`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
}

function speakText(text, lang) { ttsManager.speak(text, 0.9, lang === 'ja' ? 'ja-JP' : 'zh-CN'); }

function showSegmentHint(el, idx) {
    const q = state.practice.questions[state.practice.currentIndex];
    const seg = q.segments[idx];
    if (!seg) return;
    soundManager.click();
    // Fix: Clean audio input
    ttsManager.speak((seg.kana || seg.text).replace(/[\。\.]/g, ''), 0.9, 'ja');
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

window.app = { startLesson, startQuickPractice, selectAnswer, checkAnswer, nextQuestion, prevQuestion, closePractice, closeResult, showKanaDetail, speakText, showSegmentHint, addBuildingBlock, removeBuildingBlock, startReviewMistakes };

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
