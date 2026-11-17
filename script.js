
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
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", kielet: [] },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", kielet: [] },
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", kielet: [] },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", kielet: [] },
  { nimi: "Matti Meikäläinen", ammatti: "työntekijä", kielet: [] },
  { nimi: "Seppo Selkeä", ammatti: "ohjaaja", kielet: [] }
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
//Kielien lippulista
const kieliLista = [
  { id: "fi", nimi: "Suomi", flagURL: "https://flagcdn.com/w80/fi.png" },
  { id: "de", nimi: "Saksa", flagURL: "https://flagcdn.com/w80/de.png" },
  { id: "fr", nimi: "Ranska", flagURL: "https://flagcdn.com/w80/fr.png" },
  { id: "jp", nimi: "Japani", flagURL: "https://flagcdn.com/w80/jp.png" },
  { id: "ee", nimi: "Viro", flagURL: "https://flagcdn.com/w80/ee.png" },
  { id: "dk", nimi: "Tanska", flagURL: "https://flagcdn.com/w80/dk.png" },
  { id: "gr", nimi: "Kreikka", flagURL: "https://flagcdn.com/w80/gr.png" },
  { id: "it", nimi: "Italia", flagURL: "https://flagcdn.com/w80/it.png" },
]

const temp_kayttaja = {
  nimi: "Matti Meikäläinen",
  ammatti: "työntekijä",
  kielet: []
}
function valitseKieli(kieliId) {
  if (temp_kayttaja.includes(kieliId)) {
    temp_kayttaja.defineProperty(kielet,)
  }
}