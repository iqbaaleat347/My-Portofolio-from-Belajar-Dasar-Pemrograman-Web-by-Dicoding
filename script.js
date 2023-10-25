const judul = document.getElementsByClassName('brand-logo-name')[0];

judul.innerHTML = '<em> Submission Web Pemula by IAM </em>';
judul.style.color = 'black';

let card = document.querySelectorAll('.card-sosmed');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "ig") {
            event.target.setAttribute("src", "image/ig 250p filled.jpg");
            return;
        } else if (event.target.id === "git") {
            event.target.setAttribute("src", "image/git 250p filled.jpg");
            return;
        } else if (event.target.id === "wp") {
            event.target.setAttribute("src", "image/wp 250p filled.jpg");
            return;
        } else if (event.target.id === "tt") {
            event.target.setAttribute("src", "image/tt 250p filled.jpg");
            return;
        } else if (event.target.id === "x") {
            event.target.setAttribute("src", "image/x 250p filled.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "ig") {
            event.target.setAttribute("src", "image/ig 250p.jpg");
            return;
        }
        if (event.target.id === "git") {
            event.target.setAttribute("src", "image/git 250p.jpg");
            return;
        }
        if (event.target.id === "wp") {
            event.target.setAttribute("src", "image/wp 250p.jpg");
            return;
        }
        if (event.target.id === "tt") {
            event.target.setAttribute("src", "image/tt 250p.jpg");
            return;
        }
        if (event.target.id === "x") {
            event.target.setAttribute("src", "image/x 250p.jpg");
            return;
        }
    });
}