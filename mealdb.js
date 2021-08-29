const searchFoods = () => {
    const searchFiled = document.getElementById('food-searchID');
    const searchFiledText = searchFiled.value;
    // Cler Data
    searchFiled.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFiledText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    console.log(meals)
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    for (const meal of meals) {
        // console.log(meal);
        const newDiv = document.createElement('div');

        newDiv.classList.add('col');
        newDiv.innerHTML = `
            <div class="card h-50" onclick="loadMealDetails('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text"">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        `;

        searchResult.appendChild(newDiv);
    }
}

const loadMealDetails = mealID => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = mealDetails => {
    console.log(mealDetails);
}