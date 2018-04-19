document.addEventListener("DOMContentLoaded", function () {
    var intervalOn = false
    let intervalId = ''
    var loopState = 0;
    document.addEventListener('keydown', function (e) {

        if (e.keyCode == 32) {

            if (intervalOn === true) {
                console.log("stop");

                clearInterval(intervalId)
                intervalOn = false

            } else {
                console.log("start");
                intervalOn = true
                generator(instruments);

            };
        } else {
            play(e.keyCode)
        };
    });


    function play(e) {
        var audio = document.querySelector(`audio[data-key="${e}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    };

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
        }];


    function generator(arrOfObj) {
        loopState = 0;
        function genInterv() {
            if (loopState == 16) {
                loopState = 0
            };
            for (let indx = 0; indx < arrOfObj.length; indx++) {
                if (arrOfObj[indx].loop[loopState] !== ' ') {
                    play(arrOfObj[indx].smpl)
                }
            }
            loopState++
        }

        genInterv()
        intervalId = setInterval(() => {
            genInterv()
        }, 88);
    };


    function createTable(arrOfObj) {
        for (let i = 0; i < arrOfObj.length; i++) {
            const sequencerRow = document.createElement("div");
            sequencerRow.classList.add("sequencerRow", i);
            document.querySelector("#sequencerMain").appendChild(sequencerRow);
            for (let j = 0; j<arrOfObj[i].loop.length; j++){
                const sequencerCell = document.createElement("div");
                sequencerCell.classList.add("sequencerCell");
                sequencerCell.setAttribute("data-i", i.toString())
                sequencerCell.setAttribute("data-j", j.toString())
                const sequencerRowIndex = document.querySelectorAll(".sequencerRow")[i]
                sequencerRowIndex.appendChild(sequencerCell)
            };

        }


    };
    createTable(instruments)
    
    // const sequencerCellList = document.querySelectorAll(".sequencerCell")
    // sequencerCellList.addEventListener("click", function () {
    //     console.log("xd");
    // })
    document.addEventListener('click', function(e){
        if(e.target.class=="sequencerCell"){
            console.log("xd");
        }
    })

});