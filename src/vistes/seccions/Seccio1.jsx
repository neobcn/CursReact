import React, { Fragment } from 'react'

const Seccio1 = () => {

    const concatenacio = () => {
        let num = 10;
        const numero = (num) => {
            return "El número és: " + num;
        };
        console.log({
          exemple: 'concatenació',
          resultat: numero(num)
        });
    };

    const templateString = () => {
      let num = 20;
      const numero = (num) => {
        return `El número és: ${num}`;
      };
      console.log({
        exemple: 'templateString',
        resultat: numero(num)
      });
  };



    return (
        <Fragment>
            <h1>Secció 1</h1>
            <div className="row">
                <h2>Fundaments de Javascript</h2>
                <h3>Template String</h3>
                <p>
                    El template string és una actualització que permet combinar variables dins d'strings sense concatenar: 
                </p>
                <h4>Concatenació: </h4>
                <img style={{ width: "450px" }} src="/imatges/exemple_concatenacio.png" alt="Exemple de concatenació"/>
                <p>&nbsp;</p>
                <h4>Template String</h4>
                <p>(*) Les cometes invertides les fem prement Alt + 96 i la variable l'emboliquem amb dollar + claus $&#123;variable&#125;</p>
                <img style={{ width: "450px" }} src="/imatges/exemple_template_string.png" alt="Exemple de templateString"/>
            </div>
        </Fragment>
    )
}

export default Seccio1