var firebaseConfig = {
      apiKey: "AIzaSyAwi1jyvBO5MryEh_39f7ICckDsgrKfITY",
      authDomain: "kwitter-881df.firebaseapp.com",
      databaseURL: "https://kwitter-881df-default-rtdb.firebaseio.com",
      projectId: "kwitter-881df",
      storageBucket: "kwitter-881df.appspot.com",
      messagingSenderId: "218527669674",
      appId: "1:218527669674:web:05b21606ea780c7fb6dfd3"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}