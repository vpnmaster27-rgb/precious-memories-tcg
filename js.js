const gallerySeriesByName = [
    "AKB0048",
    "Aチャンネル",
    "ClariS",
    "NEW GAME!",
    "NEW GAME!!",
    "RELEASE THE SPYCE",
    "SHIROBAKO",
    "SSSS.GRIDMAN",
    "STEINS;GATE",
    "TVアニメ「かぐや様は告らせたい-ウルトラロマンティック-」",
    "WORKING!!!",
    "WORKING´!!",
    "WORKING！！",
    "_物語_シリーズ",
    "_物語_シリーズ セカンドシーズン",
    "あの日見た花の名前を僕達はまだ知らない。",
    "おちこぼれフルーツタルト",
    "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
    "がっこうぐらし！",
    "きんいろモザイク",
    "きんいろモザイク Pretty Days",
    "けいおん！",
    "けいおん！Part2",
    "けいおん！！",
    "けいおん！！Part.2",
    "さくら荘のペットな彼女",
    "ささみさん＠がんばらない",
    "とある科学の超電磁砲T",
    "とある科学の超電磁砲＆とある科学の超電磁砲Ｓ",
    "とらドラ！",
    "はたらく細胞",
    "ひだまりスケッチ",
    "ひだまりスケッチ×ハニカム",
    "ぼくたちは勉強ができない！",
    "ましろ色シンフォニー",
    "まちカドまぞく",
    "まよチキ！",
    "みなみけ",
    "やはり俺の青春ラブコメはまちがっている。",
    "やはり俺の青春ラブコメはまちがっている。完",
    "やはり俺の青春ラブコメはまちがっている。続",
    "ゆるゆり",
    "ゆるゆり♪♪",
    "ゆるゆり　なちゅやちゅみ！",
    "ゆるゆり、",
    "ゆるキャン△",
    "アマガミSS+ plus",
    "エロマンガ先生",
    "オオカミさんと七人の仲間たち",
    "カードキャプターさくら",
    "カーニバル・ファンタズム",
    "ガールズ＆パンツァー",
    "ガールズ＆パンツァー 最終章",
    "ガールズ＆パンツァー　劇場版",
    "グランベルム",
    "グリッドマン ユニバース",
    "ケムリクサ",
    "ココロコネクト",
    "ゾンビランドサガ",
    "ダンジョンに出会いを求めるのは間違っているだろうかⅡ",
    "ダンジョンに出会いを求めるのは間違っているだろうかⅢ",
    "ネコぱら",
    "ノーゲーム・ノーライフ ゼロ",
    "ハイスクール・フリート",
    "ハイスクールＤ×Ｄ HERO",
    "ハイスクールＤ×Ｄ ＢｏｒＮ",
    "ハナヤマタ",
    "ハロー！！きんいろモザイク",
    "ハンドシェイカー",
    "フレームアームズ・ガール",
    "ポプテピピック",
    "五等分の花嫁",
    "侵略!_イカ娘",
    "侵略！イカ娘",
    "俺の妹がこんなに可愛いわけがない",
    "俺の妹がこんなに可愛いわけがない。",
    "俺の彼女と幼なじみが修羅場すぎる",
    "俺を好きなのはお前だけかよ",
    "偽物語",
    "傷物語",
    "八月のシンデレラナイン",
    "冴えない彼女の育てかた",
    "刀語",
    "初音ミク",
    "劇場版 あの日見た花の名前を僕達はまだ知らない。",
    "劇場版 ダンジョンに出会いを求めるのは間違っているだろうか ―オリオンの矢―",
    "劇場版 ハイスクール・フリート",
    "劇場版 魔法少女まどか☆マギカ",
    "劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語",
    "劇場版 魔法科高校の劣等生 星を呼ぶ少女",
    "劇場版「SHIROBAKO」",
    "劇場版「きんいろモザイクThank you!!」",
    "化物語",
    "咲-Saki- 全国編",
    "夏色キセキ",
    "学戦都市アスタリスク",
    "怪獣娘（黒）",
    "恋と選挙とチョコレート",
    "恋愛ラボ",
    "映画「けいおん！」",
    "生徒会の一存 Lv.2",
    "百花繚乱 サムライガールズ",
    "百花繚乱 サムライブライド",
    "神様のメモ帳",
    "私、能力は平均値でって言ったよね！",
    "結城友奈は勇者である",
    "結城友奈は勇者である -鷲尾須美の章-_-勇者の章-",
    "電波女と青春男",
    "魔法使いの夜",
    "魔法少女まどか☆マギカ",
    "魔法科高校の劣等生 来訪者編"
];

const gallerySeriesByDate = [
    "グリッドマン ユニバース",
    "SSSS.GRIDMAN",
    "TVアニメ「かぐや様は告らせたい-ウルトラロマンティック-」",
    "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
    "劇場版 魔法少女まどか☆マギカ[新編]叛逆の物語",
    "劇場版 魔法少女まどか☆マギカ",
    "魔法少女まどか☆マギカ",
    "ガールズ＆パンツァー 最終章",
    "ガールズ＆パンツァー　劇場版",
    "ガールズ＆パンツァー",
    "劇場版「きんいろモザイクThank you!!」",
    "きんいろモザイク Pretty Days",
    "ハロー！！きんいろモザイク",
    "きんいろモザイク",
    "映画「けいおん！」",
    "けいおん！！Part.2",
    "けいおん！！",
    "けいおん！Part2",
    "けいおん！",
    "ダンジョンに出会いを求めるのは間違っているだろうかⅢ",
    "ダンジョンに出会いを求めるのは間違っているだろうかⅡ",
    "劇場版 ダンジョンに出会いを求めるのは間違っているだろうか ―オリオンの矢―",
    "おちこぼれフルーツタルト",
    "劇場版 あの日見た花の名前を僕達はまだ知らない。",
    "あの日見た花の名前を僕達はまだ知らない。",
    "NEW GAME!!",
    "NEW GAME!",
    "魔法科高校の劣等生 来訪者編",
    "劇場版 魔法科高校の劣等生 星を呼ぶ少女",
    "俺の妹がこんなに可愛いわけがない",
    "俺の妹がこんなに可愛いわけがない。",
    "やはり俺の青春ラブコメはまちがっている。完",
    "やはり俺の青春ラブコメはまちがっている。続",
    "やはり俺の青春ラブコメはまちがっている。",
    "初音ミク",
    "傷物語",
    "_物語_シリーズ",
    "_物語_シリーズ セカンドシーズン",
    "偽物語",
    "化物語",
    "とある科学の超電磁砲T",
    "とある科学の超電磁砲＆とある科学の超電磁砲Ｓ",
    "ネコぱら",
    "私、能力は平均値でって言ったよね！",
    "俺を好きなのはお前だけかよ",
    "ましろ色シンフォニー",
    "ゆるゆり、",
    "ゆるゆり　なちゅやちゅみ！",
    "ゆるゆり♪♪",
    "ゆるゆり",
    "ぼくたちは勉強ができない！",
    "劇場版「SHIROBAKO」",
    "SHIROBAKO",
    "まちカドまぞく",
    "ゆるキャン△",
    "五等分の花嫁",
    "劇場版 ハイスクール・フリート",
    "ハイスクール・フリート",
    "グランベルム",
    "結城友奈は勇者である -鷲尾須美の章-_-勇者の章-",
    "結城友奈は勇者である",
    "がっこうぐらし！",
    "八月のシンデレラナイン",
    "Aチャンネル",
    "ひだまりスケッチ",
    "ひだまりスケッチ×ハニカム",
    "ハナヤマタ",
    "ケムリクサ",
    "ゾンビランドサガ",
    "RELEASE THE SPYCE",
    "はたらく細胞",
    "ポプテピピック",
    "STEINS;GATE",
    "ハイスクールＤ×Ｄ HERO",
    "ハイスクールＤ×Ｄ ＢｏｒＮ",
    "とらドラ！",
    "怪獣娘（黒）",
    "エロマンガ先生",
    "ノーゲーム・ノーライフ ゼロ",
    "フレームアームズ・ガール",
    "ハンドシェイカー",
    "学戦都市アスタリスク",
    "WORKING!!!",
    "WORKING´!!",
    "WORKING！！",
    "ささみさん＠がんばらない",
    "咲-Saki- 全国編",
    "恋愛ラボ",
    "冴えない彼女の育てかた",
    "カードキャプターさくら",
    "百花繚乱 サムライブライド",
    "百花繚乱 サムライガールズ",
    "アマガミSS+ plus",
    "みなみけ",
    "俺の彼女と幼なじみが修羅場すぎる",
    "さくら荘のペットな彼女",
    "魔法使いの夜",
    "恋と選挙とチョコレート",
    "ココロネクト",
    "生徒会の一存 Lv.2",
    "AKB0048",
    "夏色キセキ",
    "侵略!_イカ娘",
    "侵略！イカ娘",
    "神様のメモ帳",
    "カーニバル・ファンタズム",
    "まよチキ！",
    "電波女と青春男",
    "オオカミさんと七人の仲間たち",
    "刀語",
    "ClariS"
];

const FOLDER_ICON = 'folder-vector-icon-png_260858.jpg';
const GALLERY_BASE = '官方卡圖';
const EFFECT_BASE = '效果';
const COLORS = ['赤', '青', '黄', '緑', '紫', '白', '黒'];
const cardUIImages = {
    red_character_num: "img/紅色有數字.png",
    red_character_nonum: "img/紅色沒數字.png",
    red_event: "img/紅色事件.png",
    red_support: "img/紅色裝備.png",

    blue_character_num: "img/藍色有數字.png",
    blue_character_nonum: "img/藍色沒數字.png",
    blue_event: "img/藍色事件.png",
    blue_support: "img/藍色裝備.png",

    green_character_num: "img/綠色有數字.png",
    green_character_nonum: "img/綠色沒數字.png",
    green_event: "img/綠色事件.png",
    green_support: "img/綠色裝備.png",

    yellow_character_num: "img/黃色有數字.png",
    yellow_character_nonum: "img/黃色沒數字.png",
    yellow_event: "img/黃色事件.png",
    yellow_support: "img/黃色裝備.png",

    purple_character_num: "img/紫色有數字.png",
    purple_character_nonum: "img/紫色沒數字.png",
    purple_event: "img/紫色事件.png",
    purple_support: "img/紫色裝備.png"
};

