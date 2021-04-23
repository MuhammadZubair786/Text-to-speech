

function textToAudio(){
    let msg=document.getElementById("text").value;

    let speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";

    speech.text=msg;
    speech.volume=20;
    speech.rate=10;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

//  setTimeout(Clear, 2000);
    
}

// function Clear(){
//     document.getElementById('text').value="";
// }
