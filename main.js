var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition() ;


function on(){
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event);}