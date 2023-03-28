import { useState } from "react";
import { ConnectWallet } from "../functions/ConnectWallet";


export default function Header() {

    const [account, setAccount] = useState("Connect Wallet");

    function ConnectWalletHeader() {
        ConnectWallet().then((result) => {
            setAccount(result);
            
        }).catch((err) => {
            console.log(err)
            alert(err)
        });
    }

    return (
      <header onLoad={ConnectWalletHeader}>
        <img src={"https://tokenaim.com.br/logo.png"} alt={"Logo"} />
        <h1>Freelancer Platform</h1>
        <button onClick={ConnectWalletHeader} id="connect-btn">{account}</button>
      </header>

    );
}