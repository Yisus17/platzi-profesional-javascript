/*
* El decorator es basicamente la posibilidad de modificar 
* funcionalidades sin romper el codigo base en varias subclases,
* ejemplo de la macbook pro.
* Tambien sirve pensar en modificar una funcion para "decorarla" al gusto
*/

//Las clases deben ser cerradas para modificacion pero abiertas para ser extendidas

class Field{
    errors : string[]
    input: HTMLInputElement

    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            errorMessage.innerText=this.errors[0]||''
        })
    }
    validate(){

    }
}

function RequiredFieldDecorator(field:Field){
    let validate = field.validate; //guardamos la funcion original
    
    
    field.validate = function (){ //Aqui estamos decorando la funcion, pero usamos tambien la validacion que pueda estar default
        validate();
        let value = field.input.value;
        if(!value){
            field.errors.push("Requerido");
        }
    }
    
    return field
}

function EmailRequiredFieldDecorator(field:Field){
    let validate = field.validate; //guardamos la funcion original
    
    
    field.validate = function (){ //Aqui estamos decorando la funcion, pero usamos tambien la validacion que pueda estar default
        validate();
        let value = field.input.value;
        if(value.indexOf("@")=== -1){
            field.errors.push("Debe ser un email");
        }
    }
    
    return field
}

let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field);
field = EmailRequiredFieldDecorator(field);
