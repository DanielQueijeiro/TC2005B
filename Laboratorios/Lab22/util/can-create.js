module.exports = (request, response, next) => {

    let canCreate = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'crear') {
            canCreate = true;
        }
    }

    if (canCreate) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}