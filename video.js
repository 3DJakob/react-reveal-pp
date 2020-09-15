const video = document.querySelector('#videoElement')

const usingVideo = false

if (usingVideo) {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream
      })
      .catch(function (err0r) {
        console.log('Something went wrong!')
      })
  }

  video.addEventListener('click', () => {
    document.body.requestFullscreen()
  })
} else {
  document.querySelector('.video-container').style.display = 'none'
}
