const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
	identificacion: /^\d{10}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{10,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono : /^\d{7,10}$/ , 
	area : /^[a-zA-ZÀ-ÿ\s]{4,30}$/,
	cargo: /^[a-zA-ZÀ-ÿ\s]{4,30}$/,
	lugar:  /^[a-zA-ZÀ-ÿ\s]{5,20}$/, 
	horario:  /((1[0-2]|0?[1-9]):([0-5][0-9])\ ?([AaPp][Mm]))/
}

const campos={
	identificacion:false,
	nombre: false ,
	correo: false,
	telefono: false,
	area:false,
	cargo:false,
	lugar:false,
	horario:false
}
const validarFormulario = (e) =>{
	switch (e.target.name){
		case "identificacion":
			validarCampo(expresiones.identificacion, e.target , e.target.name);
		break;
		case "nombre" : 
			validarCampo(expresiones.nombre , e.target , e.target.name);
			break;
		case "correo":
			validarCampo(expresiones.correo , e.target , e.target.name);
			break;
		case "telefono":
			validarCampo(expresiones.telefono , e.target , e.target.name);
			break;
		case "area":
			validarCampo(expresiones.area, e.target , e.target.name);
			break;
		case "cargo":
			validarCampo(expresiones.cargo, e.target , e.target.name);
			break;
		case "lugar":
			validarCampo(expresiones.lugar, e.target , e.target.name);
			break;
		case "horario":
			validarCampo(expresiones.horario, e.target , e.target.name);
			break;
	//chif Left + alt Left y flecha abajo para duplicar
	}
}
 function validarCampo(expresion , input , campo){
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("form__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove("form__input-error-activo");
		campos[campo]=true;
	}else{
		document.getElementById(`grupo__${campo}`).classList.add("form__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("form__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.add("form__input-error-activo");
		campos[campo]=false;
	}
 }

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit',(e) =>{
	e.preventDefault();
	const termino = document.getElementById("terminos");
	if (campos.identificacion && campos.nombre && campos.correo && campos.telefono && campos.area && campos.cargo&&
		campos.lugar && campos.horario && terminos.checked ) {
		formulario.reset();
		document.getElementById("form__mensaje-exito").classList.add("form__mensaje-exito-activo");
		setTimeout(()=>{
			document.getElementById("form__mensaje-exito").classList.remove("form__mensaje-exito-activo");
			document.getElementById("form__mensaje").classList.remove("form__mensaje-activo");
		},4000)
		
		document.querySelectorAll('.form__grupo-correcto').forEach((icono)=>{
			icono.classList.remove('form__grupo-correcto');
		})

	}else{
		document.getElementById("form__mensaje").classList.add("form__mensaje-activo");
		setTimeout(()=>{
			document.getElementById("form__mensaje").classList.remove("form__mensaje-activo");
		},4000)
	}
})


