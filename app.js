let tutulanSayi = Math.trunc(Math.random() * 100);
console.log(tutulanSayi);
const input = document.querySelector("#input");
const button = document.getElementById("button");
const pWrite = document.querySelector("#write");
const hakkim = document.querySelector("#hak");
let counter = 5;
let eski = "0";
let yeni = "100"

hakkim.classList.add("hakkim")
pWrite.classList.add("pWrite")
button.addEventListener("click" , (e) => {
    counterr();
    if(input.value > 100 || input.value <= 0 ) {
        alert('İstenilen aralıkta bir sayı giriniz: ');
    }else if (input.value == tutulanSayi) {
        alert("Tebrikler kazandınız");
        input.disabled = true;
    } else if (input.value > tutulanSayi) {
        yeni = input.value
        pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
    }else if (input.value < tutulanSayi) {
        eski = input.value
        pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
      }
      input.value = "";
})
const counterr = () => {
    counter--;
    if (counter > 0) {
      hakkim.innerHTML = `${counter} hakkınız kaldı`;
      input.focus();
    } else {
      hakkim.innerHTML = `hakkınız kalmadı`;
      input.disabled = true;
    }
  };
  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      button.click();
    }
  });
  input.value = "";