const menu = document.querySelector("#menu");

const oppgaveSider = [
    { navn: "Oppgavesett 4", url: "index.html"},
    { navn: "Oppgave 1", url: "oppgave01.html"},
    { navn: "Oppgave 2", url: "oppgave02.html"},
    { navn: "Oppgave 3", url: "oppgave03.html"},
    { navn: "Oppgave 4", url: "oppgave04.html"},
    { navn: "Oppgave 5", url: "oppgave05.html"},
    { navn: "Oppgave 6", url: "oppgave06.html"},
    { navn: "Oppgave 7", url: "oppgave07.html"},
    { navn: "Oppgave 8", url: "oppgave08.html"},
    { navn: "Oppgave 9", url: "oppgave09.html"},
    { navn: "Oppgave 10", url: "oppgave10.html"}
];

for(const oppgaveSide of oppgaveSider) {
    const valgtSide = document.location.href;
    const sjekk = valgtSide.search(oppgaveSide.url);

    let klasse = "";

    if(sjekk > 0) {
        klasse = "active";
    }

    menu.innerHTML += `
        <a class="${klasse}" href="${oppgaveSide.url}">${oppgaveSide.navn}</a>
    `;

}