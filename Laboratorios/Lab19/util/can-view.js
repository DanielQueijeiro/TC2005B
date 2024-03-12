module.exports = (request, response, next) => {

    let canView = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'ver') {
            canView = true;
        }
    }

    if (canView) {
        next();
    } else {
        return response.redirect('/users/logout');
    }
    
}