import '../style/Presentation.css';

function Presentation() {
    const message = 'Les JSX, c\'est trop génial !';
    const jsx = <i>Je suis du JSX</i>;
  //  const url = 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif';
    const image = {title : 'Chat', url: 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif', description: 'Miaou'}

    const color = '#9381FF';
    const style = {
        color: '#63264A',
        fontSize: '13px',
        border: 'solid black 1px',
    }



    return (
        <main id="Presentation">
            <h1>Présentation</h1>
            <article>
                <h2>Installation</h2>

                <p>Pour utiliser React, il faut un environnement Node d'installer, avec une version supérieur
                    à la 14, et npm supérieur à la version 5.6
                </p>
                <p>On créé un projet React avec CRA : <code>npx create-react-app mon-app</code></p>

            </article>
            <article>
                <h2>Présentation : </h2>

                <p>Les composants React modernes sont des fonctions JS qui retournent <strong>du JSX</strong></p>

                <p>Le JSX est une extention syntaxique du JS, ce n'est ni une string, ni du HTML.</p>
                <p>Le JSX répond à des normes similaires à celles du XML : </p>
                <ul>
                    <li>Les balises orphelines doivent être fermées</li>
                    <li>On utilise des majuscules pour les noms des composants, le reste, c'est balises HTML existantes ( en minuscule ).</li>
                    <li>Un composant ne peut retourner qu'un block de JSX</li>
                </ul>
            </article>
            <article>
                <h2>L'interpolation</h2>
                <p>On peut interpréter du JS dans le template.</p>

                <ul>
                    <li>Opération : 1 + 1 = {1 + 1}</li>
                    <li>Variable : {message} </li>
                    <li>String : { 'Je suis une string JS' }</li>
                    <li>Du JSX : {jsx}</li>
                </ul>

                <p>Attention : certains caractères sont réservés, et qui ne peuvent pas être utilisés dans le JSX :</p>
                <p>Pour les afficher, il faut les échapper en les interprétants comme des strings : </p>
                <ul>
                    <li> Les crochets : { '<>' }, exemple :  5 {'<'} 10 </li>
                    <li>Les accolades : { '{}' } </li>
                </ul>
            </article>
            <article>
                <h2>Attributs HTML</h2>

                <p className='toto'>Les mots clefs réservés en JS ne peuvent pas être utilisés comme attributs dans les balises.</p>
                <ul>
                    <li>for : htmlFor</li>
                    <li>class: className</li>
                    <li>tabindex: tabIndex</li>
                </ul>

                <p>Les attributs peuvent aussi prendre du JS pour interpréter une valeur : </p>

                <figure>
                    <img src={image.url} alt={image.description}/>
                    <figcaption>{image.title}</figcaption>
                </figure>
                <p>C'est vrai pour tous les attributs : id, className, src, htmlFor, type, title,....</p>

                <h2>Style</h2>

                <p>La balise style peut prendre du JS, avec les accolades, mais elle va attendre un objet.</p>
                <ul>
                    <li>Style: <span style={{color: 'blue'}}>i'm blue </span></li>
                    <li>Style: <span style={{color : color}}>Da du diii</span></li>
                    <li>Style: <span style={style}>Da du da</span></li>
                </ul>
            </article>

            <article>
                <h2>Les images : </h2>

                <h3>Utilisées dans le HTML</h3>
                <p>Les images ( et médias : audio, video, ) utilisés dans le HTML, par exemple dans une balise img, 
                    doivent être placés dans le dossier <b>public</b>. 
                </p>
                <p>Le chemin vers l'image s'écrit comme si on se situait à la racine de public ( depuis le fichier index.html ),
                    et pas depuis le répertoire du composant.
                </p>

                <h3>Pour le CSS</h3>
                <p>Les images utilisées en CSS se placent dans le dossier <b>src</b>, et le chemin se fait 
                normalement, depuis le fichier css sur lequel on travailler.</p>
            </article>
    

        </main>
    );
}

export default Presentation;