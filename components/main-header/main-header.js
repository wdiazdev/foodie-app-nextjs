import Link from "next/link"
import logoImg from "@/assets/logo.png"
import styles from "./main-header.module.css"
import Image from "next/image"
import MainHeaderBg from "./main-header-bg"

const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logoImg} alt="Food App" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
