import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useState } from "react";
import { encodeFunctionData } from "viem";
import { sepolia } from "wagmi/chains";
import ABI from "./nftAbi.json";

export const NFT_ADDRESS = "0x3331AfB9805ccF5d6cb1657a8deD0677884604A7";

export const USDC_ADDRESS = "0x5deac602762362fe5f135fa5904351916053cf70";

export const BASE_SEPOLIA_SCAN_URL = "https://sepolia.basescan.org";

export const Mint = () => {
  const { client: smartWalletClient } = useSmartWallets();
  const smartWalletAddress = smartWalletClient?.account.address;
  const isLoading = !smartWalletAddress;
  const [isMinting, setIsMinting] = useState(false);

  const onMint = async () => {
    // The mint button is disabled if either of these are undefined
    if (!smartWalletAddress) return;

    // Store a state to disable the mint button while mint is in progress
    setIsMinting(true);

    try {
      const res = await smartWalletClient.sendTransaction({
        account: smartWalletClient.account,
        chain: sepolia,
        to: NFT_ADDRESS,
        data: encodeFunctionData({
          abi: ABI,
          functionName: "mint",
          args: [smartWalletAddress],
        }),
      });
      console.log(res);
    } catch (error) {
      console.error("Transfer failed with error: ", error);
    }

    setIsMinting(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onMint}
        className="rounded-sm btn-primary-small"
        disabled={isLoading || isMinting}
      >
        Mint
      </button>
    </div>
  );
};
