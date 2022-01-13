function send(){
    No1 = document.getElementById("No1").value;
    No2 = document.getElementById("No2").value;
    answer = parseInt(No1) * parseInt(No2);

    qn = "<h4>" + No1 + " x " + No2 + "</h4>";
    ib = "<br> Answer : <input type='number' id='icb'>";
    cb = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = qn + ib + cb;

    document.getElementById("output").innerHTML = row;

    document.getElementById("No1").value = "";
    document.getElementById("No2").value = "";
}
qt = "Player1Name";
at = "Player2Name";

function check(){
    getanswer = document.getElementById("icb").value;
if(getanswer == actualanswer){
    if(answerturn = "Player1Name"){
        updatep1score = player1score + 1;
        document.getElementById("Player1Score").innerHTML = updatep1score;
    }
    else{
        updatep2score = player2score + 1;
        document.getElementById("Player2Score").innerHTML = updatep2score;
    }
}
if(questionturn = "Player1Name"){
    questionturn = "Player2Name"
    document.getElementById("question").innerHTML = "Host:" + Player2;
}
else
    questionturn = "Player1Name"
    document.getElementById("question").innerHTML = "Host:" + Player1;
}