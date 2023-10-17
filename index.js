document.addEventListener("DOMContentLoaded", () => {
  // alert("Privet, eto moi script")
  // const BankAccount = 100000;
  // const firstStudent="Alisher Nukeshev";
  // const secondStudent="Kamila";
  // alert(firstStudent)
  // const k=8.9;
  // const q1=7.6;
  // const q2=8.95;
  // const r=2;
  // const f=(k*q1*q2)/r**2;
  // alert(f)
//   const dollar=477;
//   const euro=485;
//   const valueTenge = prompt("Введите ваш баланс")
//   const summaTenge = Number(valueTenge) + 500000
//   alert(typeof valueTenge)
//   alert(typeof Number(valueTenge))
// alert(summaTenge)
//   const valueInDollar= valueTenge/dollar  
//   const valueInEuro= valueTenge/euro  

//   alert(valueTenge + 'тг в долларах=' + valueInDollar + "$")
//   alert(valueTenge + 'тг в евро=' + valueInEuro + "Э")
const btn=document.querySelector("button")
btn.addEventListener("click", ()=> {
  const h1=document.querySelector("h1")
  h1.innerText = "first button was clicked"
  console.log(h1.innerText)
})
const allBtn=document.querySelectorAll("button")

 console.log(allBtn.length)
 const lastButton=allBtn[allBtn.length-1]
  lastButton.addEventListener("click", () => {
  const h2=document.querySelector("h2")
  h2.innerText = "Last button was clicked"
  lastButton.textContent="Click"
  console.log (
    5
  )
  // let i=0
  // while (i<allBtn.length){
  //   allBtn[i].textContent="Click"; 
  //   console.log (i)
  //   i++
  // for (let i=0; i<allBtn.length; i++) {
  //   allBtn[i].textContent="Click"
  // }
})
  // lastButton.textContent="Click"
 });



