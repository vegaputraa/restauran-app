import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
      return `
      <div id="resto" class="resto">Detail Resto</div>
      <div id="likeButtonContainer"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestoDbSource.detailResto(url.id);
      const restoContainer = document.querySelector('#resto');
      restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        picture: restaurant.pictureId,
        rating: restaurant.rating,
      },
      });
    },
  };
   
  export default Detail;