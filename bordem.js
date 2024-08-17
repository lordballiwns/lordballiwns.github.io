// 1.0.4
var currentTime = new Date().getHours();
var gradientColors = [
    'linear-gradient(to bottom right, #ff6347, #ffd700)', // Amanecer
    'linear-gradient(to bottom right, #ffd700, #87ceeb)', // Día
    'linear-gradient(to bottom right, #87ceeb, #00008b)'  // Anochecer
];

var gradientIndex = 0;
if (currentTime >= 6 && currentTime < 8) {
    gradientIndex = 0; // Amanecer
} else if (currentTime >= 8 && currentTime < 18) {
    gradientIndex = 1; // Día
} else {
    gradientIndex = 2; // Anochecer
}

document.querySelector('.my-button').style.borderImage = gradientColors[gradientIndex];