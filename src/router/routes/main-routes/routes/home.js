import NoPetRegirestedPage from '../../../../layouts/pages/NoPetRegirestedPage';

export default {
  pathname: '/',
  element: () => {
    const $content = document.createElement('div');
    $content.classList.add('home__content-page');
    const noPetRegirestedPage = new NoPetRegirestedPage();
    noPetRegirestedPage.mount($content);
    return $content;
  },
};
