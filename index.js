const drums = $(".drum");

$(document).ready(() => {
    for (let i = 0; i < drums.length+1 ; i++) {
        $(`.set .drum:nth-child(${i}`).click(() => {
            console.log(`bong! ${$(`.set .drum:nth-child(${i}`).text()}`);
           
        });
    }
})