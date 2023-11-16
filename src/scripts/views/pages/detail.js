import RestaurantApiSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <article id="detail" class="detail-restaurant"></article>
    <article id="likeButtonContainer"></article>
    <article class="add-review">
      <h3>Add Your Review</h3>
      <form id="review-input-form">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name"><br>
        <label for="review">Review: </label>
        <textarea id="review" name="review" rows="4"></textarea><br>
        <button id="submit-review" type="submit">Submit Review</button>
      </form>
    </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const reviewForm = document.querySelector('#review-input-form');
    const reviewResult = document.querySelector('.detail-customer');

    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const reviewInput = document.getElementById('review');

      const newReview = {
        id: restaurant.id,
        name: nameInput.value,
        review: reviewInput.value,
      };

      const response = await RestaurantApiSource.addReview(newReview);

      if (response.status === 'success') {
        reviewResult.innerHTML = 'Review submitted successfully.';
      } else {
        reviewResult.innerHTML = '2x Refresh to show your update review!';
      }
    });
  },
};

export default Detail;
