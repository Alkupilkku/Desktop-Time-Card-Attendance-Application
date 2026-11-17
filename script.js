
const henkilo = document.getElementsByClassName("henkilo")
const aika = document.getElementsByClassName("aika")
const weather = document.getElementsByClassName("weather")
const paikalla = document.getElementsByClassName("paikalla")
const poissa = document.getElementsByClassName("poissa")
const odottaa = document.getElementsByClassName("odottaa")
const tyontekijat = document.getElementsByClassName("tyontekijat-wrapper")

const img = document.createElement('img')
img.width = 200;
img.classList.add('logo');



//henkilö kortti testitoiminta
const henkilosto = [
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", img: "temp.png" },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", img: "temporare.png" },
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", img: "temp.png" },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", img: "temporare.png" },
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", img: "temp.png" },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", img: "temporare.png" }
]
const kortti = document.getElementsByClassName("henkilo-kortti")
tyontekijat[0].innerHTML = "";

for (let i = 0; i < henkilosto.length; i++) {
  const henkiloLaatikko = document.createElement("div");
  henkiloLaatikko.classList.add("henkilo-kortti");
  henkiloLaatikko.innerHTML = `
  <h2>${henkilosto[i].nimi}</h2>
  <p>${henkilosto[i].ammatti}</p>
  <p>${henkilosto[i].img}</p>
  `
  tyontekijat[0].appendChild(henkiloLaatikko)
}
