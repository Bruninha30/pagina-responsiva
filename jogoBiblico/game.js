const questions = {
    facil: [
        { question: "Quem foi o primeiro homem criado por Deus?", options: ["Moisés", "Adão", "Noé", "Abraão"], correctAnswer: "b" },
        { question: "Quem construiu a arca para salvar os animais?", options: ["Moisés", "Davi", "Noé", "Jonas"], correctAnswer: "c" },
        { question: "Quem foi engolido por um grande peixe?", options: ["Jonas", "Daniel", "Pedro", "Paulo"], correctAnswer: "a" },
        { question: "Quantos mandamentos Deus deu a Moisés?", options: ["5", "10", "20", "15"], correctAnswer: "b" },
        { question: "Quem derrotou Golias?", options: ["Davi", "Moisés", "Sansão", "José"], correctAnswer: "a" },
        // Adicione mais perguntas fáceis...
    ],
    medio: [
        { question: "Quem liderou os israelitas após Moisés?", options: ["Davi", "Josué", "Salomão", "Elias"], correctAnswer: "b" },
        { question: "Quem traiu Jesus por 30 moedas de prata?", options: ["Pedro", "Judas", "Paulo", "Tomé"], correctAnswer: "b" },
        { question: "Quem escreveu Apocalipse?", options: ["Pedro", "João", "Lucas", "Paulo"], correctAnswer: "b" },
        { question: "Qual era o rei mais sábio de Israel?", options: ["Saul", "Davi", "Salomão", "Ezequias"], correctAnswer: "c" },
        { question: "Onde Jesus nasceu?", options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"], correctAnswer: "c" },
        // Adicione mais perguntas médias...
    ],
    dificil: [
        { question: "Qual profeta teve uma visão de ossos secos?", options: ["Ezequiel", "Jeremias", "Isaías", "Daniel"], correctAnswer: "a" },
        { question: "Quem escreveu a maioria das cartas do Novo Testamento?", options: ["Pedro", "Paulo", "Tiago", "João"], correctAnswer: "b" },
        { question: "Quem foi jogado na cova dos leões?", options: ["José", "Daniel", "Elias", "Neemias"], correctAnswer: "b" },
        { question: "Quem foi a primeira a ver Jesus ressuscitado?", options: ["Pedro", "Maria Madalena", "João", "Tomé"], correctAnswer: "b" },
        { question: "Em qual monte Jesus foi crucificado?", options: ["Monte das Oliveiras", "Monte Sião", "Monte Moriá", "Gólgota"], correctAnswer: "d" },
        // Adicione mais perguntas difíceis...
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;

function startGame(level) {
    currentQuestions = [...questions[level]].sort(() => Math.random() - 0.5); 
    currentQuestionIndex = 0;

    document.getElementById("level-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        let q = currentQuestions[currentQuestionIndex];
        document.getElementById("question").innerText = q.question;
        document.getElementById("optionA").innerText = q.options[0];
        document.getElementById("optionB").innerText = q.options[1];
        document.getElementById("optionC").innerText = q.options[2];
        document.getElementById("optionD").innerText = q.options[3];
        document.getElementById("message").innerText = "";
    } else {
        document.getElementById("game-area").innerHTML = `<h2>Parabéns! Você concluiu o jogo!</h2>`;
    }
}

function checkAnswer(answer) {
    let correct = currentQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct) {
        document.getElementById("message").innerText = "Correto! 🎉";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerText = "Errado! 😢";
        document.getElementById("message").style.color = "red";
    }

    document.querySelector(".next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    document.querySelector(".next-btn").style.display = "none";
    showQuestion();
}
