import { figures as rawFigures } from './gameData.js';

// ================= STATE =================
const state = {
    figures: [],
    currentFigure: null,
    currentIndex: 0,
    totalRounds: 5,
    difficulty: 'medium', // easy, medium, hard
    region: 'Worldwide',
    score: 0,
    streak: 0,
    incorrectGuesses: 0,
    revealedFactCount: 1,
    hintRevealed: false,
    gameActive: false,
    feedbackMsg: ''
};

// ================= DOM ELEMENTS =================
const elements = {
    // Screens
    startMenu: document.getElementById('start-menu'),
    gameScreen: document.getElementById('game-screen'),
    gameOverScreen: document.getElementById('game-over-screen'),
    header: document.getElementById('game-header'),

    // Header Stats
    displayDifficulty: document.getElementById('display-difficulty'),
    displayRound: document.getElementById('display-round'),
    displayScore: document.getElementById('display-score'),
    displayStreak: document.getElementById('display-streak'),
    streakContainer: document.getElementById('streak-container'),

    // Menu Inputs
    form: document.getElementById('setup-form'),
    difficultyInfo: document.getElementById('difficulty-info'),

    // Game Area
    cluesContainer: document.getElementById('clues-container'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackText: document.getElementById('feedback-text'),
    continentHint: document.getElementById('continent-hint'),
    continentName: document.getElementById('continent-name'),
    hintBox: document.getElementById('hint-box'),
    hintText: document.getElementById('hint-text'),
    
    // Controls
    btnReveal: document.getElementById('btn-reveal-clue'),
    btnHint: document.getElementById('btn-get-hint'),
    btnGiveUp: document.getElementById('btn-give-up'),
    
    // Input Footer
    inputArea: document.getElementById('input-area'),
    nextRoundArea: document.getElementById('next-round-area'),
    guessForm: document.getElementById('guess-form'),
    userInput: document.getElementById('user-input'),
    cluesRemainingText: document.getElementById('clues-remaining-text'),
    roundResultMsg: document.getElementById('round-result-msg'),
    btnNextRound: document.getElementById('btn-next-round'),

    // Game Over
    finalScore: document.getElementById('final-score'),
    maxScore: document.getElementById('max-score'),
    finalMessage: document.getElementById('final-message'),
    btnRestart: document.getElementById('btn-restart')
};

// ================= UTILS =================
const decode = (str) => atob(str);

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function checkMatch(input, correctName) {
    const normalizedInput = input.trim().toLowerCase();
    const normalizedCorrect = correctName.toLowerCase();

    // Exact match
    if (normalizedInput === normalizedCorrect) return true;

    // Partial match (avoid short inputs)
    if (normalizedInput.length < 3) return false;

    const escapedInput = normalizedInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Regex checks if input appears as a distinct word in the answer
    const regex = new RegExp(`\\b${escapedInput}\\b`, 'i');
    return regex.test(normalizedCorrect);
}

// ================= UI LOGIC =================
function showScreen(screenName) {
    elements.startMenu.classList.add('hidden');
    elements.gameScreen.classList.add('hidden');
    elements.gameOverScreen.classList.add('hidden');

    elements.startMenu.classList.remove('active');
    elements.gameScreen.classList.remove('active');
    elements.gameOverScreen.classList.remove('active');

    if (screenName === 'menu') {
        elements.startMenu.classList.remove('hidden');
        elements.startMenu.classList.add('active');
        elements.header.classList.add('hidden');
    } else if (screenName === 'game') {
        elements.gameScreen.classList.remove('hidden');
        elements.gameScreen.classList.add('active');
        elements.header.classList.remove('hidden');
    } else if (screenName === 'gameover') {
        elements.gameOverScreen.classList.remove('hidden');
        elements.gameOverScreen.classList.add('active');
        elements.header.classList.remove('hidden');
    }
}

function updateHeader() {
    elements.displayScore.textContent = state.score;
    elements.displayRound.textContent = `${state.currentIndex + 1} / ${state.totalRounds}`;
    elements.displayDifficulty.textContent = state.difficulty; // Capitalize via CSS
    
    if (state.streak > 1) {
        elements.streakContainer.style.display = 'flex';
        elements.displayStreak.textContent = state.streak;
    } else {
        elements.streakContainer.style.display = 'none';
    }
}

function renderClues() {
    elements.cluesContainer.innerHTML = '';
    
    // Render revealed facts
    for (let i = 0; i < state.revealedFactCount; i++) {
        const fact = state.currentFigure.facts[i];
        const isLast = i === state.revealedFactCount - 1;
        
        const card = document.createElement('div');
        card.className = 'fact-card';
        
        const iconClass = i === 0 ? 'fa-scroll' : i === 1 ? 'fa-lightbulb' : 'fa-trophy';
        
        card.innerHTML = `
            <div class="fact-icon"><i class="fa-solid ${iconClass}"></i></div>
            <div class="fact-content">
                <h3>Clue #${i + 1}</h3>
                <p>${fact}</p>
            </div>
        `;
        elements.cluesContainer.appendChild(card);
    }

    // Update buttons/hint text
    if (state.revealedFactCount >= 3) {
        elements.btnReveal.style.display = 'none';
    } else {
        elements.btnReveal.style.display = 'flex';
    }

    elements.cluesRemainingText.textContent = `${3 - state.revealedFactCount} clues hidden`;

    // Handle hint visibility
    if (state.hintRevealed) {
        elements.hintBox.classList.remove('hidden');
        elements.hintText.textContent = state.currentFigure.hint;
        elements.btnHint.style.display = 'none';
    } else {
        elements.hintBox.classList.add('hidden');
        elements.btnHint.style.display = 'flex';
    }
}

function setFeedback(msg, type) {
    elements.feedbackText.textContent = msg;
    elements.feedbackText.className = type === 'success' ? 'text-success' : 'text-error';
}

// ================= GAME LOGIC =================

function initGame() {
    // Region Selection
    const regionBtns = document.querySelectorAll('.region-btn');
    regionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            regionBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            state.region = btn.dataset.value;
        });
    });

    // Difficulty Selection
    const diffBtns = document.querySelectorAll('.diff-btn');
    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            state.difficulty = btn.dataset.value;
            
            // Update info text
            if (state.difficulty === 'easy') elements.difficultyInfo.textContent = "Hints appear after 2 wrong guesses";
            if (state.difficulty === 'medium') elements.difficultyInfo.textContent = "Hints appear after 1 wrong guess";
            if (state.difficulty === 'hard') elements.difficultyInfo.textContent = "Hints only appear when requested";
        });
    });

    // Round Selection
    const roundBtns = document.querySelectorAll('.rounds-btn');
    roundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roundBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            state.totalRounds = parseInt(btn.dataset.value);
        });
    });

    // Start Button
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        startGame();
    });

    // Game Actions
    elements.guessForm.addEventListener('submit', handleGuess);
    elements.btnReveal.addEventListener('click', () => {
        if (state.revealedFactCount < 3) {
            state.revealedFactCount++;
            state.score -= 10; // Penalty for manual reveal logic if implemented, currently just reveals
            renderClues();
        }
    });
    elements.btnHint.addEventListener('click', () => {
        state.hintRevealed = true;
        renderClues();
    });
    elements.btnGiveUp.addEventListener('click', handleGiveUp);
    elements.btnNextRound.addEventListener('click', nextRound);
    elements.btnRestart.addEventListener('click', () => showScreen('menu'));
}