const allKeywords = [
    { id: 'ex', name: 'EXカード', hasNumber: false, group: 'event_choice' },
    { id: 'break', name: 'ブレイク', hasNumber: false, group: 'event_choice' },
    { id: 'lvlup', name: 'レベルアップ', hasNumber: false, group: 'combi_lvl' },
    { id: 'combi', name: 'コンビ', hasNumber: false, group: 'combi_lvl' },
    { id: 'active', name: 'アクティブ', hasNumber: false, group: null },
    { id: 'kyoin', name: '強引', hasNumber: false, group: null },
    { id: 'gaman', name: '我慢', hasNumber: false, group: null },
    { id: 'toppa', name: '突破', hasNumber: true, defaultVal: 30, group: null },
    { id: 'tennen', name: '天然', hasNumber: true, defaultVal: 0, group: null },
    { id: 'free', name: '自由登場', hasNumber: false, group: null },
    { id: 'renkei', name: '連携：「」', hasText: true, group: null, customText: '〔連携：「」〕' },
    { id: 'keisho', name: '継承▶「」', hasText: true, group: null, customText: '〔継承〕▶「」' },
    { id: 'chiryaku', name: '知略 ▶「」', hasText: true, group: null, customText: '〔知略 ▶「」〕' },
    { id: 'ccsakura', name: 'カードキャプター', hasNumber: false, group: null },
];

const allowedKeywordsByType = {
    character_num: ['kyoin', 'gaman', 'ex', 'active', 'lvlup', 'tennen', 'toppa', 'combi','free', 'renkei', 'keisho', 'chiryaku', 'ccsakura'],
    character_nonum: [ 'ex', 'lvlup','combi','free', 'chiryaku'],
    event: ['ex', 'break'],
    support: ['ex']
};

let currentTagState = {
    group1: null,
    group2: null
};

function initTagButtons() {
    const tagButtons = document.querySelectorAll('.tag-btn');
    if (tagButtons.length === 0) return;

    tagButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const group = btn.dataset.group;
            const text = btn.dataset.text;
            let imgSrc = btn.dataset.imgSrc;
            if (btn.dataset.num !== undefined) {
                imgSrc = `img/num_${btn.dataset.num}.png`;
            }
            let currentVal = cardEffectInput.value;

            const insertContent = imgSrc 
                ? `<img src="${imgSrc}" class="inline-effect-icon">` 
                : text;

            if (group === '3') {
                if (currentVal.length > 0 && !currentVal.endsWith('\n')) {
                    currentVal += '\n';
                }
                currentVal += insertContent;

            } else if (group === '4') {
                currentVal += insertContent;

            } else if (group === '1') {
                if (currentTagState.group1 && !currentTagState.group2) {
                    currentVal = currentVal.slice(0, -currentTagState.group1.length) + insertContent;
                } else if (!currentTagState.group1 && currentTagState.group2) {
                    const tag2Len = currentTagState.group2.length;
                    const beforeTag2 = currentVal.slice(0, -tag2Len);
                    currentVal = beforeTag2 + insertContent + currentTagState.group2;
                    
                    currentTagState.group1 = null;
                    currentTagState.group2 = null;
                    cardEffectInput.value = currentVal;
                    updatePreview();
                    return;
                } else {
                    if (currentVal.length > 0 && !currentVal.endsWith('\n')) {
                        currentVal += '\n';
                    }
                    currentVal += insertContent;
                    currentTagState.group2 = null;
                }
                currentTagState.group1 = insertContent;

            } else if (group === '2') {
                if (currentTagState.group2) {
                    currentVal = currentVal.slice(0, -currentTagState.group2.length) + insertContent;
                } else {
                    if (!currentTagState.group1 && currentVal.length > 0 && !currentVal.endsWith('\n')) {
                        currentVal += '\n';
                    }
                    currentVal += insertContent;
                }
                currentTagState.group2 = insertContent;

                if (currentTagState.group1) {
                    currentTagState.group1 = null;
                    currentTagState.group2 = null;
                }
            }

            cardEffectInput.value = currentVal;
            updatePreview();
        });
    });

    cardEffectInput.addEventListener('input', () => {
        currentTagState.group1 = null;
        currentTagState.group2 = null;
    });
}

const cardColorInput = document.getElementById('cardColor');
const cardTypeInput = document.getElementById('cardType');
const cardNameInput = document.getElementById('cardName');
const statCInput = document.getElementById('statC');
const statSInput = document.getElementById('statS');
const statAPInput = document.getElementById('statAP');
const statDPInput = document.getElementById('statDP');
const cardEffectInput = document.getElementById('cardEffect');
const keywordListContainer = document.getElementById('keywordList');
const transparentEffectCb = document.getElementById('transparentEffectCb');
const effectBg = document.getElementById('effectBg');
const cardPreview = document.getElementById('cardPreview');
const uiFrameImg = document.getElementById('uiFrameImg');
const bgImg = document.getElementById('bgImg');
const prevEffect = document.getElementById('prevEffect');
const prevCost = document.getElementById('prevCost');
const prevSource = document.getElementById('prevSource');
const prevAP = document.getElementById('prevAP');
const prevDP = document.getElementById('prevDP');
const prevName = document.getElementById('prevName');
const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const resetImgBtn = document.getElementById('resetImgBtn');
const clearImgBtn = document.getElementById('clearImgBtn');
const downloadBtn = document.getElementById('downloadBtn');
const rotateImgBtn = document.getElementById('rotateImgBtn');
const uploadCropModal = document.getElementById('uploadCropModal');
const uploadCropImg = document.getElementById('uploadCropImg');
const uploadCropBox = document.getElementById('uploadCropBox');
const uploadCropStage = document.getElementById('uploadCropStage');
const uploadCropConfirm = document.getElementById('uploadCropConfirm');
const uploadCropCancel = document.getElementById('uploadCropCancel');
const cardNumberInput = document.getElementById('cardNumber');
const prevNumber = document.getElementById('prevNumber');

let currentGallerySort = 'date'; /*預設資料夾排序，可以改成name*/ 

let imgState = {
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotation: 0,
    isDragging: false,
    startX: 0,
    startY: 0
};

let cropState = {
    active: false,
    x: 0, y: 0, w: 0, h: 0,
    dragMode: null,
    startX: 0, startY: 0,
    startBox: null,
    savedImgState: null
};

let uploadCropState = {
    x: 0, y: 0, w: 0, h: 0,
    dragMode: null,
    startX: 0, startY: 0,
    startBox: null
};

function getCurrentGallerySeries() {
    return currentGallerySort === 'name' ? gallerySeriesByName : gallerySeriesByDate;
}

function applyImageTransform() {
    bgImg.style.transform = `translate(${imgState.translateX}px, ${imgState.translateY}px) scale(${imgState.scale}) rotate(${imgState.rotation}deg)`;
}

function resetImageTransform() {
    imgState.scale = 1;
    imgState.translateX = 0;
    imgState.translateY = 0;
    imgState.rotation = 0;
    applyImageTransform();
}

function rotateImage() {
    if (bgImg.style.display === 'none' || !bgImg.src) return;
    imgState.rotation = (imgState.rotation - 90) % 360;
    applyImageTransform();
}

function clearImage() {
    bgImg.src = '';
    bgImg.style.display = 'none';
    imageInput.value = '';
    resetImageTransform();
}

function initStepperControls() {
    const steppers = document.querySelectorAll('.number-img-stepper');
    
    steppers.forEach(stepper => {
        const btnUp = stepper.querySelector('.btn-up');
        const btnDown = stepper.querySelector('.btn-down');
        const displayBtn = stepper.querySelector('.stepper-display-btn');
        const displayVal = stepper.querySelector('.stepper-val');

        let currentNum = parseInt(displayBtn.dataset.num || '6', 10);

        btnUp.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentNum < 10) {
                currentNum++;
                displayBtn.dataset.num = currentNum;
                displayVal.textContent = currentNum;
            }
        });

        btnDown.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentNum > 0) {
                currentNum--;
                displayBtn.dataset.num = currentNum;
                displayVal.textContent = currentNum;
            }
        });
    });
}

function initImageControls() {
    cardPreview.addEventListener('mousedown', (e) => {
        if (bgImg.style.display === 'none' || !bgImg.src) return;
        imgState.isDragging = true;
        imgState.startX = e.clientX - imgState.translateX;
        imgState.startY = e.clientY - imgState.translateY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!imgState.isDragging) return;
        imgState.translateX = e.clientX - imgState.startX;
        imgState.translateY = e.clientY - imgState.startY;
        applyImageTransform();
    });

    window.addEventListener('mouseup', () => {
        imgState.isDragging = false;
    });

    cardPreview.addEventListener('wheel', (e) => {
        if (bgImg.style.display === 'none' || !bgImg.src) return;
        e.preventDefault();

        const zoomFactor = 0.08;
        if (e.deltaY < 0) {
            imgState.scale += zoomFactor;
        } else {
            imgState.scale = Math.max(0.1, imgState.scale - zoomFactor);
        }
        applyImageTransform();
    }, { passive: false });

    cardPreview.addEventListener('touchstart', (e) => {
        if (bgImg.style.display === 'none' || !bgImg.src) return;
        if (e.touches.length === 1) {
            imgState.isDragging = true;
            imgState.startX = e.touches[0].clientX - imgState.translateX;
            imgState.startY = e.touches[0].clientY - imgState.translateY;
        }
    });

    cardPreview.addEventListener('touchmove', (e) => {
        if (!imgState.isDragging || e.touches.length !== 1) return;
        imgState.translateX = e.touches[0].clientX - imgState.startX;
        imgState.translateY = e.touches[0].clientY - imgState.startY;
        applyImageTransform();
    });

    cardPreview.addEventListener('touchend', () => {
        imgState.isDragging = false;
    });

    resetImgBtn.addEventListener('click', resetImageTransform);
    clearImgBtn.addEventListener('click', clearImage);
    if (rotateImgBtn) {
        rotateImgBtn.addEventListener('click', rotateImage);
    }
}

