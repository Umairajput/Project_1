import React from 'react'

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer">
                <div className="container d-flex align-items-center justify-content-between">
                    <p className="copy-right-text">
                        ComptoirNature.net {currentYear} - Tous droits réservés.
                    </p>
                    <p className="copy-right-text">
                        Site internet créé par vanCleem.com
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
