const searchFoods = () => {
    const searchFiled = document.getElementById('food-searchID');
    const searchFiledText = searchFiled.value;
    searchFiled.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFiledText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}