window.addEventListener('DOMContentLoaded', () =>{

    let loadDiv = document.querySelector('.loader');

    function fetched() {
        fetch('/kitten/image')
            .then(res => {
                loadDiv.innerHTML = "... Loading ..."
                if(!res.ok){
                    throw res;
                }
                return res.json()
            })
            .then(data => {
                setTimeout(() => {
                    let catPic = document.querySelector('.cat-pic');
                    loadDiv.innerHTML = "";
                    catPic.src = data.src;
                }, 500)
            })
            .catch(err => {
                err.json().then(errorJSON => {
                    window.alert(errorJSON.message);
                })
            })
    }

    fetched();

    let newpicButton = document.getElementById('new-pic')
    newpicButton.addEventListener('click', () => {
        fetched();
    })

    


});
