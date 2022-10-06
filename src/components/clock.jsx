import React, { Component, useState, useEffect } from 'react'
// import '../../styles/clock.scss';

export class Clock extends Component {
    constructor(props) {
        super(props);
      // Estado privado del component
        this.state = {
         // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        };
    }
    componentDidMount(){
        this.timerID = setInterval (
            () => this.tick(), 1000
        );
        console.log('Componente clase creado');
    }
    componentWillUnmount() {
        clearInterval (this.timerID);
        console.log('componente clase esta a punto de desaparecer');
    }
    render() {
        return (
            <div>
            <h2>Hora Actual:{this.state.fecha.toLocaleTimeString()}</h2>
            <h3>{this.state.nombre} {this.state.apellidos}</h3>
            <h1>Edad: {this.state.edad}</h1>
            </div>
        )
    }
    tick(){
        this.setState((prevState) => {
            let edad = prevState.edad +1;
            return {
            ...prevState,
            fecha: new Date(),
            edad
            }
        });
    }
}


export const ClockHook = () => {
    const initialPerson = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [person, setPerson] = useState(initialPerson);

    useEffect(() => {
        const tickInterval = setInterval(() => {
            actualPerson();
        }, 1000);

        return () => {
            clearInterval(tickInterval);
        };
    });

    const actualPerson = () => {
        return setPerson({
            fecha: person.fecha,
            edad: person.edad + 1,
            nombre: person.nombre,
            apellidos: person.apellidos,
        });
    };

    return (
        <div>
            <h2>Hora Actual:{person.fecha.toLocaleTimeString()}</h2>
            <h3>{person.nombre} {person.apellidos}</h3>
            <h1>Edad: {person.edad}</h1>
        </div>
    );
}


