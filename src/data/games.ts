export interface Game {
  id: string
  title: string
  year: number
  period: string
  genre: string
  status: "Released" | "In development" | "Pre-registration"
  description: string
  image: string
  imageAlt: string
  website: string
  platforms: string[]
  play?: string
  video?: string
  trailer?: string
}

// First mobile release years: Apple's lookup API (IDs below), checked 2026-11-14.
// 1468068398: 2019-06-16; 1543669328: 2020-12-21; 1553674081: 2021-02-18;
// 1582158648: 2021-08-23; 1642505646: 2022-12-06; 6449617200: 2023-07-16.
// Later projects/statuses: https://locadeserta.com/ and each game's official site.
// Unreleased projects use their public development year, never a promised release date.
export const games: Game[] = [
  {
    id: "stories", title: "Loca Deserta: Interactive Stories", year: 2019, period: "June 2019",
    genre: "Interactive fiction", status: "Released",
    description: "The beginning of Loca Deserta. Find your way home after the battle of Cicora in a branching historical adventure, then write a story of your own with the built-in editor.",
    image: "/images/games/stories.webp", imageAlt: "Historical artwork for Loca Deserta's interactive Cossack stories",
    website: "https://locadeserta.com/interactive/index_en.html", play: "https://locadeserta.com/game/?lang=en", platforms: ["Browser", "iOS", "Android"],
  },
  {
    id: "sloboda", title: "Loca Deserta: Sloboda", year: 2020, period: "December 2020",
    genre: "Settlement strategy", status: "Released",
    description: "A settlement at the edge of the Great Meadow. Put your people to work, connect production chains and prepare for the next season in the original Flutter-built Sloboda.",
    image: "/images/games/sloboda.webp", imageAlt: "Sloboda title artwork with a voxel Cossack church",
    website: "https://locadeserta.com/citybuilding/index_en.html", play: "https://locadeserta.com/sloboda/", platforms: ["Browser", "iOS", "Android", "Windows"],
  },
  {
    id: "hex", title: "Loca Deserta: Hex", year: 2021, period: "February 2021",
    genre: "Strategy puzzle", status: "Released",
    description: "One hex becomes a whole territory. Gather grain, turn resources into an army and work your way toward the fortress walls in a compact strategy puzzle.",
    image: "/images/games/hex.webp", imageAlt: "Loca Deserta: Hex's colorful hexagonal resource map",
    website: "https://locadeserta.com/locadesertahex/index_en.html", play: "https://locadeserta.com/hex/", platforms: ["Browser", "iOS", "Android"],
  },
  {
    id: "chumaki", title: "Loca Deserta: Chumaki", year: 2021, period: "August 2021",
    genre: "Trading simulation", status: "Released",
    description: "Start with a wagon and a market to reach. Trade between historic Ukrainian towns, hire otamans and build the workshops that keep your caravan business moving.",
    image: "/images/games/chumaki.webp", imageAlt: "Chumaki's historical trading map dotted with Ukrainian towns",
    website: "https://locadeserta.com/locadesertachumaki/index_en.html", play: "https://locadeserta.com/chumaki/", platforms: ["Browser", "iOS", "Android", "Windows", "macOS"],
  },
  {
    id: "sloboda-2", title: "Loca Deserta: Sloboda 2", year: 2022, period: "December 2022",
    genre: "3D settlement builder", status: "Released",
    description: "Sloboda steps into 3D. Pick up an axe, build a Cossack settlement and follow its production chains from the first timber to ships bound for the Black Sea.",
    image: "/images/games/sloboda-2.webp", imageAlt: "Sloboda 2's low-poly settlement among green hills",
    website: "https://locadeserta.com/sloboda2/", platforms: ["iOS", "Android"], trailer: "https://www.youtube.com/watch?v=rt2rBLewA6g",
  },
  {
    id: "odesa", title: "Loca Deserta: Odesa", year: 2023, period: "July 2023",
    genre: "Adventure RPG", status: "Released",
    description: "A Cossack pioneer’s life in Khadjibey-Odesa. Explore the southern lands, meet their people, craft what you need and uncover stories through interconnected quests.",
    image: "/images/games/odesa.webp", imageAlt: "Cossacks and horses sheltered inside a circle of wagons in Loca Deserta: Odesa",
    website: "https://locadeserta.com/odesa/", platforms: ["Steam", "Epic Games", "iOS", "Android"],
  },
  {
    id: "settlers", title: "Loca Deserta: Settlers", year: 2026, period: "2026 · in development",
    genre: "Space colony strategy", status: "Pre-registration",
    description: "The settlement-building journey reaches space. Harvest asteroids, connect production buildings and grow colonies in the Star Hetmanate universe.",
    image: "/images/games/settlers.webp", imageAlt: "A Hetmanate battle in Loca Deserta: Settlers",
    website: "https://settlers.locadeserta.com/", platforms: ["Android planned", "iOS planned"], video: "https://settlers.locadeserta.com/media/clips/battle-hetmanate.mp4",
  },
  {
    id: "eastern-wars", title: "Eastern Wars", year: 2026, period: "2026 · in development",
    genre: "Real-time tactics", status: "In development",
    description: "Command regiments through Khmelnytsky’s war. Read the terrain, hold your morale and fight historical battles with infantry, cavalry and artillery.",
    image: "/images/games/eastern-wars.webp", imageAlt: "Eastern Wars battlefield preview and title artwork",
    website: "https://ew.locadeserta.com/", platforms: ["Android planned"], video: "https://ew.locadeserta.com/media/trailers/battles.mp4",
  },
  {
    id: "valka", title: "Valka: The Salt Road", year: 2026, period: "2026 · in development",
    genre: "Caravan defence", status: "In development",
    description: "Lead a salt caravan from Kerch to Kyiv. Trade and hire guards by day; defend your wagons from the creatures of Ukrainian folklore when night falls.",
    image: "/images/games/valka.webp", imageAlt: "Valka's pixel-art caravan travelling the salt road",
    website: "https://valka.locadeserta.com/", platforms: ["Android planned", "iOS planned"], video: "https://valka.locadeserta.com/media/clips/road.mp4",
  },
  {
    id: "sicha", title: "SICHA: Cossack Combat", year: 2026, period: "November 2026",
    genre: "Sabre duels", status: "Released",
    description: "A close encounter, a well-timed parry, one decisive cut. Pixel-art sabre combat with heroes from four nations, a Cossack campaign and local Wi-Fi duels.",
    image: "/images/games/sicha.webp", imageAlt: "A pixel-art sabre duel in SICHA: Cossack Combat",
    website: "https://sicha.locadeserta.com/", platforms: ["iOS", "Android"], video: "https://sicha.locadeserta.com/media/trailer-720.mp4",
  },
  {
    id: "defendus", title: "DefendUS", year: 2026, period: "2026 · in development",
    genre: "Air defence", status: "In development",
    description: "Keep Ukrainian cities powered through the night. Position mobile fire teams, intercept drones and missiles, then use the dawn to strengthen your defences.",
    image: "/images/games/defendus.webp", imageAlt: "DefendUS pixel-art air-defence game artwork",
    website: "https://defendus.locadeserta.com/", platforms: ["Android planned"], video: "https://defendus.locadeserta.com/assets/hero.mp4",
  },
]

export const gamesNewestFirst = [...games].reverse()

export const gamesDescription = "Dmytro Gladkyi’s games, from the first Loca Deserta stories in 2019 to new worlds in development. Explore previews, gameplay videos and official game sites."
