prediction_1 = "";
prediction_2 = "";

    Webcam.set({

        height: 300,
        width:300,
        image_format: 'png',
        png_quality:99
    });

    camera = document.getElementById("camera");

    Webcam.attach("#camera");

    function take_snapshot(){

        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });

        };
        
        console.log('ml5 version', ml5.version);

        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zbz7XDOaf/',modelLoaded);

        function modelLoaded()
        {
            console.log('model Loaded!');
        }
    
        function speak()
        {
            var synth =  window.speechSynthesis;
            speak_data_1 = "The First Prediction Is "+prediction_1;
            speak_data_2 = "The Second Prediction Is "+prediction_2;
            var utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
            synth.speak(utter_this);

            }