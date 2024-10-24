import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useState } from "react";
import { parseUnits } from "viem";
import { sepolia } from "wagmi/chains";

export const NFT_ADDRESS = "0x3331AfB9805ccF5d6cb1657a8deD0677884604A7";

export const USDC_ADDRESS = "0x5deac602762362fe5f135fa5904351916053cf70";

export const BASE_SEPOLIA_SCAN_URL = "https://sepolia.basescan.org";

export const Transfer = () => {
  const { client: smartWalletClient } = useSmartWallets();
  const smartWalletAddress = smartWalletClient?.account.address;
  const [isTransferring, setIsTransferring] = useState(false);

  const onTransfer = async () => {
    if (!smartWalletAddress) return;
    setIsTransferring(true);
    try {
      const res = await smartWalletClient.sendTransaction({
        chain: sepolia,
        to: "0xf5715961C550FC497832063a98eA34673ad7C816",
        value: parseUnits("0.0000001", 18),
      });
      console.log(res);
    } catch (error) {
      console.error("Transfer failed with error: ", error);
    }
    setIsTransferring(false);
  };

  /** wagmi version
   *  try {
      const res = await writeContractAsync({
        chain: polygon,
        address: NFT_ADDRESS as `0x${string}`,
        abi: ABI,
        functionName: "mint",
        args: [smartWalletAddress],
      });
      console.log(res);
    } catch (error) {
      console.error("Mint failed with error: ", error);
    }
   */

  return (
    <button
      onClick={onTransfer}
      className="rounded-sm btn-primary-small"
      disabled={isTransferring}
    >
      Transfer
    </button>
  );
};
