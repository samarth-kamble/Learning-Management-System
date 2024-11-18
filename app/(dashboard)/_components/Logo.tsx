import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image height={40} width={40} alt="Logo" src="/logo.png" />
    </Link>
  );
};

export default Logo;
