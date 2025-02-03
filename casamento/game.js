const questions = {
    facil: [
        { question: "Qual foi o nome do primeiro homem criado por Deus?", options: ["Moisés", "Adão", "Noé", "Abraão"], correctAnswer: "b" },
        { question: "Quem construiu a arca para salvar os animais?", options: ["Moisés", "Davi", "Noé", "Jonas"], correctAnswer: "c" },
        { question: "Quem foi engolido por um grande peixe?", options: ["Jonas", "Daniel", "Pedro", "Paulo"], correctAnswer: "a" },
        { question: "Qual era o nome da esposa de Adão?", options: ["Sara", "Rebeca", "Eva", "Marta"], correctAnswer: "c" },
        { question: "Quantos mandamentos Deus deu a Moisés?", options: ["5", "10", "20", "15"], correctAnswer: "b" },
        { question: "Quem derrotou o gigante Golias?", options: ["Salomão", "Davi", "Sansão", "Moisés"], correctAnswer: "b" },
        { question: "Quem abriu o Mar Vermelho?", options: ["Josué", "Elias", "Moisés", "Pedro"], correctAnswer: "c" },
        { question: "Qual era a profissão de Pedro antes de seguir Jesus?", options: ["Pescador", "Carpinteiro", "Médico", "Agricultor"], correctAnswer: "a" },
        { question: "Qual cidade foi destruída por Deus com fogo e enxofre?", options: ["Jericó", "Babilônia", "Nínive", "Sodoma"], correctAnswer: "d" },
        { question: "Qual é o primeiro livro da Bíblia?", options: ["Êxodo", "Mateus", "Gênesis", "Apocalipse"], correctAnswer: "c" },
        // Adicione mais perguntas fáceis aqui...
    ],
    medio: [
        { question: "Quem foi o líder dos israelitas após Moisés?", options: ["Davi", "Josué", "Salomão", "Isaías"], correctAnswer: "b" },
        { question: "Quem foi o pai de João Batista?", options: ["Zacarias", "José", "Abraão", "David"], correctAnswer: "a" },
        { question: "Quantos livros existem no Novo Testamento?", options: ["27", "39", "66", "12"], correctAnswer: "a" },
        { question: "Quem traiu Jesus por 30 moedas de prata?", options: ["Pedro", "Judas Iscariotes", "Paulo", "Tomé"], correctAnswer: "b" },
        { question: "Onde Jesus nasceu?", options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"], correctAnswer: "c" },
        { question: "Quantos dias Noé e sua família ficaram na arca?", options: ["40 dias", "100 dias", "365 dias", "150 dias"], correctAnswer: "a" },
        { question: "Quem escreveu o livro de Apocalipse?", options: ["Pedro", "João", "Lucas", "Paulo"], correctAnswer: "b" },
        { question: "Quem era conhecido como 'o discípulo amado'?", options: ["Pedro", "João", "Tiago", "Mateus"], correctAnswer: "b" },
        { question: "Quem era o rei mais sábio de Israel?", options: ["Saul", "Davi", "Salomão", "Ezequias"], correctAnswer: "c" },
        { question: "Qual era a profissão de Paulo antes de se converter?", options: ["Soldado", "Pescador", "Fabricante de tendas", "Cobrador de impostos"], correctAnswer: "c" },
        // Adicione mais perguntas médias aqui...
    ],
    dificil: [
        { question: "Qual profeta teve uma visão de um vale cheio de ossos secos?", options: ["Ezequiel", "Jeremias", "Isaías", "Daniel"], correctAnswer: "a" },
        { question: "Quem foi chamado de 'o discípulo amado'?", options: ["Pedro", "João", "Tiago", "Mateus"], correctAnswer: "b" },
        { question: "Quem escreveu a maioria das cartas do Novo Testamento?", options: ["Pedro", "Paulo", "Tiago", "João"], correctAnswer: "b" },
        { question: "Qual era a idade de Moisés quando guiou os israelitas pelo deserto?", options: ["40 anos", "80 anos", "100 anos", "120 anos"], correctAnswer: "b" },
        { question: "Qual foi o rei que viu a mão escrevendo na parede?", options: ["Nabucodonosor", "Belsazar", "Davi", "Ezequias"], correctAnswer: "b" },
        { question: "Quantos anos durou o cativeiro babilônico de Israel?", options: ["50 anos", "70 anos", "120 anos", "40 anos"], correctAnswer: "b" },
        { question: "Quem foi jogado na cova dos leões?", options: ["José", "Daniel", "Elias", "Neemias"], correctAnswer: "b" },
        { question: "Quem foi a primeira pessoa a ver Jesus ressuscitado?", options: ["Pedro", "Maria Madalena", "João", "Tomé"], correctAnswer: "b" },
        { question: "Qual rei foi transformado em um animal por sua arrogância?", options: ["Davi", "Nabucodonosor", "Saul", "Jeroboão"], correctAnswer: "b" },
        { question: "Em qual monte Jesus foi crucificado?", options: ["Monte das Oliveiras", "Monte Sião", "Monte Moriá", "Gólgota"], correctAnswer: "d" },
        // Adicione mais perguntas difíceis aqui...
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;

// Função para iniciar o jogo com um nível específico
function startGame(level) {
    currentQuestions = [...questions[level]].sort(() => Math.random() - 0.5); // Embaralha as perguntas
    currentQuestionIndex = 0;
    
    document.getElementById("level-selection").style.display = "none"; 
    document.getElementById("game-area").style.display = "block"; 
    
    showQuestion();
}

// Função para exibir a pergunta atual
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

// Função para verificar a resposta do usuário
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

// Função para ir para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    document.querySelector(".next-btn").style.display = "none"; 
    showQuestion();
}
