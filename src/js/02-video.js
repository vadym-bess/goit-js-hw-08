import throttle from "lodash.throttle";
import Player from '@vimeo/player';

    const iframe = document.querySelector("iframe");
    const player = new Vimeo.Player(iframe);
    const CURRENT_TIME = "vimeo-player-current-time";
    

    
    function afterReboot () {
    const currentTime = localStorage.getItem(CURRENT_TIME);
    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
   }

   afterReboot();



    const onPlay = function (data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
};

    player.on("timeupdate", throttle(onPlay, 1000));

    

