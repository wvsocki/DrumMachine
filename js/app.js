document.addEventListener("DOMContentLoaded", function () {
    var intervalOn = false
    let intervalId = ''
    document.addEventListener('keydown', function (e) {

        if (e.keyCode == 32) {
            // console.log("spacja działa");

            if (intervalOn === true) {
                console.log("stop");

                clearInterval(intervalId)
                intervalOn = false

            } else {
                console.log("start");
                intervalOn = true
                generator(instruments);

            }
        } else {
            play(e.keyCode)
        }
    })


    function play(e) {
        var audio = document.querySelector(`audio[data-key="${e}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        // console.log(e);

    }

    let instruments = [
        {
            name: "kick",
            smpl: 81,
            loop: ["x", ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ']
        },
        {
            name: "snare",
            smpl: 69,
            loop: [" ", ' ', ' ', ' ', "x", ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ']
        },
        {
            name: "closedHat",
            smpl: 89,
            loop: ["x", ' ', 'x', ' ', "x", ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ']
        },
        {
            name: "openHat",
            smpl: 85,
            loop: [" ", ' ', ' ', ' ', " ", ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        }]


    function generator(arrOfObj) {
        var loopState = 0;

        function genInterv() {
            if (loopState == 16) {
                loopState = 0
            }
            ;
            for (let indx = 0; indx < arrOfObj.length; indx++) {
                if (arrOfObj[indx].loop[loopState] == ' ') {
                } else {
                    play(arrOfObj[indx].smpl)
                }
            }
            loopState++
        }

        genInterv()
        intervalId = setInterval(() => {
            genInterv()
        }, 88);
    }

    function createTable(arrOfObj) {
        for (let i = 0; i < arrOfObj.length; i++) {

        }


    }

});