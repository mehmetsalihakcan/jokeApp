class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
        });
    };

    async getRandomJoke() {

        try {
            const result = await this.axiosNesne.get('/jokes/random');
            console.log(result.data.value);

            return result.data.value;
        } catch (error) {
            console.log(error);
        }
    }
}

export default  function getJoke() {  // sınıfın içindekileri dışarı açmadık sadece bir metodu açtık
    const joke =  new JokeApi().getRandomJoke();

    return joke;
}