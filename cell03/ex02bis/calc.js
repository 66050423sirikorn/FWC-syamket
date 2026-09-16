$(document).ready(function() {
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);

    function isPositiveInteger(str) {
        return /^\d+$/.test($.trim(str));
    }

    $('#calcForm').submit(function(e) {
        e.preventDefault();

        const leftVal = $('#left').val();
        const rightVal = $('#right').val();
        const op = $('#op').val();

        if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
            alert('Error :(');
            return;
        }

        const leftNum = parseInt(leftVal, 10);
        const rightNum = parseInt(rightVal, 10);

        if ((op === '/' || op === '%') && rightNum === 0) {
            const msg = "It's over 9000!";
            alert(msg);
            console.log(msg);
            return;
        }

        let result = 0;
        switch (op) {
            case '+': result = leftNum + rightNum; break;
            case '-': result = leftNum - rightNum; break;
            case '*': result = leftNum * rightNum; break;
            case '/': result = leftNum / rightNum; break;
            case '%': result = leftNum % rightNum; break;
        }

        alert(result);
        console.log(result);
    });
});

