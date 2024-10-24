import { usePrivy } from "@privy-io/react-auth";
import { Mint } from "./Mint";
import { Transfer } from "./Transfer";

export const Buttons = () => {
  const { authenticated } = usePrivy();
  return (
    <div className="flex flex-col gap-4">
      {authenticated && (
        <>
          <Mint />
          <Transfer />
        </>
      )}
    </div>
  );
};
