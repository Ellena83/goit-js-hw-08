     import Player from "@vimeo/player";
     import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(playOn, 1000));

    function playOn ({seconds}) {
        localStorage.setItem('videoplayer-current-time', seconds);
    }
  let timeCount = localStorage.getItem('videoplayer-current-time');
  if (timeCount !== null) {
    player.setCurrentTime(timeCount);
  }   
 
populateLocalstorage()

function populateLocalstorage() {
    const savedData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    if (!savedData) {
       console.log(null);
    }
    else console.log(savedData);
    }