const myAbortCtrl = new AbortController();
fetch('https://perdu.com', {signal: myAbortCtrl.signal})