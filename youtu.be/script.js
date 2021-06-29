function validate() {
   var x = document.getElementById('AAAAA').value;
  if (x == "") {
    alert("Please provide a video link");
    return false;
  } else {
    trimURL()
    imagePreview()
    linkPreview()
  }

  var youtubeurl = document.getElementById('AAAAA').value
  var url_string = youtubeurl;
  var url = new URL(url_string)
  if(!url.hostname.includes('youtu.be')) {
    alert('You must include a youtu.be URL. Reload the page to try again.');
    return;
  } else if (!url.pathname) {
    alert('Please give a video ID. Reload the page to try again')
    return;
  } else {
    trimURL()
    imagePreview()
    linkPreview()
  }
}

var youtubeurl = document.getElementById('AAAAA').value

let link;
let videoID;

var btn = document.getElementById('btn');


// btn.addEventListener("click", validate)
// btn.addEventListener("click", trimURL)

function trimURL() {
  var youtubeurl = document.getElementById('AAAAA').value
  var url_string = youtubeurl;
  var url = new URL(url_string)
  var vuno = url.pathname;
  var v = vuno.replace('/', '')

  console.log("Video ID: " + v)

  videoID = v

  link = "https://img.youtube.com/vi/" + v + "/original.jpg"
}

function imageOnCrac() {
  window.location.href = link
}

function imagePreview() {
  imagePreview = function(){}
 
  var img = document.createElement("img");

  img.src = link
  img.style = "display: block;margin-left: auto;margin-right: auto;width:50%;height:50%;"
  img.onclick = imageOnCrac
  var src = document.getElementById("imageframe");
  src.appendChild(img);
}

function linkOnCrac() {
  window.open("https://youtube.com/watch?v=" + videoID)
}

function linkPreview() {
  linkPreview = function () { }

  var p = document.createElement("p");

  p.innerText = "Click Here to watch the video"
  p.style = "text-decoration:underline;"
  p.onclick = linkOnCrac

  var src = document.getElementById("videolink");
  src.appendChild(p);
}