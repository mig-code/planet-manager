import { HomePage } from '../../pages/home/home.page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './layout.scss';

export function Layout() {
    return (
        <div className="layout-container">
            <Header></Header>
            <section className="layout-children">
                <HomePage></HomePage>
            </section>
            <Footer></Footer>
        </div>
    );
}
