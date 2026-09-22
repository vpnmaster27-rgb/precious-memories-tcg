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
        { id: 'tokka', name: '突破', hasNumber: true, defaultVal: 30, group: null },
        { id: 'tennen', name: '天然', hasNumber: true, defaultVal: 0, group: null },
    ];

    const allowedKeywordsByType = {
        character_num: ['kyoin', 'gaman', 'ex', 'active', 'lvlup', 'tennen', 'tokka', 'combi', 'gyakukyo'],
        character_nonum: ['kyoin', 'gaman', 'ex', 'active', 'lvlup', 'tennen', 'tokka', 'combi', 'gyakukyo'],
        event: ['ex', 'break'],
        support: ['ex', 'gyakukyo']
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
                let currentVal = cardEffectInput.value;

                if (group === '3') {
                    if (currentVal.length > 0 && !currentVal.endsWith('\n')) {
                        currentVal += '\n';
                    }
                    currentVal += text;

                } else if (group === '1') {
                    if (currentTagState.group1 && !currentTagState.group2) {
                        currentVal = currentVal.slice(0, -currentTagState.group1.length) + text;
                    } else if (!currentTagState.group1 && currentTagState.group2) {
                        const tag2Len = currentTagState.group2.length;
                        const beforeTag2 = currentVal.slice(0, -tag2Len);
                        currentVal = beforeTag2 + text + currentTagState.group2;
                        
                        currentTagState.group1 = null;
                        currentTagState.group2 = null;
                        cardEffectInput.value = currentVal;
                        updatePreview();
                        return;
                    } else {
                        if (currentVal.length > 0 && !currentVal.endsWith('\n')) {
                            currentVal += '\n';
                        }
                        currentVal += text;
                        currentTagState.group2 = null;
                    }
                    currentTagState.group1 = text;

                } else if (group === '2') {
                    if (currentTagState.group2) {
                        currentVal = currentVal.slice(0, -currentTagState.group2.length) + text;
                    } else {
                        if (!currentTagState.group1 && currentVal.length > 0 && !currentVal.endsWith('\n')) {
                            currentVal += '\n';
                        }
                        currentVal += text;
                    }
                    currentTagState.group2 = text;

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

    let imgState = {
        scale: 1,
        translateX: 0,
        translateY: 0,
        rotation: 0,
        isDragging: false,
        startX: 0,
        startY: 0
    };

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

    async function downloadCard() {
        downloadBtn.disabled = true;
        downloadBtn.textContent = '輸出中...';

        try {
            const cardPreview = document.getElementById('cardPreview');
            const canvas = await html2canvas(cardPreview, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: null
            });
            const imageUrl = canvas.toDataURL('image/png');
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
        } catch (err) {
            console.error('下載圖片失敗:', err);
            alert('下載失敗，請嘗試重新整理頁面後再試一次。');
        } finally {
            downloadBtn.disabled = false;
            downloadBtn.textContent = '下載卡圖';
        }
    }

    function init() {
        cardColorInput.addEventListener('change', updatePreview);
        cardTypeInput.addEventListener('change', () => {
            renderKeywords();
            handleNumberState();
            updatePreview();
        });

        cardNameInput.addEventListener('input', updatePreview);
        statCInput.addEventListener('input', updatePreview);
        statSInput.addEventListener('input', updatePreview);
        statAPInput.addEventListener('input', updatePreview);
        statDPInput.addEventListener('input', updatePreview);
        cardEffectInput.addEventListener('input', updatePreview);

        uploadBtn.addEventListener('click', () => imageInput.click());
        imageInput.addEventListener('change', handleImageUpload);
        downloadBtn.addEventListener('click', downloadCard);

        initImageControls();
        initTagButtons();
        
        renderKeywords();
        handleNumberState();
        updatePreview();
    }

    function handleNumberState() {
        const currentType = cardTypeInput.value;
        const hasNumber = (currentType === 'character_num');

        statAPInput.disabled = !hasNumber;
        statDPInput.disabled = !hasNumber;
    }

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                bgImg.src = event.target.result;
                bgImg.style.display = 'block';
                resetImageTransform();
            };
            reader.readAsDataURL(file);
        }
    }

    function renderKeywords() {
        const currentType = cardTypeInput.value;
        const allowedIds = allowedKeywordsByType[currentType] || [];
        
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

            keywordListContainer.appendChild(label);
        });
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
            prevAP.style.display = 'none';
            prevDP.style.display = 'none';
        } else if (selectedType === 'support') {
            prevEffect.className = 'card-effect horizontal-mode';
            prevCost.className = 'card-stat-text cost-normal';
            prevSource.className = 'card-stat-text source-normal';
            prevName.className = 'card-name-text name-support';
            prevAP.style.display = 'none';
            prevDP.style.display = 'none';
        } else {
            prevEffect.className = 'card-effect horizontal-mode';
            prevCost.className = 'card-stat-text cost-normal';
            prevSource.className = 'card-stat-text source-normal';
            prevName.className = 'card-name-text name-normal';

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
        
        // 🌟 核心修改：判斷是否為事件卡 (event)
        const nameValue = cardNameInput.value || '';
        if (selectedType === 'event') {
            // 如果是事件卡，將字元拆開用 span 包裹（解決 html2canvas 直書躺平問題）
            prevName.innerHTML = nameValue
                .split('')
                .map(char => `<span>${char}</span>`)
                .join('');
        } else {
            // 其他卡片類型維持正常的純文字橫書
            prevName.textContent = nameValue;
        }

        let selectedKeywordsText = [];
        allKeywords.forEach(kw => {
            const cb = keywordListContainer.querySelector(`input[data-id="${kw.id}"]:checked`);
            if (cb) {
                let text = `〔${kw.name}`;
                if (kw.hasNumber) {
                    const numInput = keywordListContainer.querySelector(`input[data-for-kw="${kw.id}"]`);
                    if (numInput) {
                        text += numInput.value;
                    }
                }
                text += `〕`;
                selectedKeywordsText.push(`<b>${text}</b>`);
            }
        });

        const userEffectText = cardEffectInput.value;
        let finalEffectContent = "";

        if (selectedKeywordsText.length > 0) {
            finalEffectContent += selectedKeywordsText.join(' ');
            if (userEffectText.trim() !== "") {
                finalEffectContent += "\n" + userEffectText;
            }
        } else {
            finalEffectContent = userEffectText;
        }

        prevEffect.innerHTML = finalEffectContent;
    }
init();