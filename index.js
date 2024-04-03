const myAbortCtrl = new AbortController();
(async ()=> {
    const result =await fetch('foo.json', {signal: myAbortCtrl.signal })
    console.log(await result.text());
})()