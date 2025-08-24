"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  Menu,
  X,
  Moon,
  Sun,
  Star,
  Shield,
  Users,
  Layers,
  Gamepad2,
  Coins,
  Trophy,
  Sword,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Play-to-Earn Mechanics",
      description: "Battle epic monsters and complete quests to earn real cryptocurrency rewards.",
      icon: <Gamepad2 className="size-5" />,
    },
    {
      title: "NFT Heroes & Items",
      description: "Collect, trade, and upgrade unique NFT heroes with special abilities and rare items.",
      icon: <Crown className="size-5" />,
    },
    {
      title: "Guild System",
      description: "Join forces with other players in powerful guilds to conquer challenging raids.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Secure DeFi Integration",
      description: "Your assets are protected by cutting-edge blockchain security and smart contracts.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Seamlessly trade and battle across multiple blockchain networks.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Tournament Rewards",
      description: "Compete in epic tournaments and climb leaderboards for massive prize pools.",
      icon: <Trophy className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col font-sans">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/herox-header-logo-new.png"
                width={32}
                height={32}
                alt="HeroX logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-work-sans">HeroX</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#gameplay"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Gameplay
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About HeroX
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Link
              href="https://x.com/heroxdotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TwitterIcon className="size-[18px]" />
              <span className="sr-only">Follow HeroX on Twitter</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="https://x.com/heroxdotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TwitterIcon className="size-[18px]" />
              <span className="sr-only">Follow HeroX on Twitter</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#gameplay" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Gameplay
              </Link>
              <Link href="#about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About HeroX
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                variant="secondary"
              >
                🎮 First GameFi Dapp
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary font-work-sans">
                HeroX
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The first GameFi dapp where epic adventures meet real rewards. Battle mythical creatures, collect
                legendary NFTs, and earn cryptocurrency in the ultimate play-to-earn experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  Start Your Quest
                  <Sword className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <Link href="https://x.com/heroxdotfun" target="_blank" rel="noopener noreferrer">
                    X
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-secondary" />
                  <span>Free to play</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-secondary" />
                  <span>Earn real crypto</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-secondary" />
                  <span>Own your assets</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-2xl"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/herox-logo.png"
                  width={800}
                  height={600}
                  alt="HeroX logo - cowboy hat with golden lettering"
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Join thousands of heroes already earning</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-work-sans">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary font-work-sans">$2M+</div>
                  <div className="text-sm text-muted-foreground">Rewards Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-work-sans">100K+</div>
                  <div className="text-sm text-muted-foreground">NFTs Minted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-secondary font-work-sans">500+</div>
                  <div className="text-sm text-muted-foreground">Active Guilds</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Game Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-work-sans">Epic Adventures Await</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Discover a world where your gaming skills translate into real-world value through innovative GameFi
                mechanics.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:border-primary/20">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-work-sans">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="gameplay" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-20"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How to Play
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-work-sans">Your Journey to Glory</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Start your heroic adventure in minutes and begin earning rewards through strategic gameplay.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Create Your Hero",
                  description:
                    "Choose your class, customize your appearance, and mint your unique NFT hero to begin your quest.",
                  icon: <Crown className="size-6" />,
                },
                {
                  step: "02",
                  title: "Battle & Explore",
                  description:
                    "Fight monsters, complete quests, and explore mystical realms to earn XP and valuable loot.",
                  icon: <Sword className="size-6" />,
                },
                {
                  step: "03",
                  title: "Earn & Trade",
                  description:
                    "Convert your achievements into cryptocurrency and trade rare NFT items with other players.",
                  icon: <Coins className="size-6" />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-xl font-bold shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold font-work-sans">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About HeroX Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-20"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                About HeroX
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-work-sans">
                The Future of Gaming is Here
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                HeroX represents a revolutionary leap in gaming, combining the thrill of epic adventures with the power
                of blockchain technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-work-sans">Our Vision</h3>
                <p className="text-muted-foreground">
                  We envision a world where gaming transcends entertainment to become a legitimate source of income and
                  digital ownership. HeroX is pioneering the GameFi revolution, creating an ecosystem where players
                  truly own their in-game assets and can monetize their gaming skills.
                </p>

                <h3 className="text-2xl font-bold font-work-sans">What Makes Us Different</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">True Ownership</h4>
                      <p className="text-sm text-muted-foreground">
                        Every hero, weapon, and item is an NFT that you truly own and can trade freely.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Sustainable Economy</h4>
                      <p className="text-sm text-muted-foreground">
                        Our carefully balanced tokenomics ensure long-term sustainability and growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Community First</h4>
                      <p className="text-sm text-muted-foreground">
                        Built by gamers, for gamers, with community governance at its core.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="p-6 border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <h3 className="text-xl font-bold mb-4 font-work-sans">HeroX Token (HRX)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Supply</span>
                      <span className="font-semibold">1,000,000,000 HRX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Play-to-Earn Rewards</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Staking Rewards</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Development</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Community & Marketing</span>
                      <span className="font-semibold">15%</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <h3 className="text-xl font-bold mb-4 font-work-sans">Roadmap Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="size-4 text-secondary" />
                      <span className="text-sm">Alpha Launch & NFT Heroes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="size-4 text-secondary" />
                      <span className="text-sm">Guild System & PvP Battles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full border-2 border-primary"></div>
                      <span className="text-sm">Mobile App Release</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full border-2 border-muted-foreground"></div>
                      <span className="text-sm">Cross-Chain Expansion</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our customers have to say about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "HeroX has transformed how we engage with gaming. The play-to-earn mechanics have been a huge success.",
                  author: "John Doe",
                  role: "Gamer, CryptoLovers",
                  rating: 5,
                },
                {
                  quote:
                    "The NFT heroes and items are unique and fun to collect. It's added a new level of excitement to gaming.",
                  author: "Jane Smith",
                  role: "Collector, NFT Enthusiast",
                  rating: 5,
                },
                {
                  quote: "The guild system is great for teamwork. It's made playing with friends even more enjoyable.",
                  author: "Mike Johnson",
                  role: "Team Leader, Gaming Guild",
                  rating: 5,
                },
                {
                  quote: "Secure DeFi integration gives us peace of mind. Our assets are well protected.",
                  author: "Alice Brown",
                  role: "Investor, CryptoCommunity",
                  rating: 5,
                },
                {
                  quote:
                    "Cross-chain compatibility is a game-changer. It's easy to trade and battle across different networks.",
                  author: "Bob White",
                  role: "Trader, Blockchain Enthusiast",
                  rating: 5,
                },
                {
                  quote: "Tournament rewards are fantastic. It's motivating to compete and climb leaderboards.",
                  author: "Charlie Black",
                  role: "Competitive Gamer, HeroX Fan",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the 14-day free trial work?",
                    answer:
                      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "Is there a limit to how many users I can add?",
                    answer:
                      "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
                  },
                  {
                    question: "Do you offer discounts for nonprofits or educational institutions?",
                    answer:
                      "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer:
                      "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 border-t bg-background/95 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>© 2025 HeroX. A fun cowboy runner on XlayerChain — play, score, and get rewarded.</p>
            <p>Contact us: contact@herox.fun</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