function getFittedDimensions(imgNW, imgNH, boxW, boxH, objectFit) {
    if (objectFit === 'cover') {
        const s = Math.max(boxW / imgNW, boxH / imgNH);
        return { w: imgNW * s, h: imgNH * s };
    } else if (objectFit === 'contain') {
        const s = Math.min(boxW / imgNW, boxH / imgNH);
        return { w: imgNW * s, h: imgNH * s };
    } else {
        return { w: boxW, h: boxH };
    }
}

async function bakeCardImage() {
    const origBgImg = document.getElementById('bgImg');
    const origPreview = document.getElementById('cardPreview');

    if (!origBgImg || !origBgImg.src || origBgImg.style.display === 'none' || !origBgImg.naturalWidth) {
        return null;
    }

    const boxW = origPreview.offsetWidth;
    const boxH = origPreview.offsetHeight;

    const scaleFactor = 2;
    const canvas = document.createElement('canvas');
    canvas.width = boxW * scaleFactor;
    canvas.height = boxH * scaleFactor;
    const ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);

    const computedStyle = window.getComputedStyle(origBgImg);
    const objectFit = computedStyle.objectFit || 'cover';
    const imgNW = origBgImg.naturalWidth;
    const imgNH = origBgImg.naturalHeight;
    const { w: renderW, h: renderH } = getFittedDimensions(imgNW, imgNH, boxW, boxH, objectFit);

    ctx.translate(boxW / 2 + imgState.translateX, boxH / 2 + imgState.translateY);
    ctx.rotate((imgState.rotation * Math.PI) / 180);
    ctx.scale(imgState.scale, imgState.scale);
    ctx.drawImage(origBgImg, -renderW / 2, -renderH / 2, renderW, renderH);

    // 等圖片真的載入完成，避免 html2canvas 提前截圖
    const dataUrl = canvas.toDataURL('image/png');
    await new Promise((resolve) => {
        const test = new Image();
        test.onload = resolve;
        test.onerror = resolve;
        test.src = dataUrl;
    });

    return dataUrl;
}

function waitForImage(imgElement) {
    return new Promise((resolve) => {
        if (imgElement.complete && imgElement.naturalWidth > 0) {
            resolve();
        } else {
            imgElement.onload = resolve;
            imgElement.onerror = resolve;
        }
    });
}

async function generateCardImageData() {
    const cardPreview = document.getElementById('cardPreview');
    
    await waitForImage(bgImg);

    const bakedCardImage = await bakeCardImage();
    const bakedFeatureImages = await bakeAllFeatureSlots();

    const canvas = await html2canvas(cardPreview, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        onclone: (clonedDoc) => {
            if (bakedCardImage) {
                const clonedBgImg = clonedDoc.getElementById('bgImg');
                if (clonedBgImg) {
                    clonedBgImg.src = bakedCardImage;
                    clonedBgImg.style.transform = 'none';
                    clonedBgImg.style.top = '0';
                    clonedBgImg.style.left = '0';
                    clonedBgImg.style.width = '100%';
                    clonedBgImg.style.height = '100%';
                    clonedBgImg.style.objectFit = 'fill';
                }
            }

            const clonedSlots = clonedDoc.querySelectorAll('.feature-box-slot');
            clonedSlots.forEach((slot, i) => {
                const baked = bakedFeatureImages[i];
                if (!baked || !baked.dataUrl) return;
                slot.innerHTML = '';
                const img = clonedDoc.createElement('img');
                img.src = baked.dataUrl;
                img.style.display = 'block';
                img.style.width = baked.width + 'px';
                img.style.height = baked.height + 'px';
                slot.appendChild(img);
            });
        }
    });
    return canvas.toDataURL('image/png');
}

async function downloadCard() {
    downloadBtn.disabled = true;
    downloadBtn.textContent = '輸出中...';

    try {
        const imageUrl = await generateCardImageData();
        const cardName = cardNameInput.value.trim() || 'CustomCard';
        const fileName = `${cardName}_${Date.now()}.png`;

        if (typeof showExportModal === 'function') {
            showExportModal(imageUrl, fileName);
        }

        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(afterDownloadAdvance, 0);
    } catch (err) {
        console.error('下載圖片失敗:', err);
        alert('下載失敗：' + (err.message || err) + '\n請按 F12 查看 Console 詳細訊息。');
    } finally {
        downloadBtn.disabled = false;
        downloadBtn.textContent = '下載卡圖';
    }
}

