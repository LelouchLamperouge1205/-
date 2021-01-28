const quiz = [
    {
        question: 'しゅうゲームズのYouTubeで最初のコメントは次の内どれ？',
        answers: [
            'へたくそ',
            '不快になりました',
            '通報しました',
            '面白くないです'
        ],
        correct: '不快になりました'
    }, {
        question: '激熱？',
        answers: [
            'ファンタスティックエブリディ',
            'スペシャル',
            'パブリックサンシャイン',
            'キンキノフェスティバル'
        ],
        correct: 'ファンタスティックエブリディ'
    }, {
        question: 'しょうたはしゅうからどういう呼び方をされているか？',
        answers: [
            '黒髪イケメンメガネニート',
            '黒髪イケメンメガネホクロ',
            '黒髪イケメン黒縁メガネ',
            '黒髪イケメン暇人しょうた'
        ],
        correct: '黒髪イケメンメガネホクロ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        if (score >= quizLength) {
            alert('よくやった！しょうた！！')
        } else {
            alert('全問正解なんてむりだよ…　今はね。')
        }
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });    
    handlerIndex++;
}