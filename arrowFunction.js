console.log('Uygulama Basladi...');

var kareAl = (x, y) => x + y;

console.log(kareAl(3, 5));

var ogrenci = {
    isim:'ugur',
    kendiniTanit:() =>{//arrowFunction uygulamasıdır.
        console.log(`Merhaba ben ${this.isim}`);
    },
    selamVer (){//thisKeywordFunction uygulamasıdır. 
        console.log(`Merhaba ben ${this.isim}`);
    }
};

ogrenci.kendiniTanit();
ogrenci.selamVer();