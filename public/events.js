window.addEventListener('DOMContentLoaded', event =>{
    fetch('/kitten/image')
        .then(res =>res.json())
        .then(data => {
            let catPic = document.querySelector('.cat-pic');
            catPic.src = data.src;
        })

})
