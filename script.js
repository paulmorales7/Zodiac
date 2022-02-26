const horoPost = document.getElementById("horo-res");
const buttonS = document.getElementById("horobtn");


buttonS.addEventListener("click", getHoro)

document.querySelectorAll('.sign-buttons button').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.popup-sign').style.display = 'block';
    }
})


function getHoro() {
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=libra&day=yesterday", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "e9ba0571fcmshf76e484ea6bc956p15a46ajsn80fa8a7712dd"
        }
    })
    .then(response => {
       return response.json();
    })
    .then(data => {
        console.log(data)

        horoPost.innerHTML = data.description
    }) 
    .catch(err => {
        console.error(err);
    });
}