async function exportAllCards() {
    if (!batch.active || batch.cards.length === 0) return;

    const total = batch.cards.length;
    if (!confirm(`即將依序下載 ${total} 張卡片，下載過程中請不要操作網頁，確定嗎？`)) return;

    const exportBtn = document.getElementById('exportAllBtn');
    exportBtn.disabled = true;
    
    const prevBtn = document.getElementById('batchPrevBtn');
    const nextBtn = document.getElementById('batchNextBtn');
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    try {
        saveCurrentCard();

        for (let i = 0; i < total; i++) {
            exportBtn.textContent = `匯出中 (${i + 1}/${total})...`;
            
            goTo(i);
            
            await new Promise(r => setTimeout(r, 150));
            await waitForImage(bgImg);

            const imageUrl = await generateCardImageData();
            const cardName = batch.cards[i].name || `Card_${i + 1}`;
            const safeName = cardName.replace(/[\\/:*?"<>|]/g, '_');
            const fileName = `${safeName}_${i + 1}.png`;

            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            await new Promise(r => setTimeout(r, 800));
        }

        alert(`已匯出 ${total} 張卡片！`);
    } catch (err) {
        console.error('批次匯出失敗:', err);
        alert('批次匯出失敗：' + (err.message || err));
    } finally {
        exportBtn.disabled = false;
        exportBtn.textContent = '批次匯出全部';
        updateBatchUI();
    }
}

function initGallerySortButtons() {
    const sortNameBtn = document.getElementById('sortByName');
    const sortDateBtn = document.getElementById('sortByDate');

    if (!sortNameBtn || !sortDateBtn) return;

    sortNameBtn.addEventListener('click', () => {
        currentGallerySort = 'name';
        renderGallerySeriesList();
    });

    sortDateBtn.addEventListener('click', () => {
        currentGallerySort = 'date';
        renderGallerySeriesList();
    });
}

function updateGallerySortButtons() {
    const sortNameBtn = document.getElementById('sortByName');
    const sortDateBtn = document.getElementById('sortByDate');

    if (!sortNameBtn || !sortDateBtn) return;

    if (currentGallerySort === 'name') {
        sortNameBtn.classList.add('active');
        sortDateBtn.classList.remove('active');
    } else {
        sortDateBtn.classList.add('active');
        sortNameBtn.classList.remove('active');
    }
}

function renderGallerySeriesList() {
    const list = document.getElementById('gallerySeriesList');
    if (!list) return;
    list.innerHTML = '';

    const seriesArray = getCurrentGallerySeries();

    seriesArray.forEach(seriesName => {
        const folder = document.createElement('div');
        folder.className = 'series-folder';

        const img = document.createElement('img');
        img.src = FOLDER_ICON;
        img.alt = seriesName;
        folder.appendChild(img);

        const name = document.createElement('div');
        name.className = 'folder-name';
        name.textContent = seriesName;
        folder.appendChild(name);

        folder.addEventListener('click', () => openSeries(seriesName));

        list.appendChild(folder);
    });

    updateGallerySortButtons();
}

const galleryCardsCache = {};
const cardInfoCache = {};

let currentGallerySeriesName = '';
let currentGalleryFiles = [];
let currentGalleryIndex = -1;

async function loadSeriesCards(seriesName) {
    if (galleryCardsCache[seriesName]) {
        return galleryCardsCache[seriesName];
    }

    const url = GALLERY_BASE + '/' + encodeURIComponent(seriesName) + '/list.txt';

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('找不到 list.txt');

        const text = await res.text();
        const files = text.split('\n')
            .map(line => line.trim())
            .filter(line => /\.(jpg|jpeg|png|gif|webp)$/i.test(line));

        galleryCardsCache[seriesName] = files;
        return files;
    } catch (err) {
        console.warn(`讀取 ${seriesName} 的 list.txt 失敗：`, err);
        galleryCardsCache[seriesName] = [];
        return [];
    }
}

async function getCardInfo(seriesName, fileName) {
    const cacheKey = seriesName + '::' + fileName;
    if (cardInfoCache[cacheKey]) return cardInfoCache[cacheKey];

    const baseName = fileName.replace(/\.[^.]+$/, '');
    const cardId = baseName.split('_').pop();

    const infoUrl = `${EFFECT_BASE}/${encodeURIComponent(seriesName)}/${encodeURIComponent(cardId)}-info.txt`;

    let rarity = '', number = cardId, cost = '', source = '', type = '', name = '', color = '', feature = '', ap = '', dp = '';
    let effect = '';

    

    try {
        const res = await fetch(infoUrl);
        if (res.ok) {
            const text = (await res.text()).trim();
            const parts = text.split(/\s+/);

            rarity = parts[0] || '';
            number = parts[1] || '';
            cost   = parts[2] || '';
            source = parts[3] || '';
            type   = parts[4] || '';

            dp = parts[parts.length - 1] || '';
            ap = parts[parts.length - 2] || '';

            let colorIndex = -1;
            for (let i = parts.length - 3; i >= 5; i--) {
                if (COLORS.includes(parts[i])) {
                    colorIndex = i;
                    break;
                }
            }

            if (colorIndex !== -1) {
                name    = parts.slice(5, colorIndex).join(' ');
                color   = parts[colorIndex];
                feature = parts.slice(colorIndex + 1, parts.length - 2).join(' ');
            } else {
                name    = parts.slice(5, parts.length - 4).join(' ');
                color   = parts[parts.length - 4] || '';
                feature = parts[parts.length - 3] || '';
            }
        }
    } catch (err) {
        console.warn('讀取 info.txt 失敗：', err);
    }

    if (name) {
        const safeName = name.replace(/[\\/:*?"<>|]/g, '_');
        const effectUrl = `${EFFECT_BASE}/${encodeURIComponent(seriesName)}/${encodeURIComponent(cardId + '-' + safeName)}.txt`;
        try {
            const res2 = await fetch(effectUrl);
            if (res2.ok) {
                effect = (await res2.text()).trim();
            }
        } catch (err) {
            console.warn('讀取效果文失敗：', err);
        }
    }
        cardInfoCache[cacheKey] = { rarity, number, cost, source, type, name, color, feature, ap, dp, effect };
    return { rarity, number, cost, source, type, name, color, feature, ap, dp, effect };
}

let currentGalleryCardsData = [];

async function openSeries(seriesName) {
    const seriesView = document.getElementById('gallerySeriesView');
    const cardsView = document.getElementById('galleryCardsView');
    const title = document.getElementById('galleryCardsTitle');
    const list = document.getElementById('galleryCardsList');

    title.textContent = seriesName;
    list.innerHTML = '<p style="color:#888;">載入卡片資料中...</p>';

    seriesView.style.display = 'none';
    cardsView.style.display = 'block';
    window.scrollTo(0, 0);

    const toggleBtn = document.getElementById('gotoGalleryBtn');
    toggleBtn.textContent = '回上一頁';
    toggleBtn.dataset.mode = 'backToSeries';

    const filterColor = document.getElementById('filterColor');
    const filterType = document.getElementById('filterType');
    const gallerySearch = document.getElementById('gallerySearch');
    if (filterColor) filterColor.value = '';
    if (filterType) filterType.value = '';
    if (gallerySearch) gallerySearch.value = '';

    const files = await loadSeriesCards(seriesName);

    currentGallerySeriesName = seriesName;
    currentGalleryFiles = files;
    currentGalleryIndex = -1;

    if (files.length === 0) {
        list.innerHTML = '<p style="color:#888;">這個系列目前沒有圖片，或 list.txt 不存在。</p>';
        currentGalleryCardsData = [];
        return;
    }

    const cardsData = await Promise.all(
        files.map(async (fileName, index) => {
            const info = await getCardInfo(seriesName, fileName);
            return { fileName, index, info };
        })
    );

    currentGalleryCardsData = cardsData;
    renderGalleryCards();
}

function renderGalleryCards() {
    const list = document.getElementById('galleryCardsList');
    if (!list) return;
    list.innerHTML = '';

    const colorFilter = document.getElementById('filterColor')?.value || '';
    const typeFilter = document.getElementById('filterType')?.value || '';
    const searchText = document.getElementById('gallerySearch')?.value.trim() || '';

    const filtered = currentGalleryCardsData.filter(({ info }) => {
        if (colorFilter && info.color !== colorFilter) return false;
        if (typeFilter && info.type !== typeFilter) return false;
        if (searchText) {
            const haystack = [
                info.name, info.number, info.feature,
                info.effect, info.rarity, info.color, info.type
            ].join(' ');
            if (!haystack.includes(searchText)) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        list.innerHTML = '<p style="color:#888;">沒有符合條件的卡片。</p>';
        return;
    }

    filtered.forEach(({ fileName, index }) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.style.cursor = 'pointer';

        const imgSrc = GALLERY_BASE + '/' + encodeURIComponent(currentGallerySeriesName) + '/' + encodeURIComponent(fileName);

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = fileName;
        img.loading = 'lazy';
        card.appendChild(img);

        const cap = document.createElement('div');
        cap.className = 'card-caption';
        cap.textContent = fileName;
        card.appendChild(cap);

        card.addEventListener('click', () => {
            currentGalleryIndex = index;
            showCardAt(index);
        });

        list.appendChild(card);
    });
}

function initGalleryFilters() {
    const filterColor = document.getElementById('filterColor');
    const filterType = document.getElementById('filterType');
    const gallerySearch = document.getElementById('gallerySearch');

    if (filterColor) filterColor.addEventListener('change', renderGalleryCards);
    if (filterType) filterType.addEventListener('change', renderGalleryCards);
    if (gallerySearch) {
        gallerySearch.addEventListener('input', renderGalleryCards);
    }
}

function backToSeriesList() {
    const seriesView = document.getElementById('gallerySeriesView');
    const cardsView = document.getElementById('galleryCardsView');

    cardsView.style.display = 'none';
    seriesView.style.display = 'block';

    const toggleBtn = document.getElementById('gotoGalleryBtn');
    toggleBtn.textContent = '卡片自製器';
    toggleBtn.dataset.mode = '';
    window.scrollTo(0, 0);
}

function init() {
    cardColorInput.addEventListener('change', updatePreview);
    cardTypeInput.addEventListener('change', () => {
        renderKeywords();
        handleNumberState();
        updatePreview();
    });

    if (transparentEffectCb) {
        transparentEffectCb.addEventListener('change', updatePreview);
    }

    cardNameInput.addEventListener('input', updatePreview);
    cardNumberInput.addEventListener('input', updatePreview);
    statCInput.addEventListener('input', updatePreview);
    statSInput.addEventListener('input', updatePreview);
    statAPInput.addEventListener('input', updatePreview);
    statDPInput.addEventListener('input', updatePreview);
    cardEffectInput.addEventListener('input', updatePreview);

    uploadBtn.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', handleImageUpload);
    downloadBtn.addEventListener('click', downloadCard);

    initImageControls();
    initUploadCropControls();
    initTagButtons();
    initStepperControls();
    renderKeywords();
    handleNumberState();
    updatePreview();
    initPageNavigation();
    initGallerySortButtons();
    renderGallerySeriesList();
    initGalleryFilters();
    initCardModal();
    initBatchImport();
    initFeatureControls();
}

function handleNumberState() {
    const currentType = cardTypeInput.value;
    const hasNumber = (currentType === 'character_num');
    const isCharacter = (currentType === 'character_num' || currentType === 'character_nonum');
    statAPInput.disabled = !hasNumber;
    statDPInput.disabled = !hasNumber;
    const charOnlyBtns = document.querySelectorAll('.character-only-btn');
    charOnlyBtns.forEach(btn => {
        btn.style.display = isCharacter ? 'inline-block' : 'none';
    });
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    openUploadCropModal(file);
    e.target.value = '';
}

function openUploadCropModal(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        uploadCropModal.classList.add('open');
        uploadCropImg.src = event.target.result;

        const trySetupBox = (retry = 0) => {
            const rw = uploadCropImg.offsetWidth;
            const rh = uploadCropImg.offsetHeight;

            if ((rw === 0 || rh === 0) && retry < 30) {
                requestAnimationFrame(() => trySetupBox(retry + 1));
                return;
            }

            uploadCropState.x = 0;
            uploadCropState.y = 0;
            uploadCropState.w = rw;
            uploadCropState.h = rh;
            updateUploadCropBoxUI();

            console.log('裁切框初始化：', { rw, rh, naturalW: uploadCropImg.naturalWidth, naturalH: uploadCropImg.naturalHeight });
        };

        requestAnimationFrame(() => trySetupBox(0));
    };
    reader.readAsDataURL(file);
}

function updateUploadCropBoxUI() {
    uploadCropBox.style.left = uploadCropState.x + 'px';
    uploadCropBox.style.top = uploadCropState.y + 'px';
    uploadCropBox.style.width = uploadCropState.w + 'px';
    uploadCropBox.style.height = uploadCropState.h + 'px';
}

function closeUploadCropModal() {
    uploadCropModal.classList.remove('open');
    uploadCropState.dragMode = null;
    uploadCropState.startBox = null;
}

function confirmUploadCrop() {
    const rw = uploadCropImg.offsetWidth;
    const rh = uploadCropImg.offsetHeight;
    const nw = uploadCropImg.naturalWidth;
    const nh = uploadCropImg.naturalHeight;

    const scaleX = nw / rw;
    const scaleY = nh / rh;

    let sx = Math.round(uploadCropState.x * scaleX);
    let sy = Math.round(uploadCropState.y * scaleY);
    let sw = Math.round(uploadCropState.w * scaleX);
    let sh = Math.round(uploadCropState.h * scaleY);

    sx = Math.max(0, sx);
    sy = Math.max(0, sy);
    sw = Math.min(nw - sx, sw);
    sh = Math.min(nh - sy, sh);

    if (sw < 1 || sh < 1) return;

    const canvas = document.createElement('canvas');
    canvas.width = sw;
    canvas.height = sh;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(uploadCropImg, sx, sy, sw, sh, 0, 0, sw, sh);

    bgImg.src = canvas.toDataURL('image/png');
    bgImg.style.display = 'block';
    resetImageTransform();

    closeUploadCropModal();
}

function initUploadCropControls() {
    if (!uploadCropModal) return;

    uploadCropConfirm.addEventListener('click', confirmUploadCrop);
    uploadCropCancel.addEventListener('click', closeUploadCropModal);

    const backdrop = uploadCropModal.querySelector('.upload-crop-backdrop');
    backdrop.addEventListener('click', closeUploadCropModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && uploadCropModal.classList.contains('open')) {
            closeUploadCropModal();
        }
    });

    // 拖曳裁切框
    uploadCropBox.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('crop-handle')) return;
        e.preventDefault();
        e.stopPropagation();
        uploadCropState.dragMode = 'move';
        uploadCropState.startX = e.clientX;
        uploadCropState.startY = e.clientY;
        uploadCropState.startBox = { x: uploadCropState.x, y: uploadCropState.y, w: uploadCropState.w, h: uploadCropState.h };
    });

    uploadCropBox.querySelectorAll('.crop-handle').forEach(h => {
        h.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadCropState.dragMode = h.dataset.handle;
            uploadCropState.startX = e.clientX;
            uploadCropState.startY = e.clientY;
            uploadCropState.startBox = { x: uploadCropState.x, y: uploadCropState.y, w: uploadCropState.w, h: uploadCropState.h };
        });
    });

    window.addEventListener('mousemove', (e) => {
        if (!uploadCropModal.classList.contains('open') || !uploadCropState.dragMode) return;

        const dx = e.clientX - uploadCropState.startX;
        const dy = e.clientY - uploadCropState.startY;
        const sb = uploadCropState.startBox;
        const boxW = uploadCropImg.offsetWidth;
        const boxH = uploadCropImg.offsetHeight;
        const MIN = 20;

        if (uploadCropState.dragMode === 'move') {
            uploadCropState.x = Math.max(0, Math.min(boxW - sb.w, sb.x + dx));
            uploadCropState.y = Math.max(0, Math.min(boxH - sb.h, sb.y + dy));
        } else {
            let x1 = sb.x, y1 = sb.y, x2 = sb.x + sb.w, y2 = sb.y + sb.h;
            if (uploadCropState.dragMode.includes('w')) x1 = sb.x + dx;
            if (uploadCropState.dragMode.includes('e')) x2 = sb.x + sb.w + dx;
            if (uploadCropState.dragMode.includes('n')) y1 = sb.y + dy;
            if (uploadCropState.dragMode.includes('s')) y2 = sb.y + sb.h + dy;

            x1 = Math.max(0, Math.min(boxW, x1));
            y1 = Math.max(0, Math.min(boxH, y1));
            x2 = Math.max(0, Math.min(boxW, x2));
            y2 = Math.max(0, Math.min(boxH, y2));

            if (x2 - x1 < MIN) {
                if (uploadCropState.dragMode.includes('w')) x1 = x2 - MIN;
                else x2 = x1 + MIN;
            }
            if (y2 - y1 < MIN) {
                if (uploadCropState.dragMode.includes('n')) y1 = y2 - MIN;
                else y2 = y1 + MIN;
            }

            uploadCropState.x = x1;
            uploadCropState.y = y1;
            uploadCropState.w = x2 - x1;
            uploadCropState.h = y2 - y1;
        }

        updateUploadCropBoxUI();
    });

    window.addEventListener('mouseup', () => {
        uploadCropState.dragMode = null;
        uploadCropState.startBox = null;
    });

    // 觸控支援
    uploadCropBox.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('crop-handle')) return;
        e.preventDefault();
        uploadCropState.dragMode = 'move';
        uploadCropState.startX = e.touches[0].clientX;
        uploadCropState.startY = e.touches[0].clientY;
        uploadCropState.startBox = { x: uploadCropState.x, y: uploadCropState.y, w: uploadCropState.w, h: uploadCropState.h };
    }, { passive: false });

    uploadCropBox.querySelectorAll('.crop-handle').forEach(h => {
        h.addEventListener('touchstart', (e) => {
            e.preventDefault();
            uploadCropState.dragMode = h.dataset.handle;
            uploadCropState.startX = e.touches[0].clientX;
            uploadCropState.startY = e.touches[0].clientY;
            uploadCropState.startBox = { x: uploadCropState.x, y: uploadCropState.y, w: uploadCropState.w, h: uploadCropState.h };
        }, { passive: false });
    });

    window.addEventListener('touchmove', (e) => {
        if (!uploadCropModal.classList.contains('open') || !uploadCropState.dragMode || e.touches.length !== 1) return;
        e.preventDefault();

        const dx = e.touches[0].clientX - uploadCropState.startX;
        const dy = e.touches[0].clientY - uploadCropState.startY;
        const sb = uploadCropState.startBox;
        const boxW = uploadCropImg.offsetWidth;
        const boxH = uploadCropImg.offsetHeight;
        const MIN = 20;

        if (uploadCropState.dragMode === 'move') {
            uploadCropState.x = Math.max(0, Math.min(boxW - sb.w, sb.x + dx));
            uploadCropState.y = Math.max(0, Math.min(boxH - sb.h, sb.y + dy));
        } else {
            let x1 = sb.x, y1 = sb.y, x2 = sb.x + sb.w, y2 = sb.y + sb.h;
            if (uploadCropState.dragMode.includes('w')) x1 = sb.x + dx;
            if (uploadCropState.dragMode.includes('e')) x2 = sb.x + sb.w + dx;
            if (uploadCropState.dragMode.includes('n')) y1 = sb.y + dy;
            if (uploadCropState.dragMode.includes('s')) y2 = sb.y + sb.h + dy;

            x1 = Math.max(0, Math.min(boxW, x1));
            y1 = Math.max(0, Math.min(boxH, y1));
            x2 = Math.max(0, Math.min(boxW, x2));
            y2 = Math.max(0, Math.min(boxH, y2));

            if (x2 - x1 < MIN) {
                if (uploadCropState.dragMode.includes('w')) x1 = x2 - MIN;
                else x2 = x1 + MIN;
            }
            if (y2 - y1 < MIN) {
                if (uploadCropState.dragMode.includes('n')) y1 = y2 - MIN;
                else y2 = y1 + MIN;
            }

            uploadCropState.x = x1;
            uploadCropState.y = y1;
            uploadCropState.w = x2 - x1;
            uploadCropState.h = y2 - y1;
        }

        updateUploadCropBoxUI();
    }, { passive: false });

    window.addEventListener('touchend', () => {
        uploadCropState.dragMode = null;
        uploadCropState.startBox = null;
    });
}

