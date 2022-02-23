
const d = document;
d.addEventListener('DOMContentLoaded', (e) =>{
    validarForm('#enviar')
})




const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
	apellido : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	pw: /^.{4,12}$/, // 4 a 12 digitos.
}




function validarForm(enviar){   
    const d = document;
     d.addEventListener('click', (e) => {
       if(e.target.matches(enviar)){
           e.preventDefault()
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const nameError = document.querySelector('.name-error') 
        const surnameError = document.querySelector('.surname-error') 
        const emailError = document.querySelector('.email-error')  
        const enviar = document.querySelector('.enviado');     
           if(expresiones.nombre.test(name.value)){
              name.classList.add('validar')
              nameError.style.display = "none"

           
           } else {
               name.classList.remove('validar')
               name.classList.add('error')
               nameError.style.display = "block"
               enviar.style.display = "none"

           }if(expresiones.apellido.test(surname.value)){
               surname.classList.add('validar')
               surnameError.style.display = "none"
               
               

           }else{
               surname.classList.remove('validar')
                 surname.classList.add('error') 
                 surnameError.style.display = "block"
                 enviar.style.display = "none"


           }if(expresiones.gmail.test(email.value)){
                 email.classList.add('validar')
                 emailError.style.display = "none"

           } else{
                   email.classList.remove('validar')
                   email.classList.add('error')                   
                   emailError.style.display = "block"
                   enviar.style.display = "none"
                   



           }if(expresiones.pw.test(password.value)){
                   password.classList.add('validar')

           }else{
                  password.classList.remove('validar')
                   password.classList.add('error')
                   enviar.style.display = "none"


           }if(expresiones.nombre.test(name.value) && expresiones.apellido.test(surname.value) && expresiones.gmail.test(email.value) && expresiones.pw.test(password.value)){
              
                enviar.style.display = "block"
           }
           
         
       }
    })
}