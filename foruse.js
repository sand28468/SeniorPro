function textCheck() {
    let age = document.getElementById("agehere").value;
    if (age) {
        if (isNaN(age)) {
            return false;
        } else {
            return true;
        }
        return false;
    }else{
        return false;
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

function getGender(){
    for(let i=1;i <4 ; i++) {
        let radio = document.getElementById(i).checked;
        if (radio) {
            return document.getElementById(i).value;
        }
    }
}
