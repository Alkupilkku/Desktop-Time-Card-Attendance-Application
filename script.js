
const henkilo = document.getElementsByClassName("henkilo")
const aika = document.querySelector(".aika")
const paikalla = document.getElementsByClassName("paikalla")
const poissa = document.getElementsByClassName("poissa")
const odottaa = document.getElementsByClassName("odottaa")
const tyontekijat = document.getElementsByClassName("tyontekijat-wrapper")
const tyontekijatAdmin = document.getElementsByClassName("lasnaolijat-wrapper")
const tyontekijaLisaa = document.getElementsByClassName("side-wrapper-admin")
const ohjaajat = document.getElementsByClassName("ohjaajat")

//Sää osuus

const apikey = "a2399daa59fab6bf54657e87f9cfb8ad";
const city = "Helsinki";

function loadWeather() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    let weatherHTML = '';

    if (xhr.status !== 200) {
      weatherHTML = `
            <div class="desc">Could not load weather for ${city}.</div>
        `;
    } else {
      const weather = JSON.parse(xhr.response);
      weatherHTML = `
            <div class="temp">${weather.weather[0].main} ${Math.floor(weather.main.temp)}°C</div>
            <div class="feel">${weather.name} · Ilmankosteus ${weather.main.humidity}%  · Tuuli ${weather.wind.speed} m/s</div>
        `;
    }

    const weather = document.getElementsByClassName("weather")
    if (weather.length > 0) {
      weather[0].innerHTML = weatherHTML;
    }
  });

  xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city},FI&appid=${apikey}&units=metric`);
  xhr.send();

}

loadWeather();
setInterval(loadWeather, 10 * 60 * 1000);


// Aika osio
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const tuntiMuotoilija =  Intl.DateTimeFormat("fi-FI", {
timeZone,
timeStyle: 'medium'
});
const paivaMuotoilija =  Intl.DateTimeFormat("fi-FI", {
timeZone,
dateStyle: 'full',
});

function paivitaKello (){
const nyt = new Date();
const nykyinenAika = tuntiMuotoilija.format(nyt);
const nykyinenPaiva = paivaMuotoilija.format(nyt);
if(aika){
aika.innerHTML = `
<div class="kellonAika">${nykyinenAika}</div>
<div class="paivamaara">${nykyinenPaiva}</div>
`}
};
if(aika){
paivitaKello();
setInterval(paivitaKello, 1000);
}
//henkilö kortti testitoiminta
const henkilosto = [
  { nimi: "Matti Meikäläinen", kielet: [] },
  { nimi: "Seppo Selkeä", kielet: [] },
  { nimi: "Matti Meikäläinen", kielet: [] },
  { nimi: "Seppo Selkeä", kielet: [] },
  { nimi: "Matti Meikäläinen", kielet: [] },
  { nimi: "Seppo Selkeä", kielet: [] }
]

const kortti = document.getElementsByClassName("henkilo-kortti")
if(tyontekijat){
  tyontekijat[0].innerHTML = "";
}

for (let i = 0; i < henkilosto.length; i++) {
  const henkiloLaatikko = document.createElement("div");
  henkiloLaatikko.classList.add("henkilo-kortti");
  henkiloLaatikko.innerHTML = `
  <h3>${henkilosto[i].nimi}</h3>
  <div class="liput"></div>
  `
  const lippuSailio = henkiloLaatikko.querySelector(".liput")
  const henkilonKieli = henkilosto[i].kielet;
  const tyontekija = henkilosto[i].nimi;

  henkilonKieli.forEach((kieliId) =>{
    const lippu = saaLippu(kieliId, tyontekija)
     if (lippu) {
    lippuSailio.appendChild(lippu)
  }
  });

  if(tyontekijat){
    tyontekijat[0].appendChild(henkiloLaatikko)
  }}

//ohjaaja kortti testitoiminta
const ohjaajatLista = [
  { nimi: "Katri Kätevä", lisatiedot: "Paikalla 10:00-18:00", kielet: [] },
  { nimi: "Seppo Selkeä", lisatiedot: "Paikalla 10:00-16:00", kielet: [] }
]

const ohjaajaKortti = document.getElementsByClassName("ohjaaja-kortti")
ohjaajat[0].innerHTML = "";

for (let i = 0; i < ohjaajatLista.length; i++) {
  const ohjaajaLaatikko = document.createElement("div");
  ohjaajaLaatikko.classList.add("ohjaaja-kortti");
  ohjaajaLaatikko.innerHTML = `
  <h3>${ohjaajatLista[i].nimi}</h3>
  <p>${ohjaajatLista[i].lisatiedot}</p>
  <p>${ohjaajatLista[i].kielet}</p>
  
  `
  if(ohjaajat){
  ohjaajat[0].appendChild(ohjaajaLaatikko)
}}

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
  { id: "no", nimi: "Norja", flagURL: "https://flagcdn.com/w80/no.png" },
  { id: "es", nimi: "Espanja", flagURL: "https://flagcdn.com/w80/es.png" },
  { id: "gb", nimi: "Iso-Britannia", flagURL: "https://flagcdn.com/w80/gb.png" },
  { id: "se", nimi: "Ruotsi", flagURL: "https://flagcdn.com/w80/se.png" },
  { id: "us", nimi: "Yhdysvallat", flagURL: "https://flagcdn.com/w80/us.png" },
  { id: "ca", nimi: "Kanada", flagURL: "https://flagcdn.com/w80/ca.png" },
  { id: "au", nimi: "Australia", flagURL: "https://flagcdn.com/w80/au.png" },
  { id: "nl", nimi: "Alankomaat", flagURL: "https://flagcdn.com/w80/nl.png" },
  { id: "pl", nimi: "Puola", flagURL: "https://flagcdn.com/w80/pl.png" },
  { id: "is", nimi: "Islanti", flagURL: "https://flagcdn.com/w80/is.png" },
  { id: "pt", nimi: "Portugali", flagURL: "https://flagcdn.com/w80/pt.png" },
  { id: "br", nimi: "Brasilia", flagURL: "https://flagcdn.com/w80/br.png" },
  { id: "mx", nimi: "Meksiko", flagURL: "https://flagcdn.com/w80/mx.png" }
]

function valitseKieli(kieliId, annettuNimi) {
  const tyontekija = henkilosto.find(henkilo => henkilo.nimi === annettuNimi);
  if (!tyontekija) {
    return "Työntekijää ei löytynyt."
  }
  const loytyyko = tyontekija.kielet.includes(kieliId);
  if (loytyyko) {
    tyontekija.kielet = tyontekija.kielet.filter(id => id !== kieliId);
  }
  else {
    tyontekija.kielet.push(kieliId)
  }
}

function saaLippu(kieliId, annettuNimi) {
  const tyontekija = henkilosto.find(henkilo => henkilo.nimi === annettuNimi);
  if (!tyontekija) {
    return
  }
  const kieliTieto = kieliLista.find((kieli) => kieli.id == kieliId);
  const loytyyko = tyontekija.kielet.includes(kieliId);
  if (!loytyyko || !kieliTieto) {
    return
  }
  const lippu = kieliTieto.flagURL
  const img = document.createElement('img')
  img.src = lippu;
  img.width = 100;
  img.classList.add('logo');

  return img

}
//Dynaaminen lomake kielilistaa varten

const dropdown = kieliLista.map((kieli) => `<option value=${kieli.id}>${kieli.nimi}</option>`).join("")
const forms = document.createElement("div");
forms.classList.add("block", "tyontekija-form");
forms.innerHTML = `
 <form class="tyontekija-form">
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
if(tyontekijaLisaa){
tyontekijaLisaa[0].appendChild(forms)
}

const form = document.querySelector('tyontekija-form');

if(form){
form.addEventListener("submit", function (event) {
  event.preventDefault()
  const nimi = document.querySelector('#nimi')
  const kielet = document.querySelector('#kielet')
  const yhteystiedot = document.querySelector('#yhteystiedot')
  const nimiArvo = (nimi.value);
  const yhteystietoArvo = (yhteystiedot.value);
  const kieliValinnat = [...kielet.selectedOptions].map((kieli) => kieli.value)
  if (henkilosto.find(henkilo => henkilo.nimi === nimiArvo)) {
    kieliValinnat.forEach((kieli) => valitseKieli(kieli, nimiArvo))
  }
  else {
    const henkilo = {
      nimi: nimiArvo,
      yhteystiedot: yhteystietoArvo,
      kielet: kieliValinnat
    }
    henkilosto.push(henkilo)
  }
});
}

//Keytagin lukijan testaus
