function greet() {
    alert("Hello World");
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
         const chainID = await window.ethereum.request({
         method: "eth_chainID",
         params:[]
        })
        console.log("chainId: ", chainId);


        alert("Connected to account:", String(account), "and ChainId:",String (chainID));
        }catch {
            alert("Something went wrong connecting. Refresh and try again.");
        }
    }
}