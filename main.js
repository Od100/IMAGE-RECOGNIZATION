Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quallity:90
});
camera=document.getElementById("Camera");
Webcam.attach('#Camera');
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZS83-CooJ/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}