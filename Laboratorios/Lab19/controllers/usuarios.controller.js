const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) =>{
    const error = request.session.error || '';
    response.render('login', {
        username: request.session.username || '',
        error: error,
        registrar: false,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
}

exports.post_login = (request, response, next) =>{
    Usuario.fetchOne(request.body.username)
    .then(([users, fieldData]) => {
        if(users.length == 1) {
            //users[0] contiene el objeto de la respuesta de la consulta
            const user = users[0];
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        Usuario.getPermisos(user.username).then(([permisos, fieldData]) => {
                            request.session.isLoggedIn = true;
                            request.session.permisos = permisos;
                            console.log(request.session.permisos);
                            request.session.username = user.username;
                            return request.session.save(err => {
                                response.redirect('/crear/menu');
                            });
                        }).catch((error) => {console.log(error);});
                    } else {
                        request.session.error = 'El usuario y/o contraseña son incorrectos'
                        return response.redirect('/users/login');
                    }
                }).catch(err => {
                    response.redirect('/users/signup');
                });
        } else {
            request.session.error = 'El usuario y/o contraseña son incorrectos'
            response.redirect('/users/login')
        }
    })
    .catch(err => {
        console.log(err)
    })
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    response.render('login', {
        username: request.session.username || '',
        error: error,
        registrar: true,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
}

exports.post_signup = (request, response, next) =>{
    const usuario = new Usuario(request.body.username, request.body.password);
    usuario.save()
        .then(([rows, fieldData]) => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error)
            request.session.error = 'Nombre de usuario invalido';
            response.redirect('/users/login');
        })
}