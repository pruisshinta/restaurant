import RestaurantApiSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <article class="jumbotron">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1.jpg">
        <img class="jumbotron-img" src="./images/heros/hero-image_1.jpg" alt="pembuka web">
      </picture>
    </article>
    <h2 class="title-name">Find Restaurant</h2>
    <article id="domain" class="list-restaurant">
    </article>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantApiSource.restaurantList();
    const restaurantContainer = document.querySelector('#domain');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
