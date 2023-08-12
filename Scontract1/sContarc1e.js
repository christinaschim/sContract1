const CHAIN_ID = ;
const CHAIN_NAME = "Sepolia";
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
         console.log("account: ", account);

         const chainId = await window.ethereum.request({
         method: "eth_chainID",
         params:[]
        });
        console.log("chainId: ", chainId);
        console.log(chainId !== CHAIN_ID);
        console.log()
        if (chainId !== CHAIN_ID) {
            alert(" Connected to wrong chain! Please connect to " + CHAIN_NAME)
        } else { alert("Connected to account:", + String(account), "and chainId:"+ String(chainId));

        }


        alert("Connected to account:", + String(account), "and chainId:"+ String(chainId));
        }catch {
            alert("Something went wrong connecting. Refresh and try again.");
        }
    }
}