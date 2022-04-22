// 1-) NodeJS de aşşağıdakilerin hangisi bir fonksiyon tanımlamasıdır?

// function a(){
//     1+2;
// }

// 2-) NodeJS de aşşağıdakilerin hangisi tek satırda tanımlanır?

// var f=(x) => (x*x+2);

// 3-) Bir fonksiyonda hesaplanan değeri geri döndürmek için hangisi kullanılır

//     return


// 4-)NodeJS de terminale bilgi amacıyla yazdrımak için aşağıdakilerden hangisi kullanılmalıdır?

//console.log();

//5-) ( 21 + 3 / 2 ) işleminin sonucu kaçtır?

//22.5

//6-) ( 13 + ( 12 + 8 ) / 2 * 4 ) işleminin sonucu kaçtır?

//53

//7-) if( 1 == '1') işleminin sonucu nedir?

//true // 2 eşittir de tırnakların içine bakılır değerler aynı değere dönüştürülür

//8-) if( 1 === '1') işleminin sonucu nedir?

//false // 3 eşittirde tırnakların içindeki değere bakılır ve değerin türüne bakılır

//9-) aşağıdakilerden hangisi satır içi karşılaştırma işlmeidir?

// sonuc = ( 5 > 4) ? 'doğru' : 'Yanlış';

//10-) beş varklı durum kontrol edilmek istenirse hangi kalıbı kullanmalıyız

// if(....){
//     ...
// }else if(...){
//     ...
// }else if(...){
//     ...
// }else if(...){
//     ...
// }else if(...){
//     ...
// }else{
//     ...
// }

//11-)event.emitter kullanılarak yapılan kodlamada dinleyici ve gönderici 
//sırası aşağıdakilerden hangisidir?

// 1. on ifadesi dinleyici

// 2. emit ifadesi gönderici

//12-) NodeJs 'de modul olarak tanamlanan kodlarda bir fonksiyon
// dışaraya aktarılmak istenirse başında nasıl bir ifade olmalidir?

// export;

// 13-) events. EventEmitter saraszyla mesaj alma ve gonderme islemleri
// hangi fonksiyonlarla gerceklestirilir?

// 1. on ifadesi dinleyici

// 2. emit ifadesi gönderici

// 14-) NodesJS'de bir modulde bazi parametreler ve fonksiyonlara
// hangi ifade ile disariya aktarabiliriz?

//export ifadesi

// 15-) NodeJs'de bir modul icinde tanımlı olan bisiklet adli class 'ımzı
// sadece dogrudan disariya aktarma işlemi nasıl yapalır?

// module.exports=bisiklet;

// class araba{
//     constructor () {...}}
// 16-) 
//  const _araba=require("./araba");
// Yukaridaki kodlar ile alınan_araba class'1ndan bir nesne nas1l
// olusturulur?



// class araba{
//     constructor (model,motorHacmi) {...}}
// 17-) const araba=require (" ./araba") ;
// Yukaridaki kodlar ile alınan _araba class'1ndan bir nesne nas1l
// olusturulur?




// class araba{
//     vitesDegistir(vitesNo){...}

// 18-)
// class araba
// vitesDegistir(vitesno){...)
// const araba=require(". /araba");
// Yukaradaki kodlar ile arabanın vites değiştirmesi istenirse
// nasl kodlama ile yapalır?


// 19-)
// let i=0;
// while(i < 10){
//     console.log(`Dizi indisi ${i} `)
//     i+=2;
// }

//yukarıdaki satırı çalıştırıldığnda ekrana kaç kez yazı yazar?  {5}


//20-)
// for (let i=10; i <10; i+=3){
//     console.log(` Dizi indisi : ${i}` );
// }
// Yukaradaki kodlar calıştarıldigında, console. log satirı kaç defa
// ekrana yazı yazar?  {0}


//21-)
// for (let i=10; i > 0; i+=3){
//     console.log(` Dizi indisi : ${i}` );
// }
// Yukaradaki kodlar calıştarıldigında, console. log satirı kaç defa
// ekrana yazı yazar? {Unlimated Loop}



