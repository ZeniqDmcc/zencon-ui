import JoinClub from "../JoinClub/JoinClub";
import { useRouter } from "next/router";

export default function PageWrapper({ children }) {
  const location = useRouter();

  return (
    <main className="page-wrapper min-h-screen overflow-hidden relative">
      {children}
      {location.pathname.startsWith("/ambassadors-programme") ? (
        <></>
      ) : (
         <JoinClub />
      )}
    </main>
  );
}
