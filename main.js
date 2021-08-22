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
    
    prediction_one="";
 
    
    function speak(){
    var api= window.speechSynthesis;
    speak_data="The hand gesture you showed means"+prediction_one;
    converted_data= new SpeechSynthesisUtterance(speak_data);
    api.speak(converted_data);
    }
    
    function predict_Gesture(){
        img = document.getElementById("captured_image");
        classifier.classify(img, got_result);
    }
    
    
    function got_result(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    
        if(results[0].label== "Everything's OK"){
            document.getElementById("emoji_1").innerHTML= "&#128076";
            prediction_one="Everythings Ok";

        } 
        if(results[0].label== "Victory"){
            document.getElementById("emoji_1").innerHTML= "&#9996";
            prediction_one="Victory";

        } 
        if(results[0].label== "Crossed Fingers"){
            document.getElementById("emoji_1").innerHTML= "&#129310";
            prediction_one="Hope For The Best";

        } 
        if(results[0].label== "Thumbs Up"){
            document.getElementById("emoji_1").innerHTML= "&#128077";
            prediction_one="Great Job";

        } 
        if(results[0].label== "Thumbs Down"){
            document.getElementById("emoji_1").innerHTML= "&#128078";
            prediction_one="Bad Job";

        } 
        speak();
}

    
    
    }
    
    
    