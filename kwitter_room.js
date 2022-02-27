// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCbvN-NEil56o6lH21Z3-LiOrnHWVOHlsg",
      authDomain: "kwitter-babda.firebaseapp.com",
      databaseURL: "https://kwitter-babda-default-rtdb.firebaseio.com",
      projectId: "kwitter-babda",
      storageBucket: "kwitter-babda.appspot.com",
      messagingSenderId: "348606077911",
      appId: "1:348606077911:web:552958bcb0d2cf2daf0992"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
