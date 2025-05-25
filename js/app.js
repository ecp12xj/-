document.addEventListener('DOMContentLoaded', () => {
    // --- Global Variables & DOM Elements ---
    // Mode selection
    const modeSelectionSection = document.getElementById('mode-selection');
    const learningModeBtn = document.getElementById('learning-mode-btn');
    const practiceModeBtn = document.getElementById('practice-mode-btn');

    // Learning Mode
    const learningModeSection = document.getElementById('learning-mode');
    const lmQuestionNumber = document.getElementById('lm-question-number');
    const lmQuestionText = document.getElementById('lm-question-text');
    const lmAnswerInput = document.getElementById('lm-answer-input');
    const lmSubmitBtn = document.getElementById('lm-submit-btn');
    const lmNextBtn = document.getElementById('lm-next-btn');
    const lmFeedbackArea = document.getElementById('lm-feedback-area');
    const lmCoinsCount = document.getElementById('lm-coins-count');
    const lmPosterArea = document.getElementById('lm-poster-area');
    const lmPosterImg = document.getElementById('lm-poster-img');

    // Practice Mode
    const practiceModeSection = document.getElementById('practice-mode');
    const pmImageGrid = document.getElementById('pm-image-grid');
    const pmQuestionModal = document.getElementById('pm-question-modal');
    const pmQuestionText = document.getElementById('pm-question-text');
    const pmAnswerInput = document.getElementById('pm-answer-input');
    const pmSubmitBtn = document.getElementById('pm-submit-btn');
    const pmFeedbackArea = document.getElementById('pm-feedback-area');
    const pmFireworksArea = document.getElementById('pm-fireworks-area'); // For fireworks

    let questions = [];
    const TOTAL_LEARNING_QUESTIONS = 10;
    const TOTAL_PRACTICE_BLOCKS = 30;

    // --- Global State ---
    let currentMode = null; // 'learning' or 'practice'
    // Add more state variables as needed for learning mode (e.g., currentQuestionIndex, score)
    // Add more state variables as needed for practice mode (e.g., revealedBlocks, blockQuestions)


    // --- Utility Functions ---
    // Function to hide all sections
    function hideAllSections() {
        learningModeSection.classList.add('hidden');
        practiceModeSection.classList.add('hidden');
        modeSelectionSection.classList.add('hidden');
    }

    // Function to load questions from JSONL
    async function loadQuestions() {
        // Placeholder: Actual fetch will be implemented later
        console.log('Loading questions...');
        // Simulate fetching questions
        // In a real scenario, this would be:
        // const response = await fetch('data/questions.jsonl');
        // const text = await response.text();
        // questions = text.trim().split('\n').map(line => JSON.parse(line));
        // For now, using dummy data:
        questions = [
            { id: 1, text: "2 x 3 = ?", answer: 6, explanation: "2 multiplied by 3 is 6." },
            { id: 2, text: "10 ÷ 2 = ?", answer: 5, explanation: "10 divided by 2 is 5." },
            // Add more dummy questions for initial testing if needed
        ];
        console.log('Questions loaded (dummy):', questions);
    }


    // --- Mode Selection Logic ---
    learningModeBtn.addEventListener('click', () => {
        hideAllSections();
        learningModeSection.classList.remove('hidden');
        currentMode = 'learning';
        startLearningMode();
    });

    practiceModeBtn.addEventListener('click', () => {
        hideAllSections();
        practiceModeSection.classList.remove('hidden');
        currentMode = 'practice';
        startPracticeMode();
    });


    // --- Learning Mode Logic ---
    function startLearningMode() {
        console.log('Learning Mode Started');
        // Reset learning mode state (score, current question index)
        // Load/select 10 questions
        // Display the first question
        // lmFeedbackArea.innerHTML = ''; // Clear previous feedback
        // lmNextBtn.classList.add('hidden');
        // lmPosterArea.classList.add('hidden');
        // lmAnswerInput.value = '';
    }

    // Event listener for Learning Mode submit button
    lmSubmitBtn.addEventListener('click', () => {
        // Check answer
        // Provide feedback (coin/cry face)
        // Enable next button
    });

    // Event listener for Learning Mode next button
    lmNextBtn.addEventListener('click', () => {
        // Move to the next question or show poster
    });

    // Event listener for poster click
    lmPosterImg.addEventListener('click', () => {
        // Open image in new tab or modal
        // window.open(lmPosterImg.src, '_blank');
    });


    // --- Practice Mode Logic ---
    function startPracticeMode() {
        console.log('Practice Mode Started');
        // Generate 30 pixel blocks
        // Assign questions to blocks
        // pmQuestionModal.classList.add('hidden');
        // pmFeedbackArea.innerHTML = '';
    }

    // Event listener for Practice Mode image grid (event delegation for blocks)
    pmImageGrid.addEventListener('click', (event) => {
        // if (event.target.classList.contains('pixel-block')) {
        //     const blockId = event.target.dataset.id;
        //     // Show question for this block
        // }
    });

    // Event listener for Practice Mode submit button (in modal)
    pmSubmitBtn.addEventListener('click', () => {
        // Check answer for the current block
        // Reveal block and show fireworks if correct
        // Show cry face, explanation, and allow retry if incorrect
        // Check if all blocks are revealed
    });


    // --- Initialization ---
    async function init() {
        await loadQuestions(); // Load questions first
        modeSelectionSection.classList.remove('hidden'); // Show mode selection initially
        console.log('Application initialized');
    }

    init();
});
