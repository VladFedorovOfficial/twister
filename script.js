var c = 0;

function twister() {         
    
    var color;
    var textColor = '#ffffff';
    var backgroundColor;
    var randInt = Math.floor(Math.random() * 4) + 1;
    if (randInt == 1) { backgroundColor = '#ff6666'; color = 'красное'};
    if (randInt == 2) { backgroundColor = '#66ff66'; color = 'зелёное'; textColor = '#333333'};
    if (randInt == 3) { backgroundColor = '#6666ff'; color = 'синее'};
    if (randInt == 4) { backgroundColor = '#ffff66'; color = 'желтое'; textColor = '#333333'};

    $('#title').css({'background': backgroundColor, 'color': textColor, 'cursor': 'auto'});
    $('#loader').css({'background': textColor});
    $('.restart').css({'color': textColor, 'display': 'inline'});

    var textDirection;
    var randInt = Math.floor(Math.random() * 4) + 1;
    if (randInt == 1) { textDirection = 'Правую руку'};
    if (randInt == 2) { textDirection = 'Правую ногу'};
    if (randInt == 3) { textDirection = 'Левую руку'};
    if (randInt == 4) { textDirection = 'Левую ногу'};

    $('#title').html(textDirection + ' на ' + color);

};

// $(window).keypress(function() {if (c == 0) {$('#loader').css({'background': '#ffffff', 'animation': 'loading 5s linear infinite'})}});
// $(window).keypress(function() {if (c == 0) {setInterval(() => {twister()}, 5000)}; if (c == 0) {c = 1};});
// $('#title').click(function() {if (c == 0) {$('#loader').css({'background': '#ffffff', 'animation': 'loading 5s linear infinite'})}});
// $('#title').click(function() {if (c == 0) {setInterval(() => {twister()}, 5000)}; if (c == 0) {c = 1};});

function start() {
    if (c == 0) {
        $('#loader').css({'background': '#ffffff', 'animation': 'loading 5s linear infinite'});
        $('.restart').css({'color': '#ffffff', 'display': 'inline'});
        setInterval(twister, 5000);
        c = 1;
    };
};

$('#title').click(start);
$(window).keypress(start);