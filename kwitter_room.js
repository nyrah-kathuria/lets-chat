var firebaseConfig = {
      apiKey: "AIzaSyDDABthA-O8k7qocUhUOkTftFGSlrdmS-c",
      authDomain: "kwitter-d20d7.firebaseapp.com",
      databaseURL: "https://kwitter-d20d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-d20d7",
      storageBucket: "kwitter-d20d7.appspot.com",
      messagingSenderId: "450791182058",
      appId: "1:450791182058:web:d2d3dc0fc5cdb103aa1193"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  var firebaseConfig = {
      apiKey: "AIzaSyBH1ZINUfFB3jFbikJaEJcnIaSh-v6bm6w",
      authDomain: "letschat-faba3.firebaseapp.com",
      projectId: "letschat-faba3",
      storageBucket: "letschat-faba3.appspot.com",
      messagingSenderId: "187005895915",
      appId: "1:187005895915:web:5c856229f1b3945d23aaae",
      measurementId: "G-9Z4ZVYYN4J"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML=" welcome " + user_name + " ! ";

    function  addRoom()
    {
      room_name = document.getElementById("room_name").ariaValueMax

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
   window.location ="index.html";
}