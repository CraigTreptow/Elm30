const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  if (navigator.mediaDevices.getUserMedia) {
    console.log('using getUserMedia');
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(localMediaStream => {
        console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
        })
      .catch(function (e) { console.log(e.name + ": " + e.message);});
  } else {
    console.log('using getWebcam');
    navigator.getWebcam(
      { audio: true, video: true }, 
      localMediaStream => {
        console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
      },
      function () { console.log("Web cam is not accessible."); }
    );
  }

  //  navigator.getUserMedia({ video: true, audio: false })
  //  // navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  //    .then(localMediaStream => {
  //      console.log(localMediaStream);
  //      video.src = window.URL.createObjectURL(localMediaStream);
  //      // video.play();
  //    });
}

getVideo();
