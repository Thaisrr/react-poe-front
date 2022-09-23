import { useRef, useState } from "react";
import Error from "../components/Error";
import {useForm} from "react-hook-form";
import axios from "axios";
import { handleError } from "../services/errorHandler";

const Formulaires = function() {
    const username_input = useRef();
    const [error, setError] = useState();

    function save(event) {
        
        event.preventDefault()
        //  const username = document.querySelector('#username').value;
        //  const password = document.querySelector('#pwd').value;
        // const username = event.target[0].value;
        const password = event.target.password.value;
        const username = username_input.current.value;

        if(password && username) {
            const user_info = {username, password};
            console.log("Saved", user_info); 
            setError();
            event.target.reset();
        } else {
            setError("Attention, tous les champs doivent êtres saisis.")
        }
    }

/***** Avec la lib react-hook-form ********/
    const {register, handleSubmit, reset, formState : {errors}} = useForm(); // retourne un objet, qu'on décompose
    // register(), handleSubmit(), reset(), error

    const chemin = "http://localhost:8080/users";

    function saveBis(user_info) {
        axios.post(chemin, user_info)
        .then((res) => {
            alert(`${res.data?.username} a bien été enregistré(e)`)
            reset();
        })
        .catch(err => {
            handleError(err, setError);
        })   
    }

    async function saveBisBis(user_info) {
        try {
            const res= await axios.post(chemin, user_info);
            alert(`${res.data?.username} a bien été enregistré(e)`)
            reset();
        } catch(err) {
            handleError(err, setError);
        }
    }
 
    return (
        <main> 
            <h1>Les Formulaires</h1>
            {error && <Error>{error}</Error>}

            <article>
            <h2>React simple</h2>
            <form onSubmit={save}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input ref={username_input} id="username" name="username"/>
                </div>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input id="pwd" name="password" type="password"/>
                </div>
                <p>
                    <button>Enregistrer</button>
                </p>
            </form>
            </article>
            <article>
            <h2>React Hook Form</h2>
            <form onSubmit={handleSubmit(saveBisBis)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" {...register('username', {required: true})}/>
                    {errors.username && <p>Username must be provided</p>}
                </div>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input id="pwd" type="password" {...register('password', {required: true, minLength: 8})}/>
                    {errors.password && errors.password.type === 'required' && <p>Password must be provided</p>}
                    {errors.password && errors.password.type === 'minLength' && <p>Password is too short</p>}
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input id="email" {...register('email', {
                        required: 'Email is mandatory',
                        pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email pattern is incorrect'}
                    } )} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="title">Titre</label>
                    <select id="title" {...register('title')}>
                        <option value="empress">Impératrice / Empereur</option>
                        <option value="jedi">Jedi</option>
                        <option value="unicorn">Licorne</option>
                    </select>
                </div>
                <fieldset>
                    <legend>Pronoms</legend>

                    <div>
                        <label htmlFor="p1">She / Her</label>
                        <input id="p1" type="radio" value="she" {...register('pronouns')} />
                    </div>
                    <div>
                        <label htmlFor="p2">He / Him</label>
                        <input id="p2" type="radio" value="he" {...register('pronouns')} />
                    </div>
                    <div>
                        <label htmlFor="p3">They / Them</label>
                        <input id="p3" type="radio" value="they" {...register('pronouns')} />
                    </div>
                </fieldset>
                <p>
                    <button>Enregistrer</button>
                </p>
            </form>
            </article>

        </main>
    )
}
export default Formulaires;