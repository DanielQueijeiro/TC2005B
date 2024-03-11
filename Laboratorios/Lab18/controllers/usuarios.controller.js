const Usuario = require('../models/usuario.model')

exports.get_login = (request, response, next) =>{
    response.render('login', {
        username: request.session.username || '',
        registrar: false,
    });
}

exports.post_login = (request, response, next) =>{
    Usuario.fetchOne(request.body.username, request.body.password)
    .then(([rows, fieldData]) =>{
        if(rows.length == 1){
            request.session.username = request.body.username;
            response.redirect('/crear/menu');
        } else {
            response.redirect('/usuarios/login')
        }
    })
    .catch(err => {
        console.log(err)
    })
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    response.render('login',{
        username: request.session.username || '',
        registrar: true,
    });
}

exports.post_signup = (request, response, next) =>{
    const usuario = new Usuario(request.body.username, request.body.password);
    usuario.save()
        .then(([rows, fieldData]) => {
            response.redirect('/users/login');})
        .catch((error) => {console.log(error)})
}