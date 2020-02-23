import fetch from 'node-fetch';

class Platzi {

  // eslint-disable-next-line class-methods-use-this
  async getdata() {
    const res = await fetch('https://platzi.com/@Alejozepol', {
      'mode': 'cors',
      'headers': {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'Connection': 'keep-alive',
      },
    });
    console.log(res)
    const dataBody = await res.text();
    const data = dataBody.match(/window.data(.|\n)*?};/g);
    return data;
  };
}

export default Platzi;
