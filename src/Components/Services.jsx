import parking from '../Assets/Images/parking 1.png'
import interior from '../Assets/Images/interior 1.png'
import couple from '../Assets/Images/couple 1.png'
import delivery from '../Assets/Images/delivery-truck 1.png'
import Base from '../Assets/Images/BASE.png'
import visa from '../Assets/Images/visa.png'
import master from '../Assets/Images/master.png'
function Serv() {
    let obj = [
        {
            img: parking,
            text: "Stationnement"
        },
        {
            img: delivery,
            text: "Livraison"
        },
        {
            img: interior,
            text: "Conseils Décoration"
        },
        {
            img: couple,
            text: "Listes de Mariage"
        },
    ]
    return (
        <>
            <div className='main_service_div'>
                <div className='service_div'>
                    <h1 className='h1' id='Services'>Services</h1>
                    <p className='p'>Bienvenue chez Comptoir Nature, une boutique entièrement dédiée au style balinais et à l’art javanais.</p>
                    <div className='inner_service_div'>
                        {obj?.map((v, i) => {
                            return (
                                <>
                                    <div className='inner_div' key={i} >
                                        <div className='parking_img_div'>
                                          <div className='serv_img'>  <img className='parking_img' src={v?.img} /></div>
                                        </div>
                                        <div className='parking_text_div'>
                                            <h1>{v?.text}</h1>
                                            <p>
                                                Nous avons un service de liste de mariage en boutique qui vous permet de choisir des articles en stock ou sur commande selon vos besoins ou vos envies. Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                    <div className='modes_div'>
                        <h1>Modes de Paiement</h1>
                        <div className='modes_img'>
                            <img className='base' src={Base} />
                            <img className='amex' src='https://cdn-icons-png.flaticon.com/512/179/179431.png' />
                            <img className='visa' src={visa} />
                            <img className='master' src={master} />
                        </div>
                        <div className='modes_img1'>
                            <p>Nous acceptons aussi l’espèces et la vente-à-distance. Nous proposons également le règlement en 4 fois sans frais.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Serv