import getRandomJoke from './joke_api.js';
import getRandomImage from './unSplashApi.js';

class Ekran {
  constructor() {
    this.sakaGetirBtn = document.querySelector('.saka-getir-button');
    this.sakaGetirBtn.addEventListener('click', () => this.sakaGetir());
  }

  async sakaGetir() {
    const saka = await getRandomJoke();
    const resim = await getRandomImage();

    const results = {
      saka,
      resim
    }
    this.ekranaSonuclariYazdir(results)
  }

  ekranaSonuclariYazdir(results) {
    document.querySelector('.sonuc').innerHTML = `
        <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="${results.resim}"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-danger">
                    ${results.saka}
                  </p>
                </div>
              </div>
            </div>

            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-primary">Şakanın Çevirisi</p>
                </div>
              </div>
            </div>
          </div>
        `
  }
}

export default function uygulamayiBaslat() {
  new Ekran();
}