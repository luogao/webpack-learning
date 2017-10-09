import flvjs from 'flv.js'

if (flvjs.isSupported()) {
    var videoElement = document.getElementById('videoElement');
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://192.168.8.17:7000/live/STREAM_NAME.flv'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
}