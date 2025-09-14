import Image from "next/image"

import mealIcon from "@/assets/icons/meal.png"
import communityIcon from "@/assets/icons/community.png"
import eventsIcon from "@/assets/icons/events.png"
import classes from "./page.module.css"

const perks = [
  {
    icon: mealIcon,
    alt: "A delicious meal",
    text: "Share & discover recipes",
  },
  {
    icon: communityIcon,
    alt: "A crowd of people, cooking",
    text: "Find new friends & like-minded people",
  },
  {
    icon: eventsIcon,
    alt: "A crowd of people at a cooking event",
    text: "Participate in exclusive events",
  },
]

const PerkItem = ({ icon, alt, text }) => (
  <li>
    <Image src={icon} alt={alt} />
    <p>{text}</p>
  </li>
)

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          {perks.map((perk, index) => (
            <PerkItem key={index} {...perk} />
          ))}
        </ul>
      </main>
    </>
  )
}
