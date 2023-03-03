
// import App from './App.svelte'

// const app = new App({
//   target: document.getElementById('app'),
// })

// export default app


//------ Tunnis ------
//logib brauseri konsooli
console.log("hello");

//naide ES impordist
//impordi koik * asjad <muutujana>, ./kust
import hello from './hello.js';
hello.hello('esmodule');

//naide common impordist AGA Vite seda ei toeta
// let hello2 = require('./hello2.js');
// hello2.hello('common.js');