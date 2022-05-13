export default function doeBitcoin(){
    async function bitcoin(url){

        const bitcoinFetch = await fetch(url);
        const bitcoinJson = await bitcoinFetch.json();
        
        const spanBitcoin = document.querySelector('.btc-preco');
        spanBitcoin.innerText = 'BTC ' + (100 / bitcoinJson.BRL.buy).toFixed(4);
        }
          
        bitcoin('https://blockchain.info/ticker');

    }