// 讓輸入框寬度隨內容自動增減
function autoResizeInput(input, minWidth = 50) {
    const measure = () => {
        const span = document.createElement('span');
        const style = window.getComputedStyle(input);

        span.style.position = 'absolute';
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'pre';
        span.style.font = style.font;
        span.style.padding = style.padding;
        span.style.border = style.border;
        span.style.boxSizing = 'border-box';
        span.textContent = input.value || '';

        document.body.appendChild(span);
        const w = Math.max(span.offsetWidth, minWidth);
        document.body.removeChild(span);

        input.style.width = w + 'px';
    };

    input.addEventListener('input', measure);
    measure();
}

function renderKeywords() {
    const currentType = cardTypeInput.value;
    const allowedIds = allowedKeywordsByType[currentType] || [];
    
    const oldCustomCb = document.getElementById('customKwCheckbox');
    const oldCustomName = document.getElementById('customKwName');
    const oldCustomVal = document.getElementById('customKwVal');
    
    const savedCustomState = {
        checked: oldCustomCb ? oldCustomCb.checked : false,
        name: oldCustomName ? oldCustomName.value : '',
        val: oldCustomVal ? oldCustomVal.value : ''
    };

    keywordListContainer.innerHTML = '';
    const activeKeywords = allKeywords.filter(kw => allowedIds.includes(kw.id));

    activeKeywords.forEach(kw => {
        const label = document.createElement('label');
        label.className = 'keyword-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.id = kw.id;
        checkbox.dataset.name = kw.name;
        checkbox.dataset.group = kw.group || '';
        checkbox.addEventListener('change', handleKeywordChange);

        label.appendChild(checkbox);

        const nameSpan = document.createElement('span');
        nameSpan.textContent = kw.name;
        label.appendChild(nameSpan);

        if (kw.hasNumber) {
            const numInput = document.createElement('input');
            numInput.type = 'number';
            numInput.className = 'number-input';
            numInput.value = kw.defaultVal;
            numInput.dataset.forKw = kw.id;
            numInput.addEventListener('input', updatePreview);
            numInput.addEventListener('click', (e) => e.stopPropagation());
            label.appendChild(numInput);
        }

        if (kw.hasText) {
            const textInput = document.createElement('input');
            textInput.type = 'text';
            textInput.className = 'text-kw-input';
            textInput.dataset.forKw = kw.id;
            textInput.addEventListener('input', updatePreview);
            textInput.addEventListener('click', (e) => e.stopPropagation());
            label.appendChild(textInput);
            autoResizeInput(textInput, 50);
        }

        keywordListContainer.appendChild(label);
    });

    const customLabel = document.createElement('label');
    customLabel.className = 'keyword-item';

    const customCb = document.createElement('input');
    customCb.type = 'checkbox';
    customCb.id = 'customKwCheckbox';
    customCb.checked = savedCustomState.checked;
    customCb.addEventListener('change', updatePreview);

    const customNameInput = document.createElement('input');
    customNameInput.type = 'text';
    customNameInput.id = 'customKwName';
    customNameInput.className = 'custom-kw-input';
    customNameInput.placeholder = '自定義關鍵字';
    customNameInput.value = savedCustomState.name;
    customNameInput.addEventListener('input', updatePreview);
    customNameInput.addEventListener('click', (e) => e.stopPropagation());
    autoResizeInput(customNameInput, 80);

    const customValInput = document.createElement('input');
    customValInput.type = 'text';
    customValInput.id = 'customKwVal';
    customValInput.className = 'number-input';
    customValInput.placeholder = '數值';
    customValInput.value = savedCustomState.val;
    customValInput.addEventListener('input', updatePreview);
    customValInput.addEventListener('click', (e) => e.stopPropagation());
    autoResizeInput(customValInput, 50);
    customLabel.appendChild(customCb);
    customLabel.appendChild(customNameInput);
    customLabel.appendChild(customValInput);
    keywordListContainer.appendChild(customLabel);
}

