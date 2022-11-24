import React from 'react'
import image_16 from '../Assets/Images/image 16.png'
import image_36 from '../Assets/Images/image 36.png'
import image_37 from '../Assets/Images/image 37.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Actualites() {
    return (
        <div className='actualites_main'>
            <div className='heading_div'>
                <h1 className='actualites_heading' id='Actualités'>Actualités</h1>
                <p className='actualites_text one'>Quoi de neuf chez Comptoir Nature ?</p>
            </div>
            <div className='actualites_cards_div'>
                <div className='actualites_card'>
                    <img className='actualites_img' src={image_16} alt="" />
                    <p className='Canapé_text'>Nouvelle collection de canapés dans votre boutique comptoir nature.</p>
                </div>
                
                <div className='actualites_card'>
                    <img className='actualites_img' src={image_36} alt="" />
                    <p className='Canapé_text'>Nouvelle collection dans votre boutique comptoir nature.</p>
                </div>
                <div className='actualites_card'>
                    <img className='actualites_img' src={image_37} alt="" />
                    <p className='Canapé_text'>Canapé convertible …dans votre boutique comptoir nature.</p>
                </div>
            </div>
            <div className='heading_div'>
                <p className='actualites_text'>Suivez nos actualités sur les réseaux sociaux</p>
                <div className='icon_div'>
                    <InstagramIcon  className='icon'/>
                    <FacebookIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Actualites
