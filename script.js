const searchInput = document.getElementById
    ('searchInput');
const searchButton = document.getElementById
    ('searchButton');
const mealList = document.getElementById
    ('mealList');
const modalCotainer = document.getElementById
    ('modalCotainer');
const mealDetailsContent = document.getElementById
    ('mealDetailsContent');
const recipeCloserBtn = document.getElementById
    ('recipeCloserBtn');


searchButton.addEventListener('click', async () => {
    const ingrendient = searchInput.value.trim();
    if (ingrendient) {
        const meals = await searchMealsByIngredient(ingrendient);
        displayMeals(meals);

    }
}
);

mealList.addEventListener('click', async (e) => {
    const card = e.target.closest('.meal-item');
    if (card) {
        const mealId = card.dataset.id;
        const meal = await getMealDetails(mealId);
        if

    }
})