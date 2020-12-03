export interface Ad {
    imageUrl : string;
    title: string;
    body: string;
    url : string;

}
const ALL_ADS: Ad[] = [
    {
        imageUrl:
        'primerImageUrl',
        title: 'Primer Ad',
        body : 'La prueba del primer Ad',
        url:'https://ensalud.org/novedades/'

    },
    {
        imageUrl:
        'segundoImageUrl',
        title: 'Segundo Ad',
        body : 'La prueba del 2o Ad',
        url:'https://ensalud.org/novedades/'

    },
    {
        imageUrl:
        'tercerImageUrl',
        title: '3er Ad',
        body : 'La prueba del 3er Ad',
        url:'https://ensalud.org/novedades/'

    },
    {
        imageUrl:
        'cuartoImageUrl',
        title: '4o Ad',
        body : 'La prueba del 4o Ad',
        url:'https://ensalud.org/novedades/'

    },
]
class Ads {
    private static instance : Ads;
    private ads : Ad[]

    private constructor(){
        this.initAds();
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();
        }

        return Ads.instance;
    }

    private initAds(){
        this.ads = [...ALL_ADS]
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
        return this.ads.pop()
    }
}

export default Ads