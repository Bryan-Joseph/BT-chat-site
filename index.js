document.getElementById("login").onclick = function() {
    var name = document.getElementById("nameI").value;
    var room = document.getElementById("roomI").value;
    var roomPass = document.getElementById("roomPassI").value;

    localStorage.setItem("user-name", name);
    localStorage.setItem("room-name", room);
    localStorage.setItem("room-pass", roomPass);

    window.location = "chat.html";
};
