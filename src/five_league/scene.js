let answer = [];

//問題変更にともなう設定
function setQ(n) {
    //画像変更
    document.getElementById('question_image').src = `../img/Q${n}.png`

    //n問目変更
    document.getElementById('q_title').innerText = `Q.${n}`;
    fetch(`./Q${n}.txt`)
        .then(response => response.text())
        .then(data => {
        // カンマで分割し、各要素の前後のダブルクォーテーションを取り除く
        const lines = data.split(',');
        const cleanedLines = lines.map(line => line.trim().replace(/^"|"$/g, '')); //ここできれいにする
        
        const question = cleanedLines[0];
        answer = cleanedLines.slice(1, 6);

        // 問題文を表示
        document.getElementById('question').innerText = question;
        console.log("lines: " + lines);
        console.log("cleanedLines: " + cleanedLines);
        console.log("question: " + question);
        console.log("answer: " + answer);

        // テキストボックスをクリア
        for (let i = 1; i <= 5; i++) {
            const charInput = document.getElementById(`${i}_char`);
            charInput.value = '';
            charInput.classList.remove('bg-red-500');
            charInput.classList.add('bg-blue-500');
    }
    })
    .catch(error => console.error('Error:', error));
}

//解答チェック
function check_ans() {
    for (let i = 1; i <= 5; i++) {
      const userInput = document.getElementById(`${i}_char`).value;
      if (userInput === answer[i - 1]) {
        document.getElementById(`${i}_char`).classList.remove('bg-red-500');
        document.getElementById(`${i}_char`).classList.add('bg-red-500');
      }
    }
  }