// 検索ボタンをクリックした時の関数
function clickButton() {
  // 変数に入力欄の文字を入れる
  var breadName = $(".inputText").val();
  // シートからデータを取得する
  $.ajax({
    // GASをデプロイして作ったURL
    url: "https://script.google.com/macros/s/AKfycby4Z88iIKJZ9GQ2prVjhYn4TitCa7eam4A3Vvy7XlbBX6_WgSUIVwaBVovI1LkqAArfNg/exec",
    type: "GET",
    dataType: "json",
    success: function (sheet) {
      // 変数にシートのデータを入れる
      var memo = sheet.allData;
      // パンの数だけ検索をくりかえす
      for (var i = 0; i < memo.length; i++) {
        // iの値によって、検索するパンの名前を変える
        if (breadName == memo[i][0]) {
          // 指定したHTMLの中身を書き換える
          $(".outputText1").text(memo[i][0]);
          $(".outputText2").text(memo[i][1]);
          $(".outputText3").text(memo[i][2]);
          $(".outputText4").text(memo[i][3]);
          $(".outputText5").text(memo[i][4]);
          // 検索を止める
          break;
        }
        // それ以外の場合
        else {
          // 指定したHTMLの中身を書き換える
          $(".outputText1").text("Enter Correct Name...It's still case sensitive, Sorry!");
          $(".outputText2").text("");
          $(".outputText3").text("");
          $(".outputText4").text("");
          $(".outputText5").text("");
        }
      }
    }
  });
};
