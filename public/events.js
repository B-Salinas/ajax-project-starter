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

    let popScore = document.querySelector('.score');

    function upVote() {
        fetch('/kitten/upvote')
            .then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res.json()
            })
            .then(data => {
                popScore.innerText = data.score;
            })
            .catch(err => {
                err.json().then(errorJSON => {
                    window.alert(errorJSON.message);
                })
            })
    }

    function downVote() {
        fetch('/kitten/downvote')
            .then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res.json()
            })
            .then(data => {
                popScore.innerText = data.score;
            })
            .catch(err => {
                err.json().then(errorJSON => {
                    window.alert(errorJSON.message);
                })
            })
    }

    let upvoteButton = document.getElementById('upvote');
        upvoteButton.addEventListener('click', (event) => {
            upVote();
        })


    let downvoteButton = document.getElementById('downvote');
        downvoteButton.addEventListener('click', (event) => {
            downVote();
        })

    

    


});
