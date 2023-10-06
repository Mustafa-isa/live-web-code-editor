// check for localStorage

localStorage.getItem("htmlCode")
  ? (document.getElementById("htmlCode").value = localStorage.getItem(
      "htmlCode"
    ))
  : (document.getElementById("htmlCode").value = "<div>\n\n</div>");

localStorage.getItem("cssCode")
  ? (document.getElementById("cssCode").value = localStorage.getItem("cssCode"))
  : (document.getElementById("cssCode").value = "<style>\n\n</style>");

localStorage.getItem("jsCode")
  ? (document.getElementById("jsCode").value = localStorage.getItem("jsCode"))
  : (document.getElementById("jsCode").value = "<script>\n\n</script>");

// write code that stored in local storage in iframe
if(localStorage.getItem("frameData")){
  let frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(localStorage.getItem("frameData"));
  frame.close();
}else{
  console.log("no frame data stored")
}


function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  const frameData = htmlCode + cssCode + jsCode;

  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
  localStorage.setItem("frameData", frameData);
  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
