let mainDiv = document.getElementById('main');

mainDiv.addEventListener('click', function () {
    hexNumber = randomIntFromInterval(1000, 9999);
    this.style = "background-color: #" + hexNumber + 'FF';
}, false);
