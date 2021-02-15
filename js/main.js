let url = new URL(window.location.href);
const page = url.searchParams.get('page');

const routes = {
    'inicial': home,
}
function init() {
    if (routes[page]) {
        document.getElementById('root').innerHTML = routes[page]();
    } else {
        document.getElementById('root').innerHTML = home();
    }
}
init();

//
// let content
//
// if (page === null) {
//     content = home();
// } else if (routes[page]) {
//     content = routes[page]();
// }
//
// document.getElementById('root').innerHTML = content;

/*
 * url: funcao a ser chamada com o conteudo
 */
// const routes = {
//     'home': home,
// }
