let content = {
  username: 'indextestuser',
  password: 'secretpassword'
};

let debugUrl = 'https://msjbm2xkbd.execute-api.us-west-2.amazonaws.com';
fetch(`${debugUrl}/sinkdrain`, {
  method: 'POST',
  body: JSON.stringify(content),
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}).then((e) => console.log(e));
