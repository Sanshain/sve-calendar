// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "pre.svelte-dpmbr4>code.svelte-dpmbr4{font-size:14px}h1.svelte-dpmbr4.svelte-dpmbr4{font-size:54px;text-align:center;margin:0;margin-top:12px}.container.svelte-dpmbr4.svelte-dpmbr4{padding:16px;padding-top:0;max-width:100%;width:1200px;margin:0 auto}.custom-button.svelte-dpmbr4.svelte-dpmbr4{display:inline-block;background:rgb(0, 120, 255);color:#eee;border:1px solid rgb(0, 100, 255);text-align:center;padding:15px 30px;cursor:pointer}.text-center.svelte-dpmbr4.svelte-dpmbr4{text-align:center}.note.svelte-dpmbr4.svelte-dpmbr4{color:tomato}blockquote.svelte-dpmbr4.svelte-dpmbr4{margin:0 auto;width:1200px;padding:12px;background-color:#dfbdad;border-radius:6px}.example.svelte-dpmbr4.svelte-dpmbr4{border:1px solid #999;border-radius:2px;display:flex}.example.svelte-dpmbr4>div.svelte-dpmbr4{width:100%}.example.svelte-dpmbr4>.live.svelte-dpmbr4{display:flex;justify-content:center;align-items:center;background-color:#ced5dd}.example.svelte-dpmbr4>.code.svelte-dpmbr4{background-color:#474949}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}