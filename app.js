

function textToAudio(){
    let msg=document.getElementById("text").value;
if(msg == ''){
    alert("Enter Text For Convert To Spech")
}
else{


  

    let speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";


    speech.text=msg;
    speech.volume=20;
    speech.rate=1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

//  setTimeout(Clear, 2000);
    
}
}
// function Clear(){
//     document.getElementById('text').value="";
// }
