window.onload = () => {
  'use strict';
  pwa();
};

async function pwa()
{
  if ('serviceWorker' in navigator)
  {
    console.log('... service workers are supported :-)');
    navigator.serviceWorker.register('/sw.js', {scope: './'}).then(async function(reg){
      console.log('...Service worker registration succeeded:');
      //console.log(reg);
      await can_install_pwa();
    },function(error) {
      console.log('...Service worker registration failed:');
    });
  }
  else
  {
    console.log('... service workers are NOT supported :-(');
  }
}

async function can_install_pwa()
{
  window.addEventListener('beforeinstallprompt', async function(e) {
     e.preventDefault();   
     //await register_pwa(e);
  });
}

async function register_pwa(e)
{
  console.log('...you can save the app to your desktop');
  let btn = document.getElementById('add_to_desktop');
  btn.addEventListener('click', function() {
  console.log('clicked Add to Desktop');
  e.prompt();
  e.userChoice.then(function(choiceResult) {

    if(choiceResult.outcome == 'dismissed')
    {
      console.log('...you cancelled the desktop install');
    }
    else
    {
      console.log('... you added PM to the desktop');
      btn.style.display = 'none';
    }
    e = null;
    });
  });

  window.addEventListener('appinstalled', (evt) => {
    console.log("installed..." + evt);
  });

}
