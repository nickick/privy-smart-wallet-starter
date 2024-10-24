import { usePrivy } from "@privy-io/react-auth";

export const Login = () => {
  const { login, logout, authenticated, ready, user } = usePrivy();
  const smartWallet = user?.linkedAccounts.find(
    (account) => account.type === "smart_wallet"
  );
  if (user) {
    const smartWallet = user.linkedAccounts.find(
      (account) => account.type === "smart_wallet"
    );
    console.log(smartWallet?.address);
  }

  if (!ready) return <div>Loading...</div>;
  return (
    <div>
      {!authenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>
          <div>
            <p>Smart Wallet: {smartWallet?.address}</p>
            <p>Eoa wallet: {user?.wallet?.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};
