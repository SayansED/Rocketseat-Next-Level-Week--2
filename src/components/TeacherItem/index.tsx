import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem() {
    return (
        <article id="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/49099715?s=460&u=44040b709bcfddb700d22314a076fc6f4823aeff&v=4" alt="Eduardo" />
            <div>
                <strong>Eduardo Sayans</strong>
                <span>Fisíca</span>
            </div>
        </header>
        <p>
            Desenvolvedor
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$30,00</strong>
            </p>
            <button type="button">
                <img src={whatsapp} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;