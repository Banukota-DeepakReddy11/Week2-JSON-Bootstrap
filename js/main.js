
const singers = [
    {
        name: "Arijit Singh",
        song: "Tum Hi Ho",
        dob: "April 25, 1987"
    },
    {
        name: "Sid Sriram",
        song: "Srivalli",
        dob: "May 19, 1990"
    },
    {
        name: "Ed Sheeran",
        song: "Perfect",
        dob: "February 17, 1991"
    },
    {
        name: "Justin Bieber",
        song: "Baby",
        dob: "March 1, 1994"
    },
    {
        name: "Michael Jackson",
        song: "Billie Jean",
        dob: "August 29, 1958"
    },
    {
        name: "The Weeknd",
        song: "Blinding Lights",
        dob: "February 16, 1990"
    },
    {
        name: "Lady Gaga",
        song: "Shallow",
        dob: "March 28, 1986"
    }
];

const table = document.getElementById("singerTable");

singers.forEach(function(singer) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${singer.name}</td>
        <td>${singer.song}</td>
        <td>${singer.dob}</td>
    `;

    table.appendChild(row);
});
