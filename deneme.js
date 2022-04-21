class araba{
    constructor (ad) {
        this.adi = ad;
    }
    yazdir(){
        console.log(`adı = ${this.adi}`);
    }
}



// Yukaridaki kodlar ile alınan_araba class'ından bir nesne nasıl
// olusturulur?
let araba1 = new araba("tofas");
araba.yazdir(araba1);
console.log(araba);