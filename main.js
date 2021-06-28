


function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xcPOzlaVu/model.json',modelLoaded); //119
  }
  
  
  
  function modelLoaded() {
      console.log('Model is Loaded!');
  }
  
 
 
  function gotResult(error, results) {
    if (error)
     {
      console.error(error);
    } 
    else 
    console.log(results);
    document.getElementById("status").innerHTML = results[0].label;
    if (results[0].label == "mask worn"){
      document.getElementById("result").innerHTML ="Can Enter";
    }
    else if (results[0].label == "mask partially worn"){
      document.getElementById("result").innerHTML ="Kinldy wear the mask";
    }
    else if (results[0].label == "mask not worn"){
      document.getElementById("result").innerHTML ="Kinldy wear the mask";
    }
 
  }

  
  function draw() {
    image(video, 0, 0, 350, 350);
    classifier.classify(video, gotResult);
     

      }
    




