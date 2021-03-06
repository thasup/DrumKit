for (let i = 0; i < $(".drum").length + 1; i++) {
    $(`.set .drum:nth-child(${i}`).on("click", function () {
        
        console.log($(this).text());
        makeSound($(this).text());
        buttonAnimation($(this).text());
    });
}

$(document).keydown(function (event) {
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            playSound("tom-1");
            break;
        case "s":
            playSound("tom-2");
            break;
        case "d":
            playSound("tom-3");
            break;
        case "f":
            playSound("tom-4");
            break;
        case "j":
            playSound("crash");
            break;
        case "k":
            playSound("kick-bass");
            break;
        case "l":
            playSound("snare");
            break;
        default: console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    $(`.${currentKey}`).addClass("pressed");
    setTimeout(() => {
        $(`.${currentKey}`).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    let audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
};