document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    textsplit = text.split("\n");
    for (i=0; i<textsplit.length; i++){
        textsplit[i] = parseInt(textsplit[i]);
    }
    textsplit.splice(-1);
    let frequency = 0
    for (j=0; j<textsplit.length; j++){
        frequency += textsplit[j]
    

    }
    console.log(frequency);
    
}


   



