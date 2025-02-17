/*Dato un array di oggetti rappresentante un team di un’azienda, 
creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const container = document.querySelector(".flex")

function newmember() {
  
for (let i = 0; i < teamMembers.length; i++) {

  const element = teamMembers[i];
  
  container.innerHTML += `<div class="flex">
                <figure>
                    <img height="90px" src="${element.img}" alt="">
                </figure>
                <div class="flex flex-column">
                    <h5>${element.name}</h5>
                    <span>${element.role}</span>
                    <span>${element.email}</span>
                </div>
            </div>`
  
}

}

newmember ()

const btn = document.getElementById('btn')

btn.addEventListener('click',function (event) {

  event.preventDefault()

  const name = document.getElementById('name').value

  const role = document.getElementById('role').value

  const email = document.getElementById('email').value
  
  const img = document.getElementById('image').value

  teamMembers.push ({
    name,
    role,
    email,
    img
  }
  )

  container.innerHTML = ''

  newmember()
  
})