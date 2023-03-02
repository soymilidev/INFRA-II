import React from 'react'
import { useState } from 'react';
import './StylesApp.css'

const CompApp = () => {
    // Creamos un estado para cada input del formulario
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Creamos un manejador de eventos para cada uno de los inputs
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    // Creamos el manjeador para el evento onSubmit
    const onSubmitForm = (e) => {
        // Evitamos que se recargue la pagina previniendo el comportamiento por defecto
        e.preventDefault();

    // Realizamos las validaciones con los valores almacenados en el estado
    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    // Si al menos una de las validaciones es falsa mostramos un mensaje de error
    if (!isPasswordValid || !isUsernameValid) {
        alert("Alguno de los datos ingresados no son correctos");
    } else {
    // Por ahora solo mostramos el nombre del usuario
    alert(`Bienvenido: ${userName}`);
    }
    };


    // VALIDACIONES
    // Creamos una funcion para validar el nombre de usuario
    const validateUserName = (userName) => {
        // Eliminamos los espacios en blanco
        const withoutSpaces = userName.trim();
        // Validamos la extension
        if (withoutSpaces.length > 2) {
            return true;
        } else {
            return false;
        }
        };

    // Creamos una funcion para validar el password
    const validatePassword = (password) => {
        // Eliminamos los espacios en blanco
        const withoutSpaces = password.trim();
        // Separamos el string en un array para luego recorrelo y validar si existe al menos un numero
        const passwordAsArray = withoutSpaces.split("");
        // Some nos retorna true si al menos una de las
        // iteraciones es verdadera
        const hasNumber = passwordAsArray.some((character) => {
        // Si el valor es NaN, no es un numero
            if (isNaN(character)) {
                return false;
            } else {
                return true;
            }
            });
        // Validamos la extension y que haya al menos un numero
        if (withoutSpaces.length > 5 && hasNumber) {
            return true;
        } else {
            return false;
        }
        };


    return (
        <div className="App">
            <h3>Iniciar sesión</h3>
            {/* Pasamos nuestro manejador al evento onSubmit */}
            <form onSubmit={onSubmitForm}>

            {/* Creamos dos inputs controlados pasando el estado como value y el manejador al evento onChange */}
            <input
            type="text"
            placeholder="Nombre de usuario"
            value={userName}
            onChange={onChangeUserName}
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            />

            {/*Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón*/}
            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CompApp