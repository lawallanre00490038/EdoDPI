import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image  from "next/image";
import styles from "../../auth.module.css";

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="h-full w-1/2  flex-1 lg:flex flex-col  items-center justify-center px-4">
        <div className="flex items-center mt-8 justify-center">
          <ClerkLoaded>
            <SignUp path="/sign-up"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="text-muted-foreground animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      
      <div className={styles.hideOnMobile}>
        <Image src="/dsnai.png" alt="dsnai" width={300} height={300} priority/>
      </div>
    </section>
  );
}

