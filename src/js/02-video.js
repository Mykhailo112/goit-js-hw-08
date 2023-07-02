import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function({seconds}) {
localStorage.setItem("videoplayer-current-time",JSON.stringify(seconds))
};

player.on('timeupdate',throttle(onPlay, 1000));

const resetTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(resetTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});