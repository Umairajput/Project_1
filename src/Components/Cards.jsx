import React from 'react'
import Rectangle_90 from '../Assets/Images/Rectangle 90.png'

const Cards = () => {
    let obj = [{
        img: Rectangle_90,
        text: 'Meubles',


    }, {
        img: Rectangle_90,
        text: 'Assises',

    }, {
        img: Rectangle_90,
        text: 'Luminaires',

    }, {
        img: Rectangle_90,
        text: 'Décoration',

    }, {
        img: Rectangle_90,
        text: 'Art de la Table',

    }, {
        img: Rectangle_90,
        text: 'Décoration',

    }]
    return (
        <>
            <div className="main_Cards_section">
                <div className="Cards_headings">
                    <h1 className='produits_heading' id="produits">Gamme de Produits </h1>
                    <p className="produits_paragraph"> Bienvenue chez Comptoir Nature, une boutique entièrement  <span className="produits_paragraph_span">dédiée au style balinais et à l’art javanais.</span></p></div>

                <div className="produits_cards_section">
                    {
                        obj.map((v, i) => {
                            return (
                                <>
                                    <div className="produits_cards">
                                        <div className='produits_img'> <img src={v.img} alt="" /></div>
                                        <div className="text"><p>{v.text}</p></div>
                                    </div>
                                </>
                            )
                        })

                    }
                    <div className="produits_footer_text">
                        <p>Objets de décoration, idées cadeaux et beaucoup plus... </p>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Cards
