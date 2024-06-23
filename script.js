function Hello_My_Website() {
    if (confirm("Czy na pewno chcesz opuśćić witrynę?")) {
        alert("Akcja się uruchamia...");

    } else {

        alert("Szkoda");

    }
}
      

function Write_Text() {
    var name = prompt("Podaj swoje imię ","");
    if (name != null) {
       alert("cześć" + name + "! jak się masz :D?");

    } else {

        alert("Szoda że nie podałeś/aś swojego imienia :(");

    }
}


  function Link_Hack() {
    if(confirm("Hacking link ha ha ha! ;)")) {
        alert("To jest JavaScript a nie Khan Academy");
    } else {

        alert("HTML")
      }
    }
  


    function Mathematic() {
        var Quiz = prompt("10 + 10 = ","");
        if (Quiz != null) {
           alert("Gratulacje!" + Quiz + "10 + 10 = 20.");
    
        } else {
    
            alert("Szkoda że nie podjąłeś/aś wyzwania.");


        }
    }



    



    

