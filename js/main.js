var ame1 = "Player 1";
var ame2 = "Player 2";

function names() {
    var playerone = prompt("What is the name of Player 1?");
    var firstlenght = playerone.length;
    var firstc = playerone.slice(0, 1).toUpperCase();
    ame1 = (firstc + playerone.slice(1,10));

    if (firstlenght > 0) {
        var name1 = document.querySelector(".name1");
        name1.innerHTML = (ame1);
    } else {
        ame1 = "Player 1"
        var name1 = document.querySelector(".name1");
        name1.innerHTML = (ame1);
    }

    var playertwo = prompt("What is the name of Player 2?");
    var secondlenght = playertwo.length;
    var secondc = playertwo.slice(0, 1).toUpperCase();
    ame2 = (secondc + playertwo.slice(1, 10));
    if (secondlenght > 0) {
        var name2 = document.querySelector(".name2");
        name2.innerHTML = (ame2);
    } else {
        ame2 = "Player 2"
        var name2 = document.querySelector(".name2");
        name2.innerHTML = (ame2);
    }
}


function roll() {
    var P1 = Math.floor((Math.random() * 6) + 1);
    var randomdiceimg1 = ("dice" + P1 + ".png");
    var randomimgsrc1 = ("./img/" + randomdiceimg1);
    var img1 = document.querySelectorAll(".img1")[0];
    img1.setAttribute("src", randomimgsrc1);

    var P2 = Math.floor((Math.random() * 6) + 1);
    var randomdiceimg2 = ("dice" + P2 + ".png");
    var randomimgsrc2 = ("./img/" + randomdiceimg2);
    var img2 = document.querySelectorAll(".img2")[0];
    img2.setAttribute("src", randomimgsrc2);


    if (P1 > P2) {
        var header = document.querySelector(".head");
        header.innerHTML = (ame1 + " wins!");
    }
    else if (P1 < P2) {
        var header = document.querySelector(".head");
        header.innerHTML = (ame2 + " wins!");
    }
    else {
        var header = document.querySelector(".head");
        header.innerHTML = "No one wins";
    }
}