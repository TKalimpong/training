const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
//「どこの」「何を」「どう変えたいか」

// カラーピッカーを操作したときの一連の操作
const colorBg = () => {
    // 選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;

    // カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent= `カラーコード：${color.value}(white)`;
    } else if (color.value === '#000000') {
        text.textContent= `カラーコード：${color.value}(black)`;
    } else {
        text.textContent= `カラーコード：${color.value}`;
    }
}
//カラーピッカーが変更されたら、colorBgを発動させる
color.addEventListener('input',colorBg);