//22-)
// for (let i=10; i > 0; i-=3){
//     console.log(` Dizi indisi : ${i}` );
// }
// Yukaradaki kodlar calıştarıldigında, console. log satirı kaç defa
// ekrana yazı yazar?  {4}

// 23-) sayilar adl1 bir dizide map fonksiyonu kuulanalarak
// elemanlaran 4 bölünerek değiştirilmesi için asağıdaki kodlarandan hangisi
// ile gerçeklestirebiliriz?

// sayilar.map((elem)=>{
//     elem=elem/4;
// });


// 24-) sayilar adlı bir dizide çift sayılara sadece yeni bir
// diziye toplamak için aşağıdaki kodlardan hangisi ile
// gerceklestirilir?

// ciftsayilar = sayilar.filter((elem)=>{
//     return ((elem%2)==0);
// });

// 25-) 3 farklı class 'an tanimlandiğa bir modulde
// asağidaki hangi islem ile dasaradan kullanaılmas1 sağlanmıs
// olunur

// module.exports(1.class,2.class,3.class)

// 26-) module.exports isleminde araba adla class dişaridan
// kullanalmak istendiğinde ismi tofas olarak gözükebilmesi
// icin asağadaki hangi tanimlama ile gerçeklestirilir?

// module.exports(tofas:araba)



// 27-)
// for(;k < 10;){
// //  islemler süslü parantezler içersinde gerçeklestirilir.
//     console.log(`k nin değeri: ${k}`);
//     k++;
// }
// yukaradaki kodun calsması icin asağıdaki hangi tanımlama islemi
// yapilmaladır?
//çalışması için for(k=0;k<10;) undefined

// 28-)
// for(;k < 10;){
//     // islemler süslü parantezler içersinde gerçeklestirilir.
//         console.log(`k nin değeri: ${k}`);
//         k++;
//     }
    // ukaradaki kodun 10 defa calsması icin asağıdaki hangi tanamlama islemi
    // yapilmaladır? 
    //for(let k =0;k < 10;)


//29-)Aşağıdakilerden hangisi sonsuz döngüdür?

// for(;true;){}
// while (1){}  
// for(;1;){}
//while(true){}

//30-) Bir ifadeyi sabit tanımlamak istersek ne kullanmalıyız?

// const

//31-)

// let b=0;

// {
//     let b=16;
//     console.log(b);
// }

// console.log(b);

//terminale hangi değerler basılır?

//16 ve 0 çünkü b nin 16 olma sebebi local scope dur.


//32-)

// let b=0;

// {
//     b=16;
//     console.log(b);
// }

// console.log(b);

//terminale hangi değerler basılır?

// iki kez 16 basılır çünkü local scope kullanılmamış hali hazırdaki 
// değişkenin değeri değiştirilmiştir.


//33-)

// let bilgi={
//     adi:'Gökhan',
//     soyadi:'Çalış',
//     numarasi:21900000207,
//     aldigidersler:[
//         'Türkçe','TürkDili','İngilizce',
//     ],

//     eloCihazlar:{
//             bilgisayar: {
//                 marka:'HP'
//             },
//             telefon:{
//                 marka:'Samsung'
//             }
//     },            
// }


//Yukarada tanımlanan nesne/json yapis1ndaki elocihazlar ekrana
// bastirildiğında nasil bir bilgi çikar?
// console.log(bilgi.eloCihazlar);

// { bilgisayar: { marka: 'HP' }, telefon: { marka: 'Samsung' } }


//33-)

// let bilgi={
//     adi:'Gökhan',
//     soyadi:'Çalış',
//     numarasi:21900000207,
//     aldigidersler:[
//         'Türkçe','TürkDili','İngilizce',
//     ],

//     eloCihazlar:{
//             bilgisayar: {
//                 marka:'HP'
//             },
//             telefon:{
//                 marka:'Samsung'
//             }
//     },            
// }


//Yukarada tanımlanan nesne/json yapis1ndaki telefon değerlerine nasıl ulaşırız?


// console.log(bilgi.eloCihazlar.telefon)