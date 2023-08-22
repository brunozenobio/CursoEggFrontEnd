import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';
// Tambien puedo usar props y luego llamar a props.mascotas

export const Cards = () => {

    const [mascotas, setMascotas] = useState([]);

    useEffect(() => { // Use efect se encarga de una escicha activa lo que cambia del componente para hacer lo que deba
        RickAndMortyService.getAllCharacters()
            .then((data) => setMascotas(data.results )) // hago referencia al state, data recice info y results
            .catch((error) => console.log(error));

    }, [mascotas]); //La variable a escuchar ante cambios

    const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />) // genera cartas en base a los componentes y hara tantas como llegen
    //La key es para diferenciar elementos

    return (
        <div>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardList}

                    </div>
                </div>
            </div>



        </div>
    )
}
