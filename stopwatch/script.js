let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const buttons = document.querySelector(".buttons");


function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (elapsedTime % 1000).toString().padStart(3, '0');
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    if (!running) {
        running = true;
        const startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    laps.innerHTML = '';
    updateDisplay();
}

const lapButton = document.createElement('button');
lapButton.id = 'lap';
lapButton.innerText = 'Lap';
buttons.appendChild(lapButton);

var laps = document.createElement("div");
laps.id = 'laps';
document.body.appendChild(laps);

function lap() {
    var li = document.createElement('li')
    laps.appendChild(li);
    li.innerHTML = display.textContent;
}


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap)

updateDisplay();

console.log(Date.now())