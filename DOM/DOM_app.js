let btn = document.createElement('button');
btn.style.margin = '10px';
btn.addEventListener('click', function () {
    alert('Congratulations, you clicked the button!');
});
btn.textContent = 'Click Here';
document.body.prepend(btn);

let form = document.getElementById('textForm');
let messageBtn = document.getElementById('messageBtn');
messageBtn.style.display = 'block';
messageBtn.style.margin = '10px';

messageBtn.addEventListener('click', function () {
    let textArea = document.getElementById('textMessage');
    alert(textArea.value);
});

let testDiv = document.getElementById('color');

testDiv.style.backgroundColor = 'cyan';
testDiv.style.height = '100px';
testDiv.style.width = '100px';

testDiv.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'purple';
});

testDiv.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'cyan';
});

let paragraph = document.createElement('p');
paragraph.id = 'colorP';
paragraph.textContent = 'Lorem ipsum blah blah.';

paragraph.addEventListener('click', function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.color = randomColor;
});

document.body.appendChild(paragraph);

let btnTwo = document.createElement('button');
btnTwo.id = 'btn2';
btnTwo.textContent = 'Click for Name';
document.body.appendChild(btnTwo);

let nameDiv = document.createElement('div');
nameDiv.style.margin = '10px';
document.body.appendChild(nameDiv);

btnTwo.addEventListener('click', function () {
    let nameSpan = document.createElement('SPAN');
    nameSpan.textContent = 'Rachel Parker';
    nameSpan.style.display = 'block';
    nameSpan.style.margin = '5px';
    nameDiv.appendChild(nameSpan);
});

let friendButton = document.getElementById('friendButton');
friendButton.style.margin = '10px';
let friendList = document.getElementById('friendList');


friends = ['Friend1', 'Friend2', 'Friend3', 'Friend4', 'Friend5',
'Friend6', 'Friend7', 'Friend8', 'Friend9', 'Friend10'];

let i = 0;

friendButton.addEventListener('click', function () {
    friendsCount = friends[i];
    let listPoint = document.createElement('li');
    listPoint.textContent = friendsCount;
    listPoint.style.margin = '5px';
    friendList.appendChild(listPoint);
    i++;
    if (i === 10) {
        i = 0;
    }
})
