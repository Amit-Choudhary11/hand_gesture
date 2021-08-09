Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 100
    });
    
    webcam= document.getElementById("camera");
    
    Webcam.attach("#webcam");
    
    function take_Picture(){
        Webcam.snap(function(data_uri){
            document.getElementById("snapshot").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
        })
    }
    
    console.log(ml5.version);
    
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P-0jTWiPp/model.json",model_loaded);
    
    function model_loaded(){
        console.log("model loaded");
    }
    

    
    