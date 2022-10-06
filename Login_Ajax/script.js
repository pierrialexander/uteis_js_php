$(document).ready(function(){

    $('#form').on('submit', function(e) {
        e.preventDefault();
        
        let email = $('input[name=email').val();
        let senha = $('input[name=password').val();

        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                email:email, 
                senha:senha
            },
            success: function(msg) {
                $('body').append(`<p>${msg}</p>`);
                $('p').addClass('msg');

            }
        });
    })


})