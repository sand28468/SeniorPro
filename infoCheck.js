function textCheck() {
    let age = document.getElementById("agehere").value;
    if (age) {
        if (isNaN(age)) {
            return false;
        } else {
            return true;
        }
    }else{
        return false;
    }

}
function getAge(){
    let age = document.getElementById("agehere").value;
    return age
}
function getGender(){
    for(let i=1;i <4 ; i++) {
        let radio = document.getElementById(i).checked;
        if (radio) {
            return document.getElementById(i).value;
        }
    }
}

function radioCheck() {
    for(let i=1;i <4 ; i++) {
        let radio = document.getElementById(i).checked;
        if(radio) {
            return true;
        }
    }
    return false;
}


