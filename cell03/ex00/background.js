document.getElementById('colorBtn').addEventListener('click', function() {
    // สุ่มรหัสสี Hex (#000000 ถึง #FFFFFF)
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
});

