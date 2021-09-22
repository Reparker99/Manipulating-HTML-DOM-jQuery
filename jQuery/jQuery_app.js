let btn = $('<button id="btnOne">Click Here</button>');
$(btn).click(function () {
    alert('Congratulations, you clicked the button!');
});
$(btn).css({'margin': '10px'});
$('body').prepend(btn);

$('#messageBtn').click(function () {
    alert($('#textMessage').val());
});
$('#messageBtn').css({'display': 'block', 'margin': '10px'});

$('#color').css({'background-color': 'cyan', 'height': '100px', 'width': '100px', 'margin': '10px'});

$('#color').mouseenter(function () {
    $(this).css({'background-color': 'purple'});
});

$('#color').mouseleave(function () {
    $(this).css({'background-color': 'cyan'});
});

let paragraph = $('<p id="color">Lorem ipsum blah blah.</p>');
$('#color').after(paragraph);

$(paragraph).click(function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css({
        'color': randomColor
    });
});

let btnTwo = $('<button id="nameBtn">Click for Name</button>');
let nameDiv = $('<div id="myName"></div>');
$(nameDiv).css({'margin': '10px'});

$('body').append(btnTwo);
$('body').append(nameDiv);

$(btnTwo).click(function () {
    let nameSpan = ($('<span id="nameId">Rachel Parker</span>'));
    $(nameSpan).css({'margin': '5px', 'display': 'block'});
    $('body').append(nameSpan);
});

let friends = ['Friend1', 'Friend2', 'Friend3', 'Friend4', 'Friend5',
'Friend6', 'Friend7', 'Friend8', 'Friend9', 'Friend10'];

let i = 0;

$('#friendButton').click(function () {
    let friendCount = friends[i];
    let listItem = $('<li></li>');
    $(listItem).text(friendCount);
    $(listItem).css({'margin': '10px'});
    $('#friendList').append(listItem);
    i++
    if (i === 10) {
        i = 0;
    };
});
