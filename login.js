function addUser(){
    Player1 = document.getElementById("Player1Name").value;
    Player2 = document.getElementById("Player2Name").value;

    localStorage.setItem("Player1", Player1)
    localStorage.setItem("Player2", Player2)

    window.location = "quiz.html";
}