document.addEventListener('DOMContentLoaded', function() {
    // 画像の配列
    const images = [
      '../img/type_icon/normal.png',
      '../img/type_icon/fire.png',
      '../img/type_icon/water.png',
      '../img/type_icon/erectric.png',
      '../img/type_icon/grass.png',
      '../img/type_icon/ice.png',
      '../img/type_icon/fighting.png',
      '../img/type_icon/poison.png',
      '../img/type_icon/ground.png',
      '../img/type_icon/flying.png',
      '../img/type_icon/psychic.png',
      '../img/type_icon/bug.png',
      '../img/type_icon/rock.png',
      '../img/type_icon/ghost.png',
      '../img/type_icon/dragon.png',
      '../img/type_icon/dark.png',
      '../img/type_icon/steel.png',
      '../img/type_icon/fairy.png'
    ];
  
    let timer;
    let timeLeft = 20; //制限時間
  
    function startTimer() {
      clearInterval(timer);
      timeLeft = 20;
      document.getElementById('timer-display').textContent = timeLeft;
  
      timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer-display').textContent = timeLeft;
  
        if (timeLeft <= 0) {
          clearInterval(timer);
          alert('時間切れです！');
        }
      }, 1000);
    }
  
    document.getElementById('start-button').addEventListener('click', startTimer);
  
    function resetTimer() {
      clearInterval(timer);
      timeLeft = 20;
      document.getElementById('timer-display').textContent = timeLeft;
      startTimer();
    }
  
    // テーブルのセルに画像を挿入する関数
    function populateTable(tableId, titleId) {
      const table = document.getElementById(tableId);
      const cells = table.getElementsByTagName('td');
      let brightCount = 0; // 明るくなった画像の数をカウント
  
      // テキストボックスのタイトルを取得
      const titleInput = document.getElementById(titleId);
  
      for (let i = 0; i < cells.length; i++) {
        if (images[i]) { // 画像が存在する場合のみ挿入
          const img = document.createElement('img');
          img.src = images[i];
          img.alt = `Image ${i + 1}`;
          img.className = 'w-full h-full dimmed'; // 初期状態で暗くする
          cells[i].appendChild(img);
  
          // セルクリック時のイベントリスナーを追加
          cells[i].addEventListener('click', function() {
            img.classList.toggle('dimmed');
            if (!img.classList.contains('dimmed')) {
              brightCount++;
            } else {
              brightCount--;
            }
  
            // クリックされたらタイマーをリセット
            resetTimer();
  
            // すべての画像が明るくなった場合にアラートを表示
            if (brightCount === images.length) {
              const title = titleInput ? titleInput.value : '';
              alert(`${title}トレーナー の勝利です!`);
            }
          });
        }
      }
    }
  
    // 両方のテーブルに画像を挿入
    populateTable('table1', 'pl_1');
    populateTable('table2', 'pl_2');
  });