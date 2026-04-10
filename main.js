function getLevel() {
    var  level = Number(document.getElementById("enumber").value);

    switch (level){
        case 1:
            document.getElementById("levelc").innerHTML=
            "Level: Easy Mode";
            break;
            
        case 2:
            document.getElementById("levelc").innerHTML=
            "Level: Intermediate Mode";
            break;

        case 3:
            document.getElementById("levelc").innerHTML=
            "Level: Normal Mode";
            break;

        case 4:
            document.getElementById("levelc").innerHTML=
            "Level: Hard Mode";
            break;

        case 5:
            document.getElementById("levelc").innerHTML=
            "Level: Difficult Mode";
            break;

        case 6:
            document.getElementById("levelc").innerHTML=
            "Level: Very Difficult Mode";
            break;

        default:
            window.alert("Invalid Section Number");
            
    }
}