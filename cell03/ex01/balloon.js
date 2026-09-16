const balloon = document.getElementById('balloon');

let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0; // 0: red, 1: green, 2: blue

// อัปเดตขนาดและสีของลูกโป่ง
function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

// เมื่อกดคลิกที่ลูกโป่ง
balloon.addEventListener('click', function() {
    size += 10;
    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }
    updateBalloon();
});

// เมื่อนำเมาส์ออกจากลูกโป่ง
balloon.addEventListener('mouseleave', function() {
    if (size > 200) {
        size -= 5;
        if (size < 200) {
            size = 200;
        }
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }
    updateBalloon();
});
