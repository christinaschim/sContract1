const CHAIN_ID = "0x5" ;
const CHAIN_NAME = "Sepolia";
const CONTRACT_ADDRESS = "0x158eBF211B01e0a5986f4A363737956f47561379"
async function greet() {
    alert("Hello World");
    const url = "https://sepolia.infura.io/v3/96549a7507ed4b63befcd49cc4a02b70"
    const infura_response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify({
            params:[{
                   data:"0xef690cc0",
                   to: CONTRACT_ADDRESS

                },
                "latest"
          ],
          jsonrpc: "2.0",
          method: "eth_call",
          id: 1
        })
    } );
    console.log(infura_response);
    const result = await infura_response.json();
    console.log(result); 

    let hex = result.result;
    hex = String(hex).slice(2);
    console.log("hex: ", hex);

    const bytes = new Uint8Array(Math.ceil(String(hex).length / 2));


    
    for (let i = 0; i < bytes.length; i++) {
        const start = i*2; 
        const stop = start+2;
        const BASE = 16;
        const currentSubString = String(hex).substring(start, stop)
        bytes [i] = parseInt(currentSubString, BASE); 
    }
    console.log("bytes: ", bytes);

    const decoder = new TextDecoder ("ascii");
    const message = decoder.decode(bytes);
    console.log("message: ", message);
    alert(message);

}
async function connect() {
    if (!window.ethereum) {
        alert("No injected provider found. Install Metamask.");
    } else {
        try {
         const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: []
         });
         console.log("accounts: ", accounts);

         const account = accounts[0];
         console.log("account: ", account);

         const chainId = await window.ethereum.request({
         method: "eth_chainID",
         params:[]
        });
        console.log("chainId: ", chainId);
        console.log("chainId !== CHAIN_ID", chainId !== CHAIN_ID);
        console.log("CHAIN_ID: ")
        if (chainId !== CHAIN_ID) {
            alert(" Connected to wrong chain! Please connect to " + CHAIN_NAME)
        } else { alert("Connected to account:", + String(account), "and chainId:"+ String(chainId));

        }


        alert("Connected to account:", + String(account), "and chainId:"+ String(chainId));
        } catch {
            alert("Something went wrong connecting. Refresh and try again.");
        }
    }
}