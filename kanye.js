const loadQuates = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuates(data))
}

const displayQuates = quate => {
    // console.log(quate);
    const showQuate = document.getElementById('kanye-quate');
    showQuate.innerText = quate.quote;
}