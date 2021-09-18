class UnSplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID 4rtI2zXvNVjiBAHYSn4Z9dVmOyvex05h2ok6j3Z5rTg'
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'animal',
                count: 1
            }
        });
    }

    async getRandomImage() {

        try {
            const result = await this.axiosNesne.get('/photos/random');
            console.log(result.data[0].urls.regular);

            return result.data[0].urls.regular;
        } catch (error) {
            console.log(error);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318.jpg'
        }
    }
}

export default function getImage() {
    const image = new UnSplashApi().getRandomImage();
    return image;
}