function handleKeywordChange(e) {
    const group = e.target.dataset.group;
    
    if (group) {
        const checkboxesInGroup = keywordListContainer.querySelectorAll(`input[data-group="${group}"]`);
        const isAnyChecked = Array.from(checkboxesInGroup).some(cb => cb.checked);

        checkboxesInGroup.forEach(cb => {
            const label = cb.parentElement;
            if (isAnyChecked && !cb.checked) {
                cb.disabled = true;
                label.classList.add('disabled');
            } else if (!isAnyChecked) {
                cb.disabled = false;
                label.classList.remove('disabled');
            }
        });
    }

    updatePreview();
}

function fitEffectText(el) {
    if (!el) return;
    
    let fontSize = 9.5;
    const minFontSize = 3.5;
    el.style.fontSize = `${fontSize}px`;

    while (
        (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) &&
        fontSize > minFontSize
    ) {
        fontSize -= 0.2;
        el.style.fontSize = `${fontSize}px`;
    }
}

function fitNameText(el, selectedType) {
    if (!el) return;
    
    let fontSize = (selectedType === 'event') ? 13 : 15;
    const minFontSize = 7; 
    el.style.fontSize = `${fontSize}px`;

    if (selectedType === 'event') {
        while (el.scrollHeight > el.clientHeight && fontSize > minFontSize) {
            fontSize -= 0.5;
            el.style.fontSize = `${fontSize}px`;
        }
    } else {
        while (el.scrollWidth > el.clientWidth && fontSize > minFontSize) {
            fontSize -= 0.5;
            el.style.fontSize = `${fontSize}px`;
        }
    }
}

function updatePreview() {
    const selectedColor = cardColorInput.value;
    const selectedType = cardTypeInput.value;

    cardPreview.setAttribute('data-type', selectedType);

    const uiKey = `${selectedColor}_${selectedType}`;
    const uiPath = cardUIImages[uiKey];

    if (uiPath && uiPath.trim() !== "") {
        uiFrameImg.src = uiPath;
        uiFrameImg.style.display = 'block';
    } else {
        uiFrameImg.style.display = 'none';
    }

    if (selectedType === 'event') {
        prevEffect.className = 'card-effect vertical-mode';
        prevCost.className = 'card-stat-text cost-event';
        prevSource.className = 'card-stat-text source-event';
        prevName.className = 'card-name-text name-event';
        prevNumber.className = 'card-number-text number-event';
        prevAP.style.display = 'none';
        prevDP.style.display = 'none';
    } else if (selectedType === 'support') {
        prevEffect.className = 'card-effect horizontal-mode';
        prevCost.className = 'card-stat-text cost-normal';
        prevSource.className = 'card-stat-text source-normal';
        prevName.className = 'card-name-text name-support';
        prevNumber.className = 'card-number-text number-normal';
        prevAP.style.display = 'none';
        prevDP.style.display = 'none';
    } else {
        prevEffect.className = 'card-effect horizontal-mode';
        prevCost.className = 'card-stat-text cost-normal';
        prevSource.className = 'card-stat-text source-normal';
        prevName.className = 'card-name-text name-normal';
        prevNumber.className = 'card-number-text number-normal';

        if (selectedType === 'character_num') {
            prevAP.style.display = 'flex';
            prevDP.style.display = 'flex';
        } else {
            prevAP.style.display = 'none';
            prevDP.style.display = 'none';
        }
    }

    prevCost.textContent = statCInput.value || '0';
    prevSource.textContent = statSInput.value || '0';
    prevAP.textContent = statAPInput.value || '0';
    prevDP.textContent = statDPInput.value || '0';
    
    const nameValue = cardNameInput.value || '';
    if (selectedType === 'event') {
        prevName.innerHTML = nameValue
            .split('')
            .map(char => `<span>${char}</span>`)
            .join('');
    } else {
        prevName.textContent = nameValue;
    }
        prevNumber.textContent = cardNumberInput.value || '';


    let selectedKeywordsText = [];
    
    allKeywords.forEach(kw => {
    const cb = keywordListContainer.querySelector(`input[data-id="${kw.id}"]:checked`);
    if (cb) {
        let text;
        if (kw.customText) {
            text = kw.customText;
            // 若這個關鍵字有文字輸入框，把「」內的內容換成使用者輸入
            if (kw.hasText) {
                const textInput = keywordListContainer.querySelector(`input[data-for-kw="${kw.id}"]`);
                if (textInput) {
                    const val = textInput.value.trim();
                    text = text.replace('「」', `「${val}」`);
                }
            }
        } else {
            text = `〔${kw.name}`;
            if (kw.hasNumber) {
                const numInput = keywordListContainer.querySelector(`input[data-for-kw="${kw.id}"]`);
                if (numInput) {
                    text += numInput.value;
                }
            }
            text += `〕`;
        }
        selectedKeywordsText.push(`<b>${text}</b>`);
    }
});

    const customCb = document.getElementById('customKwCheckbox');
    const customNameInput = document.getElementById('customKwName');
    const customValInput = document.getElementById('customKwVal');

    if (customCb && customCb.checked) {
        const kwName = customNameInput ? customNameInput.value.trim() : '';
        const kwVal = customValInput ? customValInput.value.trim() : '';
        
        if (kwName !== '') {
            selectedKeywordsText.push(`<b>〔${kwName}${kwVal}〕</b>`);
        }
    }

    const userEffectText = cardEffectInput.value;
    let finalEffectContent = "";

    if (selectedKeywordsText.length > 0) {
        finalEffectContent += selectedKeywordsText.join('');
        if (userEffectText.trim() !== "") {
            finalEffectContent += "\n" + userEffectText;
        }
    } else {
        finalEffectContent = userEffectText;
    }

    prevEffect.innerHTML = finalEffectContent;

    fitEffectText(prevEffect);
    fitNameText(prevName, selectedType);

    const targetEffectBg = document.getElementById('effectBg');
    const targetTransparentCb = document.getElementById('transparentEffectCb');
    
    if (targetEffectBg && targetTransparentCb) {
        if (targetTransparentCb.checked) {
            targetEffectBg.style.display = 'none';
        } else {
            targetEffectBg.style.display = 'block';
        }
    }
}

// ===== 卡片詳情 Modal =====
const cardModal = document.getElementById('cardModal');
const cardModalClose = document.getElementById('cardModalClose');
const modalCardImg = document.getElementById('modalCardImg');
const modalRarity = document.getElementById('modalRarity');
const modalNumber = document.getElementById('modalNumber');
const modalType = document.getElementById('modalType');
const modalName = document.getElementById('modalName');
const modalFeature = document.getElementById('modalFeature');
const modalColor = document.getElementById('modalColor');
const modalCost = document.getElementById('modalCost');
const modalAP = document.getElementById('modalAP');
const modalSource = document.getElementById('modalSource');
const modalDP = document.getElementById('modalDP');
const modalEffect = document.getElementById('modalEffect');

function openCardModal(data) {
    if (!cardModal) return;
    modalCardImg.src = data.imgSrc || '';
    modalRarity.textContent = data.rarity || '';
    modalNumber.textContent = data.number || '';
    modalType.textContent = data.type || '';
    modalName.textContent = data.name || '';
    modalFeature.textContent = data.feature || '';
    modalColor.textContent = data.color || '';
    modalCost.textContent = data.cost || '';
    modalAP.textContent = data.ap || '';
    modalSource.textContent = data.source || '';
    modalDP.textContent = data.dp || '';
    modalEffect.textContent = data.effect || '';
    cardModal.classList.add('open');
}

async function showCardAt(index) {
    if (index < 0 || index >= currentGalleryFiles.length) return;

    const seriesName = currentGallerySeriesName;
    const fileName = currentGalleryFiles[index];
    const imgSrc = GALLERY_BASE + '/' + encodeURIComponent(seriesName) + '/' + encodeURIComponent(fileName);

    const info = await getCardInfo(seriesName, fileName);

    openCardModal({
        imgSrc: imgSrc,
        rarity: info.rarity,
        number: info.number,
        type: info.type,
        name: info.name,
        feature: info.feature,
        color: info.color,
        cost: info.cost,
        ap: info.ap,
        source: info.source,
        dp: info.dp,
        effect: info.effect
    });

    currentGalleryIndex = index;
    updateModalNavButtons();
}

async function navigateCard(direction) {
    const newIndex = currentGalleryIndex + direction;
    if (newIndex < 0 || newIndex >= currentGalleryFiles.length) return;

    const body = cardModal.querySelector('.card-modal-body');
    if (!body) {
        showCardAt(newIndex);
        return;
    }

    body.classList.add('fading');
    await new Promise(r => setTimeout(r, 250));
    await showCardAt(newIndex);
    body.classList.remove('fading');
}

function updateModalNavButtons() {
    const prevBtn = document.getElementById('modalPrevBtn');
    const nextBtn = document.getElementById('modalNextBtn');
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = currentGalleryIndex <= 0;
    nextBtn.disabled = currentGalleryIndex >= currentGalleryFiles.length - 1;
}

function closeCardModal() {
    if (!cardModal) return;
    cardModal.classList.remove('open');
}

