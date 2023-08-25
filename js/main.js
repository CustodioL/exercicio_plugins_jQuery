$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: false
            }
        },
        messages: {
            nomeCompleto: 'Por favor insira o nome completo!',
            email: 'O E-mail é obrigatório!',
            telefone: 'O telefone é obrigatório!',
            cpf: 'O CPF é obrigatório!',
            enderecoCompleto: 'O endereço completo é obrigatório!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
    $('form').on('submit' , function(e){
        e.preventDefault();
        $('#nomeCompleto').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#cpf').val('');
        $('#enderecoCompleto').val('');
        $('#cep').val('');
    })
})

