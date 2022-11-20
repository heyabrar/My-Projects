var playicon = document.getElementById('play_icon');
var song = document.getElementById('Audio');

playicon.onclick = function ( ){
    if(song.paused){
        song.play( );
        playicon.innerHTML = `<i class="fa-solid fa-pause"></i>`
    }
    else{
        song.pause( );   
        playicon.innerHTML =`<i class="fa-solid fa-play" ></i>`
    }
}

