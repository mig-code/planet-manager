import React from 'react';
import './footer.scss';
export function Footer() {
    return (
        <footer className="app-footer">
            <p className="app-footer__text">
                Made with ❤️ by{' '}
                <a
                    className="app-footer__link"
                    href="https://github.com/mig-code"
                >
                    Miguel PGómez
                </a>
            </p>
        </footer>
    );
}
