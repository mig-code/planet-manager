import { HomePage } from '../../pages/home/home.page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout() {
    return (
        <div className="layout-container">
            <Header></Header>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
}