function startGame() {
    // Filter Data
    let pool = rawFigures;
    if (state.region !== 'Worldwide') {
        pool = rawFigures.filter(f => f.continent === state.region);
    }
    
    const shuffled = shuffleArray(pool);
    state.figures = shuffled.slice(0, state.totalRounds);
    
    // Reset Stats
    state.currentIndex = 0;
    state.score = 0;
    state.streak = 0;
    
    loadRound();
    showScreen('game');
}

function loadRound() {
    state.currentFigure = state.figures[state.currentIndex];
    state.revealedFactCount = 1;
    state.incorrectGuesses = 0;
    state.hintRevealed = false;
    state.gameActive = true;

    // Reset UI
    elements.userInput.value = '';
    elements.userInput.focus();
    elements.feedbackText.textContent = '';
    elements.continentHint.classList.add('hidden');
    elements.inputArea.classList.remove('hidden'); // Show input
    elements.nextRoundArea.classList.add('hidden'); // Hide next round button
    
    updateHeader();
    renderClues();
}

function handleGuess(e) {
    e.preventDefault();
    if (!state.gameActive) return;

    const input = elements.userInput.value;
    if (!input.trim()) return;

    const correctName = decode(state.currentFigure.encryptedName);

    if (checkMatch(input, correctName)) {
        // WIN
        handleWin(correctName);
    } else {
        // INCORRECT
        handleLoss();
    }
}

