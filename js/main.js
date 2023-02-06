function names() {
    var playerone = prompt("What is the name of Player 1?");
    var firstlenght = playerone.length;
    var firstc = playerone.slice(0, 1);
    if (firstlenght === 0) {
        var name1 = document.querySelector(".name1");
        name1.innerHTML = ("Player 1");
    }
    else {
        var name1 = document.querySelector(".name1");
        name1.innerHTML = (firstc.toUpperCase() + playerone.slice(1,15));
    }
    var playertwo = prompt("What is the name of Player 2?");
    var secondlenght = playertwo.length;
    var secondc = playertwo.slice(0, 1);
    if (secondlenght === 0) {
        var name2 = document.querySelector(".name2");
        name2.innerHTML = ("Player 2");
    }
    else {
        var name2 = document.querySelector(".name2");
        name2.innerHTML = (secondc.toUpperCase() + playertwo.slice(1,15));
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
        header.innerHTML = "Player 1 wins";
    }
    else if (P1 < P2) {
        var header = document.querySelector(".head");
        header.innerHTML = "Player 2 wins";
    }
    else {
        var header = document.querySelector(".head");
        header.innerHTML = "I win";
    }
}