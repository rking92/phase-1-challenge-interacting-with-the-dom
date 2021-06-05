document.addEventListener("DOMContentLoaded", function() {
    const secondsPassed = document.querySelector('h1#counter')
    const plus = document.getElementById('plus')
    const pause = document.getElementById('pause')
    const minus = document.getElementById('minus')
    const like = document.getElementById('heart')
    const likeList = document.querySelector('.likes')
    const submit = document.getElementById('submit')
    const commentsList = document.getElementById('list')
    const commentField = document.querySelector('input#comment-input')


    var interval = setInterval(every1sec, 1000);
    var i = 0
    var heartCounter = 1

    function every1sec() {
    secondsPassed.textContent = i++;
    }

    every1sec ();

    pause.addEventListener('click', function()  {
        if (pause.innerText == 'pause') {
            clearInterval(interval)
            pause.innerText = 'resume'
            plus.disabled = true;
            minus.disabled = true;
            like.disabled = true;
            submit.disabled = true;
        } else {
            interval = setInterval(every1sec, 1000);
            var i = secondsPassed;
            pause.innerText = 'pause'
            plus.disabled = false;
            minus.disabled = false;
            like.disabled = false;
            submit.disabled = false;
        }
    })

    submit.addEventListener('click', function(event){
        event.preventDefault();
        var comment = commentField.value
        var p = document.createElement('p');
        var node = document.createTextNode(comment)
        p.appendChild(node);
        commentsList.appendChild(p);
        commentField.value = ''
      });

    like.addEventListener('click', function() {
        i = secondsPassed.textContent
        var likedItem = document.getElementById(`${i}`)
        if (likedItem) {
            heartCounter++
            likedItem.innerText = `${i} was liked ${heartCounter} times.`
        } else {
            var li = document.createElement('li');
            li.setAttribute('id', `${i}`);
            var node = document.createTextNode(`${i} was liked 1 time`)
            li.appendChild(node);
            likeList.appendChild(li);
        }
    })
   });