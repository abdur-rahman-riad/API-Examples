const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayRandomUsers(data))
}

const displayRandomUsers = user => {
    const userArray = user.results;
    const randomDisplay = document.getElementById('random-users');
    for (const userObject of userArray) {
        const userName = `${userObject.name.title} ${userObject.name.first} ${userObject.name.last}`;
        // console.log(userName);
        const newParagraph = document.createElement('p');
        newParagraph.innerText = userName;
        randomDisplay.appendChild(newParagraph);
    }
}