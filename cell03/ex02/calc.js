// แสดงแจ้งเตือนทุกๆ 30 วินาที
setInterval(function() {
    alert('Please, use me...');
}, 30000);

// ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวกหรือศูนย์
function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const leftVal = document.getElementById('left').value;
    const rightVal = document.getElementById('right').value;
    const op = document.getElementById('op').value;

    // ตรวจสอบความถูกต้องของอินพุต
    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftVal, 10);
    const rightNum = parseInt(rightVal, 10);

    // ตรวจสอบการหารหรือมอดุโลด้วย 0
    if ((op === '/' || op === '%') && rightNum === 0) {
        const msg = "It's over 9000!";
        alert(msg);
        console.log(msg);
        return;
    }

    let result = 0;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
});

