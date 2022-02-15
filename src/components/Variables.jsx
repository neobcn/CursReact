import React, { Fragment } from 'react'

const Variables = () => {

    const imatge = {
        width: '300',
        src: 'https://ep00.epimg.net/verne/imagenes/2018/12/29/album/1546080783_597424_1546081005_album_normal.jpg',
        alt: 'esquirolet simpàtic'
    };

    return (
        <Fragment>
            <h2>
                Exemple variables: "Src i Alt d'una imatge"
            </h2>
            <img width={imatge.width} src={imatge.src} alt={imatge.alt} />
        </Fragment>
    )
}

export default Variables