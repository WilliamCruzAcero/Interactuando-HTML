
 (function(){
    
    
    let formulario = document.getElementsByName("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById("btn");

    let validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("complete el campo nombre");
            e.preventDefaul();
        }
    }
    let validarApellido = function(e){
        if(formulario.apellido.value == 0){
            alert("complete el campo apellido");
            e.preventDefaul();
        }
    }


    let validarRadio = function(e){
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true  ){
        }else{
            alert("completa el campo sexo");
            e.preventDefaul();
        }
    }
    let validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los terminos");
            e.preventDefaul();
        }
    }
    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarRadio(e);
        validarCheckbox(e);

       }
    
    
    
 
    formulario.addEventListener("submit", validar);
}()) 



    
