export function handleError(error, setText) {
    if(error.request && error.request.status === 404) {
        setText("La ressource n'a pas été trouvée");
    } 
    else {
        setText("Oups, quelque chose n'a pas fonctionné, rééssayez plus tard");
    }
    setTimeout(() => {
        setText();
    }, 40000)
}