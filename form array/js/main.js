var username_input = document.getElementById("username_input");
var password_input = document.getElementById("password_input");
var confirm_input = document.getElementById("confirm_input");
var email_input = document.getElementById("email_input");
var users_table = document.getElementById("users_table");
var main_container= document.querySelector(".main-container");
var users_ul = document.getElementById("users_ul");
var notif_p = document.getElementById("notif_p");

var ID = 0;
var users = [];

function register(){

    event.preventDefault();

   var username = username_input.value;
   var password = password_input.value;
   var confirm = confirm_input.value;
   var email = email_input.value;


   if(password == confirm){
    ID++;

    var obj = {
        id:ID,
        username:username,
        password:password,
        email:email
    };
    users.push(obj);

    
    
    fillContent();
    console.log(users);


   }else{
    notif_p.innerText = "Notification : Password mismatch...";
    notif_p.style.display = "block";
    notif_p.style.color = "red";
   }


}

function fillContent(){
    users_table.innerHTML = "<tr><th>ID</th> <th>Username</th> <th>Email</th></tr>";
    main_container.innerHTML = "";
    users_ul.innerHTML = "";
    for( var i = 0; i < users.length; i++){
        //table filling
   var tr = users_table.insertRow(users[i].ID);
   var td0 = tr.insertCell(0);
   var td1 = tr.insertCell(1);
   var td2 = tr.insertCell(2);
   
    

    td0.innerText = users[i].id;
    td1.innerText = users[i].username;
    td2.innerText = users[i].email; 

    //main container  filling

    var div = document.createElement("div");
    div.className = "inner-container";
    var h2 = document.createElement("h2");
    h2.innerText = "Username: " + users[i].username;
    var hr = document.createElement("hr");
    var p = document.createElement("p");
    p.innerText = "Email: " + users[i].email;

   
     div.appendChild(h2);
     div.appendChild(hr);
     div.appendChild(p);

    main_container.appendChild(div);


    //ul filling

    var li = document.createElement("li");
    li.innerText = users[i].username;
    users_ul.appendChild(li);
    notif_p.innerText = "Notification: successy Registered...";
    notif_p.style.display = "block";
    notif_p.style.color = "green";

    }
}

function clearItems(){
    event.preventDefault();
    // users_table.innerHTML = "<tr><th>ID</th> <th>Username</th> <th>Email</th></tr>";
    // main_container.innerHTML = "";
    // users_ul.innerHTML = "";

    users = [];
    ID = 0;
    fillContent()
    


 }