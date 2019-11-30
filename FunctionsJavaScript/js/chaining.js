class Kisi
{
  constructor(ad,soyad)
  {
    this.ad = ad;
    this.soyad = soyad;
  }

  adDegistir(yeniAd)
  {
    this.ad = yeniAd;
    return this;
  }

  soyadDegistir(yeniSoyad) //Chaining yapmak!
  {
    this.soyad = yeniSoyad;
    return this;
  }
}

let k = new Kisi("Tuğçe","Hızır");
k.adDegistir("Ayşe").soyadDegistir("Yılmaz");
