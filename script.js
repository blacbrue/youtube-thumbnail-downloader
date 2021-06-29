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
  if (!url.hostname.includes('youtube.com')) {
    alert('You must include a youtube.com URL. Reload the page to try again.');
    return;
  } else if (!url.searchParams.get('v')) {
    alert('Please give a video ID. Reload the page to try again')
    return;
  } else {
    trimURL()
    imagePreview()
    linkPreview()
  }
}

let urla = window.location.href
let urlaE = new URL(urla)
let uRlA = urlaE.searchParams.get('desktop')
let ytlink = urlaE.searchParams.get('ytlink')
let imgID = urlaE.searchParams.get('imgid')

function checkDevice() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if(uRlA == "true") {
      return
    }
    else {
      window.location = "https://yttimgdl.tk/youtu.be/"
    }
  } else {
    return;
  }
}

function input() {
  if(ytlink) {
    document.getElementById('AAAAA').value = ytlink
    trimURL()
    imagePreview()
    linkPreview()
  } else {
    return;
  }
}

function imageID() {
  if(imgID) {
    window.location.replace('https://img.youtube.com/vi/' + imgID + '/original.jpg')
  } else {
    return;
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
  var v = url.searchParams.get("v")

  videoID = v

  link = "https://img.youtube.com/vi/" + v + "/original.jpg"
}

function imageOnCrac() {
  window.location.href = link
}

function imagePreview() {
  imagePreview = function () { }

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

function mathSum(num1, num2) {
  var ans = +num1 + +num2
  console.log(ans)
}