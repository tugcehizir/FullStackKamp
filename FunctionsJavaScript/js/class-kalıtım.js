
class Urun{ // Kalıtım yapılan Kaynak
  constructor(ad,fiyat)
  {
    this._ad = ad;
    this.fiyat = fiyat;
  }

  get ad()
  {
    return this._ad;
  }

  set ad(value)
  {
    this._ad = value;
  }
  temelBilgiVer(){
    return this.ad + " " + this.fiyat + " " + "TL";
  }
}
  class Kitap extends Urun{ //Urun sınıfından faydalanan Kitap sınıfı
    constructor(ad,fiyat,sayfaSayisi)
    {
      super(ad,fiyat);
      this.sayfaSayisi = sayfaSayisi;
    }
    bilgiVer(){
      return this.temelBilgiVer()+ " " + this.sayfaSayisi + " " + "sayfa";
    }
  }
  class Film extends Urun{
    constructor(ad,fiyat,sureDk)
    {
      super(ad,fiyat);
      this.sureDk = sureDk;
    }
    bilgiVer(){ //Ad-Soyad için kullanılan metod.
      return this.temelBilgiVer() + " " + this.sureDk + " " + "dk";
    }
  }

let kitap1 = new Kitap("Küçük Prens", 10, 150);
let kitap2 = new Kitap("Şeker Portakalı", 20, 200);
let film1 = new Film("Blade", 18, 90);
let film2 = new Film("Matrix", 17, 120);

let urunler = [kitap1,kitap2,film1,film2];
let bilgiKitap = "";
for(let i=0; i<urunler.length; i++){
  bilgiKitap += urunler[i].bilgiVer() + "<br>";
}
document.getElementById('kitapyazi').innerHTML = bilgiKitap;

urunler[0].ad = "yeni";
console.log(urunler[0].ad);
