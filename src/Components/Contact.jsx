import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Contact() {
    return (
        <>
            <div className="Contact_main_section">
                <div id="Contact" className="Contact_heading_div">
                    <h1>Contact</h1>
                    <p>Lundi au vendredi : 9:00 à 18:00</p>
                    <p>Samedi : 9:00 à 17:00</p>
                    <p>Dimanche : Fermé</p>
                    <div className="phone_number"><div className='icons'><LocalPhoneIcon /></div> <div>05 90 38 93 05</div> </div>
                </div>
                <div className='map_and_contact_div'>
                    <div className='map_div'>
                        <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/"></a></div>
                        </div>
                    </div>
                    <div className='contact_div'>
                        <form className="contact-form">
                            <div>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Nom Complet"
                                />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Objet du message"
                                />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="tel"
                                    placeholder="Téléphone"
                                />
                            </div>
                            <div>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    cols="6"
                                    rows="4"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button className="primary-button contact-form-btn">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
