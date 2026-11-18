
const henkilo = document.getElementsByClassName("henkilo")
const aika = document.getElementsByClassName("aika")
const weather = document.getElementsByClassName("weather")
const paikalla = document.getElementsByClassName("paikalla")
const poissa = document.getElementsByClassName("poissa")
const odottaa = document.getElementsByClassName("odottaa")
const tyontekijat = document.getElementsByClassName("tyontekijat-wrapper")
const tyontekijaLisaa = document.getElementsByClassName("side-wrapper")


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
  const loytyyko = temp_kayttaja.kielet.includes(kieliId);
  if (loytyyko) {
    temp_kayttaja.kielet = temp_kayttaja.kielet.filter(id => id !== kieliId);
  }
  else {
    temp_kayttaja.kielet = kieliId;
  }
}
const dropdown = kieliLista.map((kieli) => `<option value=${kieli.id}>${kieli.nimi}</option>`).join()
const forms = document.createElement("div");
forms.classList.add("block", "ohjaaja-form");
forms.innerHTML = `
 <form class="ohjaaja-form">
  <h3>Lisää Työntekijä</h3 >
  <label for="nimi">Nimi</label>
  <br>
  <input type="text" id="nimi"></input>
  <br>
  <label for="kielet">Kielet</label> 
  <br>
  <select id="kielet" multiple size="1">
  ${dropdown}
  </select>
  <br>
  <label for="yhteystiedot">Yhteystiedot</label>
  <br>
  <input type="text" id="yhteystiedot">
  <br> 
  <button type="submit" id="hyvaksy">Lisää Työntekijä</button>
  </form>
`
tyontekijaLisaa[0].appendChild(forms)