window.addEventListener('DOMContentLoaded', () =>{
    
    let loadDiv = document.querySelector('.loader');
    
    function fetched() {
        fetch('/kitten/image')
            .then(res => {
                loadDiv.innerHTML = "... Loading ..."
                return res.json()
            })
            .then(data => {
                setTimeout(() => {
                    let catPic = document.querySelector('.cat-pic');
                    loadDiv.innerHTML = "";
                    catPic.src = data.src;
                }, 500)
            })
    }
    
    fetched();

    let newpicButton = document.getElementById('new-pic')
    newpicButton.addEventListener('click', () => {
        fetched();
    })


});


