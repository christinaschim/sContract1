function greet() {
    alert("Hello World");
}
function connect() {
    if (!window.ethereum) {
        alert("No injected provider found. Install Metamask.");
    } else {
        try {
         const accounts = window.ethereum.request({
            method: "eth_requestAccounts",
            params: []
         });
         const account = accounts[0];
         const chainID = window.ethereum.request({
         method: "eth_chainID",
         params:[]
        })
        alert("Connected to account:", account, "and ChainId:", chainID);
        }catch {
            alert("Something went wrong connecting. Refresh and try again.");
        }
    }
}