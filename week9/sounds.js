document.addEventListener('keydown', function(e) {
    key = e.key;
    var audio= null;
    switch(key.toLowerCase()){
        case 'a': audio = new Audio('sounds/clap.wav');
            break;
        case 's': audio = new Audio('sounds/hihat.wav');
            break;
        case 'd': audio = new Audio('sounds/kick.wav');
            break;
        case 'f': audio = new Audio('sounds/openhat.wav');
            break;
        case 'g': audio = new Audio('sounds/boom.wav');
            break;
        case 'h': audio = new Audio('sounds/ride.wav');
            break;
        case 'j': audio = new Audio('sounds/snare.wav');
            break;
        case 'k': audio = new Audio('sounds/tom.wav');
            break;
        case 'l': audio = new Audio('sounds/tink.wav');
            break;
        default:
            break;
    
    }
    audio.play();
    console.dir
});