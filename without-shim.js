(() => {
  // index.js
  var myAbortCtrl = new AbortController();
  (async () => {
    const result = await fetch("http://127.0.0.1:8080/foo.json", { signal: myAbortCtrl.signal });
    console.log(await result.text());
  })();
})();
