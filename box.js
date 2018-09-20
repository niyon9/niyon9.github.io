'use strict';

var para = document.querySelectorAll('.nav p');

////////////////////////////

function updateName() {
    var name = prompt('Enter a new name for Player ' + this.dataset.index);
    this.textContent = 'Player' + this.dataset.index + ': ' + name;
    console.log(`Player${this.dataset.index} has changed name to ${name}`);
}

function getBMI() {
    var height = parseFloat(prompt('请输入身高(m):'));
    var weight = parseFloat(prompt('请输入体重(kg):'));
    var bmi = weight/(height**2);
    var bmiM = '';
    if(bmi >= 35) {
        bmiM = "严重肥胖";
    } else if(bmi >= 28) {
        bmiM = "肥胖";
    } else if(bmi >= 25) {
        bmiM = "过重";
    } else if(bmi >= 18.5) {
        bmiM = "正常";
    } else if(bmi > 0) {
        bmiM = "过轻";
    } else {
        bmiM = "神仙?";
    }
    this.textContent = `BMI: ${bmiM} ${bmi}`;
}

var bmi = document.querySelector('#bmi');
bmi.addEventListener('click', getBMI);

////////////////////////////

for (var i = 0; i <= para.length; i++) {
    para[i].dataset.index = i + 1;
    para[i].addEventListener('click', updateName);
}