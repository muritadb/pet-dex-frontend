import { Router, routeLocation } from 'vanilla-routing';
import NoPetRegirestedPage from '../../../../home/components/NoPetRegirestedPage';

export default {
  pathname: '/petperfil',
  element: () => {
    console.log('Pet Perfil', routeLocation());
    const $content = document.createElement('div');
    $content.classList.add('home__content-page');
    $content.style.backgroundColor = 'blue';
    const noPetRegirestedPage = new NoPetRegirestedPage();
    noPetRegirestedPage.mount($content);
    Router.dispose(() => {
      console.log('Bye Meus Pets Page');
    });
    return $content;
  },
};