function initCardModal() {
    if (!cardModal) return;

    cardModalClose.addEventListener('click', closeCardModal);

    const backdrop = cardModal.querySelector('.card-modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeCardModal);

    const prevBtn = document.getElementById('modalPrevBtn');
    const nextBtn = document.getElementById('modalNextBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => navigateCard(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateCard(1));

    document.addEventListener('keydown', (e) => {
        if (!cardModal.classList.contains('open')) return;
        if (e.key === 'Escape') closeCardModal();
        if (e.key === 'ArrowLeft') navigateCard(-1);
        if (e.key === 'ArrowRight') navigateCard(1);
    });
}

function initPageNavigation() {
    const toggleBtn = document.getElementById('gotoGalleryBtn');
    const pageEditor = document.getElementById('pageEditor');
    const pageGallery = document.getElementById('pageGallery');

    if (!toggleBtn || !pageEditor || !pageGallery) return;

    toggleBtn.addEventListener('click', () => {
        if (toggleBtn.dataset.mode === 'backToSeries') {
            backToSeriesList();
            return;
        }

        const isGalleryVisible = pageGallery.classList.contains('active');

        if (isGalleryVisible) {
            pageGallery.classList.remove('active');
            pageEditor.style.display = '';
            toggleBtn.textContent = '官方卡表';
            toggleBtn.dataset.mode = '';
        } else {
            pageEditor.style.display = 'none';
            pageGallery.classList.add('active');
            backToSeriesList();
        }
        window.scrollTo(0, 0);
    });
}

/* ================= 批次匯入 ================= */
const batch = { cards: [], index: -1, active: false };

const COLOR_MAP = {
    '赤': 'red', '紅': 'red', '紅色': 'red', 'red': 'red',
    '青': 'blue', '藍': 'blue', '藍色': 'blue', 'blue': 'blue',
    '緑': 'green', '綠': 'green', '綠色': 'green', 'green': 'green',
    '黄': 'yellow', '黃': 'yellow', '黃色': 'yellow', 'yellow': 'yellow',
    '紫': 'purple', '紫色': 'purple', 'purple': 'purple'
};

const EFFECT_ICON_MAP = {
    '《休》': 'img/轉倒.png',
    '《0》': 'img/num_0.png',
    '《1》': 'img/num_1.png',
    '《2》': 'img/num_2.png',
    '《3》': 'img/num_3.png',
    '《4》': 'img/num_4.png',
    '《5》': 'img/num_5.png',
    '《6》': 'img/num_6.png',
    '《8》': 'img/num_8.png',
    '《9》': 'img/num_9.png',
    '《10》': 'img/num_10.png',
};

function replaceEffectIcons(text) {
    if (!text) return '';
    let result = text;
    Object.keys(EFFECT_ICON_MAP).forEach(marker => {
        const img = `<img src="${EFFECT_ICON_MAP[marker]}" class="inline-effect-icon">`;
        result = result.split(marker).join(img);
    });
    return result;
}

function cellText(v) {
    return String(v ?? '').replace(/\r\n/g, '\n').trim();
}

function keywordBaseName(kw) {
    return kw.name.replace(/\s*[：▶].*$/, '').trim();
}

function resolveType(typeText, apText, dpText) {
    const t = typeText.toLowerCase();
    if (/イベント|事件|event/.test(t)) return 'event';
    if (/サポート|裝備|装備|support/.test(t)) return 'support';
    if (/無數字|无数字|nonum/.test(t)) return 'character_nonum';
    if (/有數字|character_num/.test(t)) return 'character_num';
    return (apText !== '' || dpText !== '') ? 'character_num' : 'character_nonum';
}

function toNumber(text, label, rowNo, warnings) {
    if (text === '') return 0;
    const n = Number(text);
    if (Number.isNaN(n)) {
        warnings.push(`第 ${rowNo} 列：${label}「${text}」不是數字，已改為 0`);
        return 0;
    }
    return n;
}

function parseKeywords(text, rowNo, warnings) {
    const result = [];
    text.split(/[\n;；]+/).map(s => s.trim()).filter(Boolean).forEach(token => {
        let name = token;
        let val = '';

        const colonMatch = token.match(/^([^:：]+?)\s*[:：]\s*([\s\S]*)$/);
        if (colonMatch) {
            name = colonMatch[1].trim();
            val = colonMatch[2].trim();
        } else {
            const stripped = token.replace(/^[〔【《（(]+/, '').replace(/[〕】》）+)]+$/, '').trim();
            const m2 = stripped.match(/^(.+?)(\d+)$/);
            if (m2) {
                name = m2[1].trim();
                val = m2[2];
            } else {
                const m3 = stripped.match(/^([^:：]+?)\s*[:：]\s*(.+)$/);
                if (m3) {
                    name = m3[1].trim();
                    val = m3[2].replace(/^「/, '').replace(/」$/, '').trim();
                } else {
                    name = stripped;
                }
            }
        }

        const kw = allKeywords.find(k =>
            k.id === name ||
            k.name === name ||
            keywordBaseName(k) === name ||
            name.startsWith(keywordBaseName(k))
        );

        if (!kw) {
            warnings.push(`第 ${rowNo} 列：找不到關鍵字「${name}」`);
            return;
        }

        if (val === '' && kw.hasNumber) {
            const num = token.match(/(\d+)/);
            if (num) val = num[1];
        }

        result.push({ id: kw.id, val });
    });
    return result;
}

function rowToCard(row, rowNo, order, warnings, errors) {
    const [number, name, colorTxt, typeTxt, c, s, ap, dp, effect, kwTxt] =
        Array.from({ length: 10 }, (_, i) => cellText(row[i]));

    const missing = [];
    if (colorTxt === '') missing.push('顏色');
    if (typeTxt === '') missing.push('種類');
    if (c === '') missing.push('C');
    if (s === '') missing.push('S');

    if (missing.length > 0) {
        errors.push(`第 ${rowNo} 列：缺少必填欄位（${missing.join('、')}）`);
        return null;
    }

    let color = COLOR_MAP[colorTxt.toLowerCase()] || COLOR_MAP[colorTxt];
    if (!color) {
        warnings.push(`第 ${rowNo} 列：顏色「${colorTxt}」編輯器不支援，已先用紅色`);
        color = 'red';
    }

    return {
        order,
        number, name, color,
        type: resolveType(typeTxt, ap, dp),
        c: toNumber(c, 'C', rowNo, warnings),
        s: toNumber(s, 'S', rowNo, warnings),
        ap: toNumber(ap, 'AP', rowNo, warnings),
        dp: toNumber(dp, 'DP', rowNo, warnings),
        effect: replaceEffectIcons(effect),
        keywords: parseKeywords(kwTxt, rowNo, warnings),
        custom: { name: '', val: '', checked: false },
        image: null,
        imgState: null
    };
}

async function handleExcelImport(file) {
    try {
        const wb = XLSX.read(await file.arrayBuffer());
        const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' });
        const warnings = [];
        const errors = [];

        let headerIdx = rows.findIndex(r => cellText(r[0]).includes('卡號'));
        if (headerIdx < 0) {
            headerIdx = 1;
            warnings.push('找不到標題列（A 欄含「卡號」），已預設從第 3 列開始讀取');
        }

        const cards = [];
        for (let i = headerIdx + 1; i < rows.length; i++) {
            const r = rows[i];
            const isEmpty = r.every(v => cellText(v) === '');
            const isExample = cellText(r[0]).startsWith('範例') || cellText(r[1]).startsWith('*');
            if (isEmpty || isExample) continue;

            const card = rowToCard(r, i + 1, cards.length, warnings, errors);
            if (card) cards.push(card);
        }

        // 顯示錯誤與警告
        const messages = [];
        if (errors.length > 0) {
            const shown = errors.slice(0, 10).join('\n');
            const more = errors.length > 10 ? `\n…還有 ${errors.length - 10} 則` : '';
            messages.push(`❌ 錯誤（${errors.length} 列已被跳過）：\n${shown}${more}`);
        }
        if (warnings.length > 0) {
            const shown = warnings.slice(0, 10).join('\n');
            const more = warnings.length > 10 ? `\n…還有 ${warnings.length - 10} 則` : '';
            messages.push(`⚠️ 警告：\n${shown}${more}`);
        }
        if (messages.length > 0) {
            alert(messages.join('\n\n'));
        }

        if (!cards.length) {
            alert('沒有任何有效卡片可匯入，請檢查檔案內容。');
            return;
        }

        cards.sort((a, b) => {
            if (!a.number && !b.number) return a.order - b.order;
            if (!a.number) return 1;
            if (!b.number) return -1;
            return a.number.localeCompare(b.number, undefined, { numeric: true }) || a.order - b.order;
        });

        batch.cards = cards;
        batch.active = true;
        batch.index = -1;
        goTo(0);
    } catch (err) {
        console.error('Excel 匯入失敗:', err);
        alert('讀取 Excel 失敗，請確認檔案格式。');
    }
}

function setInputValue(el, val) {
    if (!el) return;
    el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
}

function snapshotForm() {
    const keywords = [];
    keywordListContainer.querySelectorAll('input[type="checkbox"][data-id]:checked').forEach(cb => {
        const id = cb.dataset.id;
        const inp = keywordListContainer.querySelector(`input[data-for-kw="${id}"]`);
        keywords.push({ id, val: inp ? inp.value : '' });
    });

    const hasImg = bgImg.style.display !== 'none' && bgImg.getAttribute('src');
    return {
        color: cardColorInput.value,
        type: cardTypeInput.value,
        name: cardNameInput.value,
        number: cardNumberInput.value,
        c: statCInput.value,
        s: statSInput.value,
        ap: statAPInput.value,
        dp: statDPInput.value,
        effect: cardEffectInput.value,
        keywords,
        custom: {
            name: document.getElementById('customKwName')?.value || '',
            val: document.getElementById('customKwVal')?.value || '',
            checked: !!document.getElementById('customKwCheckbox')?.checked
        },
        image: hasImg ? bgImg.src : null,
        imgState: {
            scale: imgState.scale,
            translateX: imgState.translateX,
            translateY: imgState.translateY,
            rotation: imgState.rotation
        },
        features: [
            { ...featureState['1'] },
            { ...featureState['2'] },
            { ...featureState['3'] },
            { ...featureState['4'] }
        ]
    };
}

function saveCurrentCard() {
    if (!batch.active || batch.index < 0) return;
    Object.assign(batch.cards[batch.index], snapshotForm());
}

function loadCardToForm(card) {
    cardColorInput.value = card.color;
    cardTypeInput.value = card.type;
    cardNameInput.value = card.name;
    cardNumberInput.value = card.number;
    statCInput.value = card.c;
    statSInput.value = card.s;
    statAPInput.value = card.ap;
    statDPInput.value = card.dp;
    cardEffectInput.value = card.effect;
    currentTagState.group1 = null;
    currentTagState.group2 = null;

    renderKeywords();
    handleNumberState();

    card.keywords.forEach(({ id, val }) => {
        const cb = keywordListContainer.querySelector(`input[data-id="${id}"]`);
        if (!cb) return;
        cb.checked = true;
        handleKeywordChange({ target: cb });
        const inp = keywordListContainer.querySelector(`input[data-for-kw="${id}"]`);
        if (inp && val !== '') setInputValue(inp, val);
    });

    const custom = card.custom || { name: '', val: '', checked: false };
    setInputValue(document.getElementById('customKwName'), custom.name);
    setInputValue(document.getElementById('customKwVal'), custom.val);
    document.getElementById('customKwCheckbox').checked = !!custom.checked;

    if (card.image) {
        bgImg.src = card.image;
        bgImg.style.display = 'block';
        Object.assign(imgState, card.imgState || { scale: 1, translateX: 0, translateY: 0, rotation: 0 });
        imgState.isDragging = false;
        applyImageTransform();
    } else {
        clearImage();
    }

    // 👈 新增特徵狀態還原
    if (card.features && card.features.length === 4) {
        for (let i = 1; i <= 4; i++) {
            const state = card.features[i - 1];
            featureState[i] = { ...state };
            
            // 更新輸入框
            const input = document.querySelector(`.feature-text-input[data-index="${i}"]`);
            if (input) input.value = state.text;
            
            // 更新顏色按鈕
            const btn = document.querySelector(`.feature-color-btn[data-index="${i}"]`);
            if (btn) {
                btn.classList.toggle('no-color', state.color === '');
                btn.style.background = state.color || '';
            }
            // 更新預覽框
            updateFeatureBox(i);
                }
            } else {
                // 如果這張卡還沒有特徵資料，清空
                for (let i = 1; i <= 4; i++) {
                    featureState[i] = { color: '', text: '' };
                    const input = document.querySelector(`.feature-text-input[data-index="${i}"]`);
                    if (input) input.value = '';
                    const btn = document.querySelector(`.feature-color-btn[data-index="${i}"]`);
                    if (btn) {
                        btn.classList.add('no-color');
                        btn.style.background = '';
                    }
                    updateFeatureBox(i);
                }
            }
    updatePreview();
}

function goTo(i) {
    if (!batch.active || i < 0 || i >= batch.cards.length) return;
    saveCurrentCard();
    batch.index = i;
    loadCardToForm(batch.cards[i]);
    updateBatchUI();
}

function updateBatchUI() {
    const prev = document.getElementById('batchPrevBtn');
    const next = document.getElementById('batchNextBtn');
    const counter = document.getElementById('batchCounter');
    const exportAllBtn = document.getElementById('exportAllBtn');
    prev.style.display = next.style.display = batch.active ? 'block' : 'none';
    prev.disabled = batch.index <= 0;
    next.disabled = batch.index >= batch.cards.length - 1;
    counter.textContent = batch.active ? `第 ${batch.index + 1} / ${batch.cards.length} 張` : '';
    if (exportAllBtn) {
        exportAllBtn.style.display = batch.active ? 'inline-block' : 'none';
    }
}

function afterDownloadAdvance() {
    if (!batch.active) return;
    saveCurrentCard();
    if (batch.index < batch.cards.length - 1) {
        goTo(batch.index + 1);
    } else {
        alert('已經是最後一張了！');
    }
}

function initBatchImport() {
    const input = document.getElementById('excelInput');
        document.getElementById('downloadSampleBtn').addEventListener('click', () => {
            alert('紅字欄位為必填會影響資料帶入時預設的卡片版型，其餘內容可在頁面上新增。');

        const link = document.createElement('a');
            link.href = encodeURI('匯入範例.xlsx');
            link.download = '匯入範例.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    document.getElementById('importExcelBtn').addEventListener('click', () => {
        if (batch.active && !confirm('重新匯入會取代目前所有卡片的編輯內容，確定嗎？')) return;
        input.click();
    });
    input.addEventListener('change', e => {
        const f = e.target.files[0];
        if (f) handleExcelImport(f);
        e.target.value = '';
    });
    document.getElementById('exportAllBtn').addEventListener('click', exportAllCards);
    document.getElementById('batchPrevBtn').addEventListener('click', () => goTo(batch.index - 1));
    document.getElementById('batchNextBtn').addEventListener('click', () => goTo(batch.index + 1));
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('圖片載入失敗: ' + src));
        img.src = src;
    });
}

