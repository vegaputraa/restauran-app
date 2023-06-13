import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
      <div class="content">
        <h2 class="content__heading">Find Your Favorite</h2>
        <br>
        <hr>
        <div id="restos" class="restos">
        </div>
      </div>
      `;
    },
   
    async afterRender() {
      const restos = await TheRestoDbSource.listOfResto();
      const restoContainer = document.querySelector('#restos');
      restos.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    },
  };
   
  export default Home;