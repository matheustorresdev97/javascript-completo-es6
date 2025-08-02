const menu = document.querySelector(".menu");

console.log(menu);
console.log(menu.classList);
console.log(menu.classList[0]);

menu.classList.add("ativo");
console.log(menu.classList);

menu.classList.remove("azul");
console.log(menu.classList);

menu.classList.toggle("azul");
console.log(menu.classList);

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

console.log(menu.classList);

const animais = document.querySelector(".animais");

console.log(animais.attributes);

const img = document.querySelector("img");

console.log(img.getAttribute("src"));

const srcImg = img.getAttribute("alt");

console.log(srcImg);

img.setAttribute("alt", "É uma raposa");

console.log(img.getAttribute("alt"));

const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km} km`);
  },
};

carro.andar(21);
console.log(carro.portas);

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    console.log(`A imagem ${img.getAttribute("alt")} possui o atributo alt`);
  } else {
    console.log(
      `A imagem ${img.getAttribute("alt")} não possui o atributo alt`
    );
  }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.setAttribute("href", "https://www.origamid.com/");

console.log(linkExterno.getAttribute("href"));