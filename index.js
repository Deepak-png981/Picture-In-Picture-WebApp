//to grabbing the html elements in javascript
var videoElement = document.getElementById("video");
var btn = document.getElementById("btn");

//asynchronus function so that browser can run it
//separately, if it has any error it will not affect 
//our remaining code
//like the download thing which we do in our browser , download is continuing in the background
async function videoStream() {
    //try and catch statement
    try {
        //calling the screen capture API
        const stream = await navigator.mediaDevices.getDisplayMedia();
        //setting the src of videoElement as "stream"
        videoElement.srcObject = stream;
        //when the complete data is loaded on the video element 
        videoElement.onloadedmetadata = () => {
            //then play the video
            videoElement.play();
        }
    }

    catch (error) {
        console.log("Deepak bhai error through hua hai");
    }
} 
btn.addEventListener("click" , async()=>{
    //disabbling the button
    btn.disabled = true;
    //calling the picture in picture API
    await videoElement.requestPictureInPicture();
    btn.disabled = false;
})
//calling the videoStream function
videoStream();

