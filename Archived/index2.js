var playList = [
    ['I Did It My Way','Frank Sinatra'],
    ['Respect','Aretha Franklin'],
    ['Imagine','John Lennon'],
    ['Born to Run','Bruce Springsteen'],
    ['Louie Louie','The Kingsmen'],
    ['Maybellene','ChuckBerry']
];

function print(msg){
    document.write('<p>' + msg + '</p>');
}

function printSongs(songs){
    var listHTML = "<ol>";
    for ( var i = 0; i < songs.length; i ++){
        listHTML += "<li>" + songs[i][0] + " by " + songs[i][1] + "</li>";
    }
    listHTML += "</ol>";
    print(listHTML);
}

printSongs(playList);