function handleWin(correctName) {
    state.gameActive = false;
    
    // Calc Score
    let points = 0;
    if (state.revealedFactCount === 1) points = 100;
    else if (state.revealedFactCount === 2) points = 50;
    else points = 25;

    state.score += points;
    state.streak++;

    // Confetti
    if (window.confetti) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#daa520', '#8b0000', '#ffffff']
        });
    }

    // UI Feedback
    setFeedback(`Correct! It was ${correctName}.`, 'success');
    showPostRoundUI('won');
}

function handleLoss() {
    state.incorrectGuesses++;
    state.streak = 0;
    
    // Shake Animation
    elements.guessForm.classList.add('shake');
    setTimeout(() => elements.guessForm.classList.remove('shake'), 500);
    elements.userInput.value = '';

    // Check Hint Rules
    let shouldRevealHint = state.hintRevealed;
    if (!shouldRevealHint) {
        if (state.difficulty === 'easy' && state.incorrectGuesses >= 2) shouldRevealHint = true;
        else if (state.difficulty === 'medium' && state.incorrectGuesses >= 1) shouldRevealHint = true;
    }

    if (shouldRevealHint && !state.hintRevealed) {
        state.hintRevealed = true;
        renderClues();
        setFeedback("Incorrect. A hint has been revealed!", 'error');
    } else {
        setFeedback("Incorrect. Try again!", 'error');
    }
    updateHeader(); // Update streak reset
}

function handleGiveUp() {
    state.gameActive = false;
    state.streak = 0;
    state.revealedFactCount = 3; // Show all facts
    state.hintRevealed = true;
    
    renderClues();
    const correctName = decode(state.currentFigure.encryptedName);
    setFeedback(`The answer was ${correctName}.`, 'error');
    
    showPostRoundUI('lost');
}

function showPostRoundUI(result) {
    elements.inputArea.classList.add('hidden');
    elements.nextRoundArea.classList.remove('hidden');
    
    // Show continent info
    elements.continentHint.classList.remove('hidden');
    elements.continentName.textContent = state.currentFigure.continent;

    if (result === 'won') {
        elements.roundResultMsg.innerHTML = '<i class="fa-solid fa-check-circle text-success"></i> Round Won!';
    } else {
        elements.roundResultMsg.innerHTML = '<i class="fa-solid fa-times-circle text-error"></i> Round Lost';
    }

    updateHeader();
}

function nextRound() {
    state.currentIndex++;
    if (state.currentIndex >= state.figures.length) {
        endGame();
    } else {
        loadRound();
    }
}

function endGame() {
    showScreen('gameover');
    elements.finalScore.textContent = state.score;
    elements.maxScore.textContent = state.totalRounds * 100;

    const ratio = state.score / (state.totalRounds * 100);
    if (ratio >= 0.8) elements.finalMessage.textContent = "Incredible! You're a true historian.";
    else if (ratio >= 0.5) elements.finalMessage.textContent = "Great job! You know your history.";
    else elements.finalMessage.textContent = "Keep learning! History is full of surprises.";
}

// Initialize
document.addEventListener('DOMContentLoaded', initGame);
