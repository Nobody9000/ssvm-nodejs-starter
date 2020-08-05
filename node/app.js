let hostname = '0.0.0.0', port = 3000, server = require('http').createServer(async (req, res) => {
  let queryObject = require('url').parse(req.url,true).query;
  if (!queryObject['text']) { res.end(final(`ERROR: Please use the proper format: http://${hostname}:${port}/?text=TEXT_HERE?`)); } 
  else { let result = await data(queryObject['text']), fixed = require('../pkg/ssvm_nodejs_starter_lib.js').say(result); res.end(final(fixed))}
});
server.listen(port, hostname, () => { console.log(`Server running at [http://${hostname}:${port}/?text=TEXT_HERE?]`); });
function final(input) {
  let toappend = [];
  toappend.push(`<!DOCTYPE html><html lang="en"><head><title>AI Reply</title></head><body style="background-color:rgba(0,0,0,0.5);">`);
  toappend.push(`<form name="frm1" method="get"><input type="text" name="text" placeholder="Type Here!" style="min-height:35px;"><input type="submit" value="Get A reply" style="min-height:35px;background-color:lightblue;border-radius:5px;"/></form>`);
  toappend.push(`<br /><b>${input}</b>`);
  toappend.push(`</body></html>`);
  return toappend.join(``);
}
async function data(args) {
  if (args.endsWith(`?`)) {
  let random = [`As I see it, yes.`,`Ask again later.`,`Better not tell you now.`,`Cannot predict now.`,`Concentrate and ask again.`,`Don’t count on it.`,`It is certain.`,`It is decidedly so.`,`Most likely.`,`My reply is no.`,`My sources say no.`,`Outlook not so good.`,`Outlook good.`,`Reply hazy, try again.`,     `Signs point to yes.`,`Very doubtful.`,`Without a doubt.`,`Yes.`,`Yes – definitely.`,`You may rely on it.`  ];
  return random[Math.floor(Math.random() * (random.length))];
  } else { return `No question was provided.`; }
}
