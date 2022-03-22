var app = new Framework7({
  root: '#app',
  name: 'GTACheats',
  id: 'ru.cheater.gta',
  theme: 'md',
  panel: {
    swipe: 'left',
  },
  routes: [
    {
      path: '/main/',
      url: 'index.html',
    },
    {
      path: '/gta4gay/',
      url: 'gta4gay.html',
    },
    {
      path: '/gta4lost/',
      url: 'gta4t.html',
    },
    {
      path: '/gta4/',
      url: 'gta4.html',
    },
    {
      path: '/gtasa/',
      url: 'gtaSA.html',
    },
    {
      path: '/gtavc/',
      url: 'gtaVC.html',
    },
    {
      path: '/gta3/',
      url: 'gta3.html',
    },
    {
      path: '/gta2/',
      url: 'gta2.html',
    },
    {
      path: '/gta1/',
      url: 'gta1.html',
    },
  ],
});

var mainView = app.views.create('.view-main');
var $$ = Dom7;
