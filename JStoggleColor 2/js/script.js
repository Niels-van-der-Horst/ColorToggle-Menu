// Keyboard color event

document.addEventListener("keyup", function(event) {
 
    let key = event.key;
   
    switch (key) {
        case '1':
            colorBG('g');
            break;
        case '2':
            colorBG('r');
            break;
        case '3':
            colorBG('o');
            break;
        case '4':
            colorBG('p');
            break;
        case '5':
            colorBG('gr');
            break;
        default:
            console.log("No keypress yet!");    

    }

});


// Display Menu onClick


function showMenu () {
    var x = document.getElementById("menu-list");
    if (x.style.display === "block") {
        x.style.display = "none";

    } else {
        x.style.display = "block";
    }
}
function colorBG(a) {
    let secColor = document.querySelector("body");
    
            if (a=="g")
            {
                secColor.style.backgroundColor = "grey";
                closeMenu();
            }

            if (a=="r")
            {
                secColor.style.backgroundColor = "red";
                closeMenu();
            }
            if (a=="o")
            {
                secColor.style.backgroundColor = "orange";
                closeMenu();
                
            }
            if (a=="p")
            {
                secColor.style.backgroundColor = "purple";
                closeMenu();
            }
            if (a=="gr")
            {
                secColor.style.backgroundColor = "green";
                closeMenu();
            }
            

// Automatic close Menu    

}
function closeMenu() {
  const menuContainer =  document.querySelector('#menu-list');
  menuContainer.style.display = "none";

}

