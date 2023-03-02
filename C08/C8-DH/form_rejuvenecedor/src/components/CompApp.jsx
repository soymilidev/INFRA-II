import React from 'react'
import { useState } from 'react';
import './StylesApp.css'

const CompApp = () => {
    // Creamos un estado para cada input del formulario
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // Creamos un manejador de eventos para cada uno de los inputs
    const onChangeName = (event) => setName(event.target.value);
    // const onChangeAge = (event) => setAge(event.target.value);
    // evitar el ingreso de nummeros con decimales

    const onChangeAge = event => {
        const value = event.target.value;
        // verifica que el valor sea un número entero
        if (/^\d+$/.test(value)) { 
            setAge(value);
        }
    };

  // Creamos el manjeador para el evento onSubmit
    const onSubmitForm = (event) => {
        event.preventDefault();
        const parsedAge = parseInt(age);
        if (!name || !age || parsedAge < 10 || !Number.isInteger(parsedAge)) {
            alert("Alguno de los datos ingresados no son correctos");
            return;
        } 
        const nuevaEdad = parsedAge - 10;
        alert(`Felicidades ${name} tu nueva edad es ${nuevaEdad} años.`);
        setName('');
        setAge('');
    };

    return (
        <div className="App">
            <h3>Rejuvenecedor</h3>
            {/* Pasamos nuestro manejador al evento onSubmit */}
            <form onSubmit={onSubmitForm}>

            {/* Creamos dos inputs controlados pasando el estado como value y el manejador al evento onChange */}
            <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={onChangeName}
            />

            <input
            type="number"
            step="1"
            placeholder="Edad"
            value={age}
            onChange={onChangeAge}
            />

            {/*Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón*/}
            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default CompApp