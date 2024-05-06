function videoInit(){
    var video = document.createElement('video')
    var parent = document.getElementById('video')
    var videosrc = document.createElement('source')

    video.autoplay = "true"
    video.loop = "true"
    video.muted = true  //requirment for chrome66
    video.volume = '0.75'
    video.style.opacity = '0.7'
    video.style.width = '100%'
    video.style.display = 'none'
    video.setAttribute('id','mushyokutense-video')

    
    videosrc.src = "static/mushyokutense.mp4"
    videosrc.type = 'video/mp4'

    parent.appendChild(video)
    video.appendChild(videosrc)
    document.getElementById('mushyokutense-video').play()
}

function videoControl(){
    const video = document.getElementById('mushyokutense-video')
    const button1 = document.getElementById('videoControl')
    if (video.style.display == 'block'){
        video.style.display = 'none'
        button1.textContent = 'Display background Anime'
        document.getElementById('videoSource').style.display = 'none'
        document.getElementsByTagName('main')[0].style.backgroundColor = 'rgba(234, 231, 231,1)'
    }
    else{
        video.style.display = 'block'
        button1.textContent = 'Hind background Anime'
        document.getElementById('videoSource').style.display = 'block'
        console.log(document.getElementsByTagName('main')[0].style.backgroundColor)
        document.getElementsByTagName('main')[0].style.backgroundColor = 'rgba(234, 231, 231,0)'
    }

}

function videoVoice(){
    const video = document.getElementById('mushyokutense-video')
    const button2 = document.getElementById('videoVoice')
   if (video.muted == true){
    video.muted = false
    button2.textContent = 'Mute background music'
    //console.log(video.muted)
   }
   else{
    video.muted = true
    button2.textContent = 'Unmute background music'
    //console.log(video.muted)
   }
}

document.addEventListener('DOMContentLoaded', function(){
    //load functions
    videoInit()
    console.log(document.getElementById('mushyokutense-video').style.display)
    //document.getElementById('mushyokutense-video').muted = false
})

