let privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
let publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
let ts = '1';
let value = ts + privateKey + publicKey;

import crypto from 'crypto';
var hash = crypto.createHash('md5').update(value).digest('hex');
//console.log(hash); // 9b74c9897bac770ffc029102a200c5de
import fetch from 'node-fetch';

async function test(){

  const body = {
    ts: ts,
    apikey: publicKey,
    hash: hash,
  }
  
  
  const str = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
  console.log(str);
  const response = await fetch(str);
  const data = await response.json();
  console.log('data',data);
}

test()