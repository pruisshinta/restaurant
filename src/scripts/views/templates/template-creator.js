import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<section class="restaurant-box">
<a href="/#/detail/${restaurant.id}">
    <div class="poster">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <h2 class="rating">⭐️${restaurant.rating}</h2>
    </div>
    <h2>${restaurant.name}</h2>
    <h3>${restaurant.city}</h3>
    <p>${restaurant.description}</p>
</a>
</section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <section class="detail-container">
        <article class="wrapping">
            <div class="detail-poster">
                <img class="detail-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
                <h2 class="detail-rating">⭐️${restaurant.rating}</h3>
            </div>
            <div class="detail-info">
                <h2 class="restaurant-name">${restaurant.name}</h2>
                <h3>Address</h3>
                <p>${restaurant.address}</p>
                <h3>City</h3>
                <p>${restaurant.city}</p>
                <h3>Categories</h3>
                <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
            </div>
        </article>
        <article class="description">
            <h3>Description</h3>
            <p>${restaurant.description}</p>
        </article>
        <article class="menu-box">
        <div class="food">
            <h3>Food Menu</h3>
            <p>${restaurant.menus.foods.map((food) => `
                <li>${food.name}</li>
            `).join('')}
            </p>
        </div>
        <div class="drink">
            <h3>Drink Menu</h3>
            <p>${restaurant.menus.drinks.map((drink) => `
                <li>${drink.name}</li>
            `).join('')}
            </p>
        </div>
        </article>
        <article class="review-box">
            <h3>Review Customer</h3>
            <div class="detail-review">
            ${restaurant.customerReviews.map((customer) => `
                <div class=detail-customer>
                    <h4>${customer.name}</h4>
                    <h5>${customer.date}</h5>
                    <p>${customer.review}</p>
                </div>
            `).join('')}
            </div>
        </article>
    </section>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};