async function bakeFeatureSlot(slot) {
    const index = slot.dataset.index;
    const state = featureState[index];
    const imgEl = slot.querySelector('img');
    if (!imgEl || !imgEl.complete || !imgEl.naturalWidth) return null;

    const slotRect = slot.getBoundingClientRect();
    const imgRect = imgEl.getBoundingClientRect();
    const w = slotRect.width;
    const h = slotRect.height;
    if (w === 0 || h === 0) return null;

    const imgLeft = imgRect.left - slotRect.left;
    const imgTop = imgRect.top - slotRect.top;
    const imgW = imgRect.width;
    const imgH = imgRect.height;

    const scale = 3;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    const baseImg = await loadImage(imgEl.src);
    ctx.drawImage(baseImg, imgLeft, imgTop, imgW, imgH);

    if (state.text.trim() !== '' && state.color !== '') {
        ctx.save();
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = state.color;
        ctx.fillRect(imgLeft, imgTop, imgW, imgH);
        ctx.restore();
    }

    if (state.text.trim() !== '') {
        const fontSize = 11;
        ctx.font = `900 ${fontSize}px "Microsoft JhengHei", Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const cx = w / 2 + 0;   // 水平偏移：正數往右，負數往左
        const cy = h / 2 + -5;   // 垂直偏移：正數往下，負數往上

        ctx.lineJoin = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#fff';
        ctx.strokeText(state.text, cx, cy);

        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        ctx.fillStyle = state.color || '#fff';
        ctx.fillText(state.text, cx, cy);

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    return { dataUrl: canvas.toDataURL('image/png'), width: w, height: h };
}

async function bakeAllFeatureSlots() {
    const slots = document.querySelectorAll('.feature-box-slot');
    const results = [];
    for (const slot of slots) {
        try {
            results.push(await bakeFeatureSlot(slot));
        } catch (e) {
            console.warn('特徵框合成失敗', e);
            results.push(null);
        }
    }
    return results;
}

/* ================= 特徵顏色控制 ================= */
const FEATURE_COLORS = [
    { value: '',        label: '無色' },
    { value: '#e53935', label: '赤' },
    { value: '#1e88e5', label: '青' },
    { value: '#43a047', label: '緑' },
    { value: '#fdd835', label: '黄' },
    { value: '#8e24aa', label: '紫' },
    { value: '#ffffff', label: '白' },
    { value: '#000000', label: '黒' },
];

const featureState = {
    '1': { color: '', text: '' },
    '2': { color: '', text: '' },
    '3': { color: '', text: '' },
    '4': { color: '', text: '' },
};

let paletteTargetIndex = null;

function initFeatureControls() {
    document.querySelectorAll('.feature-text-input').forEach(input => {
        input.addEventListener('input', () => {
            const i = input.dataset.index;
            featureState[i].text = input.value;
            updateFeatureBox(i);
        });
    });

    document.querySelectorAll('.feature-color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            paletteTargetIndex = btn.dataset.index;
            showFeaturePalette(btn);
        });
    });

    document.addEventListener('click', hideFeaturePalette);
}

function showFeaturePalette(anchor) {
    const palette = document.getElementById('featurePalette');
    if (!palette) return;
    palette.innerHTML = '';

    FEATURE_COLORS.forEach(c => {
        const sw = document.createElement('button');
        sw.type = 'button';
        sw.className = 'swatch' + (c.value === '' ? ' no-color' : '');
        if (c.value !== '') sw.style.background = c.value;
        sw.title = c.label;
        sw.addEventListener('click', (e) => {
            e.stopPropagation();
            applyFeatureColor(paletteTargetIndex, c.value);
            hideFeaturePalette();
        });
        palette.appendChild(sw);
    });

    const rect = anchor.getBoundingClientRect();
    palette.style.display = 'flex';
    palette.style.top = (rect.bottom + 4) + 'px';
    palette.style.left = rect.left + 'px';

    const pw = palette.offsetWidth;
    if (rect.left + pw > window.innerWidth - 8) {
        palette.style.left = (window.innerWidth - pw - 8) + 'px';
    }
}

function hideFeaturePalette() {
    const palette = document.getElementById('featurePalette');
    if (palette) palette.style.display = 'none';
    paletteTargetIndex = null;
}

function applyFeatureColor(index, color) {
    featureState[index].color = color;
    const btn = document.querySelector(`.feature-color-btn[data-index="${index}"]`);
    if (btn) {
        btn.classList.toggle('no-color', color === '');
        btn.style.background = color || '';
    }
    updateFeatureBox(index);
}

function updateFeatureBox(index) {
    const slot = document.querySelector(`.feature-box-slot[data-index="${index}"]`);
    if (!slot) return;
    const bg = slot.querySelector('.feature-box-bg');
    const textEl = slot.querySelector('.feature-box-text');
    const state = featureState[index];

    // 只有「有文字 + 有選色」才填色
    const shouldFill = state.text.trim() !== '' && state.color !== '';
    bg.style.background = shouldFill ? state.color : 'transparent';

    if (textEl) {
        textEl.textContent = state.text;
        textEl.style.color = shouldFill ? state.color : '#fff';
    }
}

init();