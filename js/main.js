$(document).ready(function(){

    $('#CPF').mask('000.000.000-00', {
        placeholder: 'Preencha com seu CPF'
    })

    $('#CEP').mask('00.000-000', {
        placeholder: 'Insira seu CEP'
    })

    })
    $('form').validate({
        rules:
        {

            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            ncpf: {
                required:true
            },
            ncep: {
                required:true
            },

            messages: {
                Nome: 'Por favor, insira seu nome'
            },
            messages: {
                email: 'Insira seu e-mail'
            },

            messages: {
                CPF: 'Número de CPF OBRIGATÓRIO'
            },
            messages: {
                CEP: 'O CEP é OBRIGATÓRIO'
            }
        }
    })
