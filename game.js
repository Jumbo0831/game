enchant();
window.onload = function () {
    var game_ = new Game(480, 480); // 表示領域の大きさを設定
    game_.fps = 10;                 // ゲームの進行スピードを設定

    //行の終わりには、;（セミコロン）を付けます。
    game_.preload('./img/effect0.png', './img/start.png', './img/icon0.png', './img/map2.png', './img/start.png', './img/gameover.png', './img/clear.png', './img/retry_button.png', './img/chara1.png', './img/bg1.png', './img/bg2.png', './img/chara2.png', './img/chara6.png', './img/monster/bigmonster1.gif');
    game_.onload = function () { // ゲームの準備が整ったらメインの処理を実行します。

        var createGameScene = function () {
            scene = new Scene();
            var map = new Map(16, 16);
            map.image = game_.assets['./img/map2.png'];

            //画像用の配列
            mapImage = [
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 3, 3, 3, 3, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 3, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 3, 3, 3, 3, 20, 20, 20, 20, 3, 20, 20, 20, 20, 3, 20, 20, 20, 20, 3, 20, 20, 20, 20, 3, 20, 20, 20, 3, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 3, 3, 3, 3, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            map.loadData(mapImage);
            map.collisionData = mapImage;
            scene.addChild(map);
            //map生成ここまで

            //クマ生成
            var kuma = new Sprite(32, 32);
            kuma.image = game_.assets['./img/chara1.png'];
            //kuma.x = 16;
            kuma.x = 900;
            kuma.y = 448 - kuma.height;
            kuma.jumpcount = 0;
            kuma.jumpflag = false; //jumpFlag
            kuma.jumpUp = 0;
            scene.addChild(kuma);
            kuma.remainingBullets = 0; //5発まで remainingBullets

            //バスター
            var beam = new Array();
            for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                beam[remainingBullets] = new Sprite(16, 16);
                beam[remainingBullets].x = 0;
                beam[remainingBullets].y = 0;
                beam[remainingBullets].image = game_.assets['./img/icon0.png'];
                beam[remainingBullets].exist = false;
                beam[remainingBullets].count = 0;
                beam[remainingBullets].frame = 50;
                beam[remainingBullets].direction = true;
            }

            //ブタ
            var buta = new Sprite(30, 30);
            buta.image = game_.assets['./img/chara2.png'];
            buta.x = 200;
            buta.y = 448 - buta.height;
            buta.exist = true;
            buta.direction = true;
            buta.count = 0;
            scene.addChild(buta);
            //スライム
            var suraimu = new Sprite(30, 30);
            suraimu.image = game_.assets['./img/chara6.png'];
            suraimu.x = 500;
            suraimu.y = 448 - suraimu.height + 6;
            suraimu.exist = true;
            suraimu.direction = true;
            suraimu.count = 0;
            scene.addChild(suraimu);
            //ボス
            var boss = new Sprite(80, 80);
            boss.image = game_.assets['./img/monster/bigmonster1.gif'];
            boss.frame = 0;
            boss.x = 1100;
            boss.y = 448 - boss.height - 50;
            boss.scaleX = -1;
            boss.life = 10;
            boss.count = 0;
            boss.direction = false;
            boss.exist = false;
            boss.atacking = false;
            boss.atackFlag = 0;

            //ボスブレスbreath
            var breath = new Sprite(16, 16);
            breath.image = game_.assets['./img/icon0.png'];
            breath.frame = 59;
            breath.exist = false;
            breath.x = 0;
            breath.y = 0;
            breath.count = 0;
            breath.d = 1;

            //アイテム　   
            var item = new Array();
            for (var kind = 0; kind < 4; kind++) {
                item[kind] = new Sprite(16, 16);
                item[kind].image = game_.assets['./img/icon0.png'];
                if (kind == 4) {
                    item[kind].frame = 15;
                }
                else if (kind == 3) {
                    item[kind].frame = 11;
                }
                else if (kind == 2) {
                    item[kind].frame = 12;
                }
                else if (kind == 1) {
                    item[kind].frame = 13;
                }
                else {
                    item[kind].frame = 14;
                }
                item[kind].x = 5000;
                item[kind].y = 5000;
                item[kind].flag = false;
            }
            item.count = 0;
            item.exist = false;
            var nom = Math.floor(Math.random() * 4) + 0;

            //爆破エフェクト
            var brastEffect = new Sprite(15, 16);
            brastEffect.image = game_.assets['./img/effect0.png'];

            //上昇高さ
            var upSpeed = 32;

            //ライフゲージ
            var life = new Array();
            for (var stock = 0; stock < 10; stock++) {
                life[stock] = new Sprite(16, 16);
                life[stock].image = game_.assets['./img/icon0.png'];
                changeFalse(life[stock]);
                life[stock].frame = 10;
            }

            // ZキーをAボタンとして割り当てる
            game_.keybind(90, "a");

            //スペースをｚボタンとする
            game_.keybind(32, 'z');

            //クマジャンプ
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (game_.input.z && kuma.jumpUp < 2) {
                    kuma.jumpflag = true;
                    kuma.jumpUp++;
                }
            });


            //ジャンプ
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (kuma.jumpflag == true && kuma.jumpcount <= 16 && kuma.y > 0) {
                    kuma.y -= upSpeed;
                    kuma.jumpcount++;
                    upSpeed = upSpeed - 2;
                }
                if (kuma.jumpcount == 16) {
                    kuma.jumpcount = 0;
                    kuma.jumpflag = false;
                    upSpeed = 32;
                }
                else if (kuma.y - upSpeed <= 0) {
                    kuma.jumpcount = 0;
                    kuma.jumpflag = false;
                    upSpeed = 32;
                    kuma.jumpUp = 0;
                }
            });

            //ｚ押したら攻撃５連射可能         
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (game_.input.a) {
                    kuma.frame = 5;
                    atackBuster(kuma.x, kuma.y, kuma.remainingBullets);
                }
            });

            //重力
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (map.hitTest(kuma.x + 16, kuma.y + 32) == false) {
                    kuma.frame++;
                    if (kuma.frame > 2) {
                        kuma.frame = 0;
                    }
                    kuma.y += 8;
                }
                else kuma.jumpUp = 0;
            });
            //クマ移動
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (game_.input.left) {
                    kuma.scaleX = -1;
                    if (map.hitTest(kuma.x, kuma.y - 16) == false && kuma.x - 8 != 0) {
                        kuma.frame++;
                        if (kuma.frame > 2) {
                            kuma.frame = 0;
                        }
                        kuma.x -= 4;
                    }
                }
                if (game_.input.right) {
                    kuma.scaleX = 1;
                    if (map.hitTest(kuma.x + 32, kuma.y + 16) == false) {
                        kuma.frame++;
                        if (kuma.frame > 2) {
                            kuma.frame = 0;
                        }
                        kuma.x += 4;
                    }
                }
            });

            //アイテム配置
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (item.exist == false && item.count == 0) {
                    item[nom].x = 768;
                    item[nom].y = 64;
                    item.exist = true;
                    scene.addChild(item[nom]);
                }
                else item.count--;
            });

            //アイテム当たり
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (isHit(kuma, item[nom])) {                     
                    scene.removeChild(item[nom]);
                    item.exist = false;
                    item.count = 100;
                    if (nom == 0) {
                        game_clear();
                    }
                    else if (nom == 1) {  //赤
                        itemsSpeedUp();
                    }
                    else if (nom == 2) {  //青
                    }
                    else if (nom == 3) {
                        kumaDead();
                    }
                }
            });

            //敵配置
            scene.addEventListener(Event.ENTER_FRAME, function () {
                /*if(buta.exist == false){
                    buta.x = 200;
                    buta.y = 448 - buta.height;
                    buta.count = 0;
                    buta.exist = true
                }
                if(suraimu.exist  == false){
                    suraimu.x != 500;
                    suraimu.y = 448 -suraimu.height;
                    suraimu.count = 0;
                    suraimu.exist = true;
                }
               */
            });

            //敵の移動
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (buta.direction == true && buta.exist == true) {
                    buta.frame++;
                    if (buta.frame > 2) {
                        buta.frame = 0;
                    }
                    buta.x -= 12;
                    buta.count++;
                    if (isHit(kuma, buta)) {                                  
                        kumaDead();
                    }
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (isHit(beam[remainingBullets], buta)) {                             
                            changeFalse(buta);
                        }
                    }

                }
                else if (buta.direction == false && buta.exist == true) {
                    buta.frame++;
                    if (buta.frame > 2) {
                        buta.frame = 0;
                    }
                    buta.x += 12;
                    buta.count++;
                    if (isHit(kuma, buta)) {                              
                        kumaDead();
                    }
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (isHit(beam[remainingBullets], buta)) {                  
                            changeFalse(buta);
                        }
                    }
                }
                if (suraimu.direction == true) {
                    suraimu.frame++;
                    if (suraimu.frame > 2) {
                        suraimu.frame = 0;
                    }
                    suraimu.x -= 6;
                    suraimu.count++;
                    if (isHit(kuma, suraimu)) {             
                        kumaDead();
                    }
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (isHit(beam[remainingBullets], suraimu)) {        
                            changeFalse(suraimu);
                        }
                    }
                }
                else if (suraimu.direction == false) {
                    suraimu.frame++;
                    if (suraimu.frame > 2) {
                        suraimu.frame = 0;
                    }
                    suraimu.x += 6;//6⇒7
                    suraimu.count++;
                    if (isHit(kuma, suraimu)) {                           
                        kumaDead();
                    }
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (isHit(beam[remainingBullets], suraimu)) {                       
                            changeFalse(suraimu);
                        }
                    }
                }
                if (boss.direction == true && boss.atacking == false) {
                    if (boss.frame > 3) {
                        boss.frame = 2;
                    }
                    else {
                        boss.frame++;
                    }
                    boss.x -= 5;
                    boss.count++;
                }
                if (isHit(kuma, boss)) {                 
                    kumaDead();
                }
                else if (boss.direction == false && boss.atacking == false) {
                    if (boss.frame > 3) {
                        boss.frame = 2;
                    }
                    else {
                        boss.frame++;
                    }
                    boss.x += 5;
                    boss.count++;
                    if (isHit(kuma, boss)) {             
                        kumaDead();
                    }
                }
            });

            //敵のほうこう転換
            scene.addEventListener(Event.ENTER_FRAME, function () {
                changeDirection(buta);
                changeDirection(suraimu);
                changeDirection(boss);    
            });

            //ボス登場
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (kuma.x >= 900 && boss.exist == false) {
                    scene.addChild(boss);
                    boss.exist = true;
                    boss.direction = true;
                    boss.scaleX = 1;
                }

                for (var stock = 0; stock < boss.life; stock++) {
                    if (life[stock].exist == false && boss.exist == true) {
                        life[stock].x = 900 + stock * 16;
                        life[stock].y = 16;
                        life[stock].exist = true;
                        scene.addChild(life[stock]);
                    }
                }
            });

            //ボス動作  
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (boss.exist == true) {
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (isHit(beam[remainingBullets], boss) == true && boss.life != 0) {
                            changeFalse(beam[remainingBullets]);
                            boss.life--;
                            scene.removeChild(beam[remainingBullets]);
                        }
                        else if (boss.life == 0) {
                            boss.frame = 8;
                            for (var stock = 0; stock < 10; stock++) {
                                scene.removeChild(life[stock]);
                            }
                            game_clear();
                        }
                    }
                    var atacktiming1 = boss.count == 10 || boss.count == 15;
                    if (atacktiming1) {
                        if (boss.atackFlag == 0) {
                            boss.frame = 8;
                        }
                        boss.atacking = true;
                        boss.atackFlag += 1;
                        if (boss.atackFlag % 2 == 0) {
                            framePlus(boss);
                            if (boss.frame == 11) {
                                atackBoss(boss.x, boss.y);                                
                                }
                            }
                        
                    }            
                    for (var stock = 10; stock > boss.life; stock--) {
                        if (stock != 10) {
                            scene.removeChild(life[stock]);
                        }
                    }
                } 
            });

            //フレームプラス            
            function framePlus(boss) {
                boss.frame++;
            }

            //ステージのXY座標の指定
            scene.addEventListener(Event.ENTER_FRAME, function (e) {
                var x = Math.min((game_.width - 16) / 2 - kuma.x, 0);
                var y = Math.min((game_.height - 16) / 2 - kuma.y, 0);
                x = Math.max(game_.width, x + map.width) - map.width;
                y = Math.max(game_.height, y + map.height) - map.height;
                scene.x = x;
                scene.y = y;
            });

            //ボスブレス
            function atackBoss(x , y) {
                if (boss.scaleX == 1) {
                    breath.scaleX = 1;
                    breath.x = x - 32;
                    breath.y = y;
                    breath.d = 1;
                }
                else if (boss.scaleX == -1) {
                    breath.scaleX = -1;
                    breath.x = x + 64;
                    breath.y = y;
                    breath.d = -1;
                }
                breath.exist = true;
                scene.addChild(breath);
                boss.count++;
                boss.frame = 3;
            }

            //ブレス動作
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (breath.exist == true && breath.d == 1) {
                    if (isHit(kuma, breath)) {
                        scene.removeChild(breath);
                        kumaDead();
                    }
                    breath.x -= 10;
                    breath.y += 10;
                    breath.count++;
                }
                else if (breath.exist == true && breath.d == -1) {
                    if (isHit(kuma, breath)) {
                        scene.removeChild(breath);
                        kumaDead();
                    }
                    breath.x += 10;
                    breath.y += 10;
                    breath.count++;
                }
            });

            //ブレスカウント
            scene.addEventListener(Event.ENTER_FRAME, function () {
                if (breath.count == 15) {
                    changeFalse(breath);
                    boss.frame = 2;
                    boss.atacking = false;
                    boss.atackFlag = 0;
                    
                }
            });

            //爆破エフェクト
            function brast(x, y, n) {  //x ,y 爆破座標　ｎフレーム番号
            }

            //ロックバスター改
            function atackBuster(x, y, remainingBullets) {
                if (kuma.remainingBullets < 5) {
                    if (kuma.scaleX == 1) {
                        beam[remainingBullets].scaleX = 1;
                        beam[remainingBullets].x = x + 32;
                        beam[remainingBullets].y = y + 16;
                        beam[remainingBullets].direction = true;
                    }
                    else if (kuma.scaleX == -1) {
                        beam[remainingBullets].scaleX = -1;
                        beam[remainingBullets].x = x - 32;
                        beam[remainingBullets].y = y + 16;
                        beam[remainingBullets].direction = false;
                    }
                    beam[remainingBullets].exist = true;
                    scene.addChild(beam[remainingBullets]);
                    kuma.remainingBullets++;
                }
                else if (kuma.remainingBullets == 5) {
                    for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                        if (beam[remainingBullets].exist == false) {
                            kuma.remainingBullets = remainingBullets;
                        }
                    }
                }
            }

            //ビーム動作改
            scene.addEventListener(Event.ENTER_FRAME, function () {
                for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {

                    if (beam[remainingBullets].exist == true && beam[remainingBullets].direction == true) {
                        if (map.hitTest(beam[remainingBullets].x , beam[remainingBullets].y)) {
                            changeFalse(beam[remainingBullets]);
                            scene.removeChild(beam[remainingBullets]);
                        }
                        beam[remainingBullets].x += 10;
                        beam[remainingBullets].count++;
                    }
                    else if (beam[remainingBullets].exist == true && beam[remainingBullets].direction == false) {
                        if (map.hitTest(beam[remainingBullets].x , beam[remainingBullets].y)) {
                            changeFalse(beam[remainingBullets]);
                            scene.removeChild(beam[remainingBullets]);
                        }
                        beam[remainingBullets].x -= 10;
                        beam[remainingBullets].count++;
                    }
                }
            });

            //ビームカウント改
            scene.addEventListener(Event.ENTER_FRAME, function () {
                for (var remainingBullets = 0; remainingBullets < 5; remainingBullets++) {
                    if (beam[remainingBullets].count == 30) {
                        changeFalse(beam[remainingBullets]);
                    }
                }
            });

            //クマ死亡
            var kumaDead = function () {
                kuma.frame = 3;
                kuma.y -= 20;
                game_.pushScene(createGameoverScene(kuma));
            }

            //ゲームクリア
            var game_clear = function () {
                game_.pushScene(createGameClearScene());
            }

            //アイテムのスピードアップ機能
            var itemsSpeedUp = function () {
                game_.fps = 100;
            }

            //ビーム、ブレスなどオブジェクトのfalse処理
            function changeFalse(object) {
                object.exist = false;
                object.x = 5000;
                object.y = 5000;
                object.count = 0;
            }

            function changeDirection(object) {
                if (object.count == 20) {
                    object.count = 0;
                    if (object.direction == false) {
                        object.scaleX = 1;
                        object.direction = true;
                    }
                    else if (object.direction == true) {
                        object.scaleX = -1;
                        object.direction = false;
                    }
                }    
            }

            //ボス当たり判定 isHit
            function isHit(char1, char2) {
                var char1HalfWidth = char1.width / 2;
                var char2HalfWidth = char2.width / 2;

                var char1Bottom = char1.y + char1.height;
                var char2Bottom = char2.y + char2.height;
                var char1Left = char1.x - char1HalfWidth;
                var char2Left = char2.x - char2HalfWidth;
                var char1Right = char1.x + char1HalfWidth;
                var char2Right = char2.x + char2HalfWidth;

                var hitFlag1 = char1Bottom > char2.y;
                var hitFlag2 = char1Left < char2Right;
                var hitFlag3 = char2Left < char1Right;
                var hitFlag4 = char2Bottom > char1.y;

                var isHit = hitFlag1 && hitFlag2 && hitFlag3 && hitFlag4;
                if (isHit) {
                    return true;
                }
                else false;
            }

            return scene;
        };

        var createGameoverScene = function (kuma) {
            var scene = new Scene();
            scene.backgroundColor = 'rgba(0,0,0,0.5)';
            var gameoverImage = new Sprite(189, 97);
            gameoverImage.image = game_.assets['./img/gameover.png'];
            gameoverImage.x = 150;
            gameoverImage.y = 170;
            scene.addChild(gameoverImage);
            return scene;
        };

        var createGameClearScene = function () {
            var scene = new Scene();
            var gameClearImage = new Sprite(267, 48);
            gameClearImage.image = game_.assets['./img/clear.png'];
            gameClearImage.x = 80;
            gameClearImage.y = 170;
            scene.addChild(gameClearImage);
            return scene;
        };

        var startGameScene = function () {
            var scene = new Scene();
            scene.backgroundColor = '#8cc820';         // シーンの背景色を設定
            var startButton = new Sprite(236, 48);
            startButton.image = game_.assets['./img/start.png'];
            startButton.x = 100;
            startButton.y = 200;
            scene.addChild(startButton);
            scene.addEventListener(Event.TOUCH_START, function (e) {
                game_.replaceScene(createGameScene());
            });
            return scene
        }

        game_.replaceScene(startGameScene());

    }

    game_.start();

};




