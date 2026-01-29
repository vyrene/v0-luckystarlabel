"use client"

import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [showArtistRoster, setShowArtistRoster] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const switchPage = (showArtists: boolean) => {
    setIsTransitioning(true)

    setTimeout(() => {
      setShowArtistRoster(showArtists)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  return (
    <>
      <nav className="top-nav">
        <a href="#artists" className="nav-link">
          ARTISTS
        </a>
        <a href="#contact" className="nav-link">
          CONTACT
        </a>
      </nav>

      <div className="split-container">
        <div className={`left-panel ${isTransitioning ? "transitioning" : ""}`} id="leftPanel">
          {!showArtistRoster ? (
            <div id="aboutPage">
              <header className="mb-12">
                <div className="flex justify-between items-start mb-8">
                  <h1 className="text-xl font-bold tracking-wide">ABOUT OUR LABEL</h1>
                  <button onClick={() => switchPage(true)} className="underline-link text-sm text-left">
                    Artist Roster
                    <br />
                    (2020–2025)
                  </button>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  luckyStar is an independent music label championing boundary-pushing artists across electronic, indie,
                  hip-hop, and experimental genres. We provide creative freedom and strategic support to visionary
                  musicians.
                </p>
                <p className="text-sm leading-relaxed opacity-60">↳Recent Achievements</p>
              </header>

              <section>
                <div className="achievement-item">
                  <div className="achievement-number">[01]</div>
                  <div className="achievement-title">
                    <strong>
                      Suzy Sheer&apos;s &apos;Blissed&apos; has now amassed over 4.47 Million Streams Worldwide!
                    </strong>
                  </div>
                  <div className="achievement-meta">
                    Blissed, distributed by luckyStar* Media has garnered lots of attention from electronic artists and
                    has been featured on multiple Electronic playlists via Spotify.
                  </div>
                  <Image
                    src="/images/a1495968349-10-3000x3000.jpg"
                    alt="Suzy Sheer Blissed"
                    width={500}
                    height={500}
                    className="achievement-image mt-4"
                  />
                </div>

                <div className="achievement-item">
                  <div className="achievement-number">[02]</div>
                  <div className="achievement-title">
                    <strong>Bassvictim&apos;s Basspunk receives massive media attention</strong>
                  </div>
                  <div className="achievement-meta">
                    &quot;Decoded&quot; recognized for innovative production and lyrical depth
                    <br />— Award, Recognition, November 2024
                  </div>
                  <Image
                    src="/images/03.jpg"
                    alt="Bassvictim Basspunk"
                    width={500}
                    height={500}
                    className="achievement-image mt-4"
                  />
                </div>

                <div className="achievement-item">
                  <div className="achievement-number">[04]</div>
                  <div className="achievement-title">
                    <strong>Meat computer - help, im falling out now!</strong>
                  </div>
                  <div className="achievement-meta">
                    Meat computer&apos;s help, I&apos;m falling has been widely received as an inspirational electronic
                    masterpiece. Distributed by luckyStar media ltd.
                  </div>
                  <Image
                    src="/images/04.jpg"
                    alt="Meat computer help im falling"
                    width={500}
                    height={500}
                    className="achievement-image mt-4"
                  />
                </div>
              </section>

              <footer className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs opacity-60">© 2025 luckyStar*. All rights reserved.</p>
              </footer>
            </div>
          ) : (
            <div id="artistRosterPage">
              <header className="mb-12">
                <div className="flex justify-between items-start mb-8">
                  <button onClick={() => switchPage(false)} className="underline-link text-sm">
                    ← Back to About
                  </button>
                </div>
              </header>

              <div className="page-header">
                <h1>FEATURED ARTISTS</h1>
              </div>

              <section>
                <div className="artist-profile">
                  <div className="artist-info">
                    <h3>SUZY SHEER</h3>
                    <p>
                      Ethereal soundscapes and intricate production define Suzy Sheer&apos;s signature style. Their
                      ambient electronic compositions create immersive sonic experiences that transport listeners to
                      otherworldly dimensions.
                    </p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/artist/50p44UTSqyTs7BBHCeQq2V?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="artist-image-container">
                    <Image
                      src="/images/suzy-20sheer.jpg"
                      alt="Suzy Sheer"
                      width={600}
                      height={600}
                      className="artist-image"
                    />
                  </div>
                </div>

                <div className="artist-profile reverse">
                  <div className="artist-info">
                    <h3>BASSVICTIM</h3>
                    <p>
                      Raw energy meets melodic sophistication in Bassvictim&apos;s indie rock sound. Their dynamic
                      performances and emotionally charged songwriting have captivated audiences across Europe&apos;s
                      biggest festival stages.
                    </p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/artist/7f8ydynRRnrJBqWxevKLcM?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="artist-image-container">
                    <Image
                      src="/images/bassvictim.jpg"
                      alt="Bassvictim"
                      width={600}
                      height={600}
                      className="artist-image"
                    />
                  </div>
                </div>

                <div className="artist-profile">
                  <div className="artist-info">
                    <h3>MEAT COMPUTER</h3>
                    <p>
                      Timeless grooves with contemporary flair define Meat Computer&apos;s jazz / soul approach. His
                      emotive and sophisticated compositions have earned him a dedicated following.
                    </p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/artist/7JU13ATc2v3kzIuSqNNPWN?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="artist-image-container">
                    <Image
                      src="/images/meat-20computer.jpg"
                      alt="Meat Computer"
                      width={600}
                      height={600}
                      className="artist-image"
                    />
                  </div>
                </div>

                <div className="artist-profile">
                  <div className="artist-info">
                    <h3>BENLAB CRIMSON</h3>
                    <p>
                      Genre-defying pop with artistic depth defines Benlab Crimson&apos;s alternative pop approach. His
                      innovative and thought-provoking music has earned him recognition in the industry.
                    </p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/artist/57MilooYdDaY4sv2VgXNse?utm_source=generator"
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="artist-image-container">
                    <Image
                      src="/images/benalb-1plsq.jpg"
                      alt="Benlab Crimson"
                      width={600}
                      height={600}
                      className="artist-image"
                    />
                  </div>
                </div>
              </section>

              <footer className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs opacity-60">© 2025 luckyStar*. All rights reserved.</p>
              </footer>
            </div>
          )}
        </div>

        <div className="right-panel">
          <header className="mb-12">
            <h1 className="text-xl font-bold tracking-wide">luckyStar* ✬</h1>
          </header>

          <section className="label-section">
            <h2>OUR PHILOSOPHY</h2>
            <p>
              Founded in 2020, luckyStar emerged from a simple belief: exceptional music deserves exceptional support.
              We&apos;re an independent label that champions artists who dare to push boundaries and redefine genres.
            </p>
            <p>
              Our approach is artist-first. We provide creative freedom, strategic guidance, and the resources needed to
              bring bold visions to life. From production to distribution, we&apos;re partners in the journey, not just
              gatekeepers.
            </p>
            <p>
              Based between London and Berlin, we work with a diverse roster of talent spanning electronic, indie,
              hip-hop, jazz, and experimental music. What unites our artists isn&apos;t genre—it&apos;s a commitment to
              authenticity and innovation.
            </p>
          </section>

          <section className="label-section">
            <h2>WHAT WE OFFER</h2>
            <p>
              <strong>Creative Freedom</strong>
              <br />
              Complete artistic control over your music, visuals, and brand identity. We support your vision, not
              dictate it.
            </p>
            <p>
              <strong>Strategic Support</strong>
              <br />
              Expert guidance on release strategy, marketing, touring, and career development from industry veterans.
            </p>
            <p>
              <strong>Production Resources</strong>
              <br />
              Access to world-class studios, producers, mixing engineers, and mastering facilities across Europe.
            </p>
            <p>
              <strong>Distribution & Promotion</strong>
              <br />
              Global digital distribution, playlist pitching, radio promotion, and PR campaigns tailored to your
              audience.
            </p>
            <p>
              <strong>Fair Deals</strong>
              <br />
              Transparent contracts with artist-friendly terms. You keep your masters and publishing rights.
            </p>
          </section>

          <section className="label-section" id="artists">
            <h2>CURRENT ROSTER</h2>
            <p>
              <strong>Suzy Sheer</strong> — Electronic / Ambient
              <br />
              Ethereal soundscapes and intricate production
            </p>
            <p>
              <strong>Bassvictim</strong> — Indie Rock
              <br />
              Raw energy meets melodic sophistication
            </p>
            <p>
              <strong>Meat Computer</strong> — Jazz / Soul
              <br />
              Timeless grooves with contemporary flair
            </p>
            <p>
              <strong>Benlab Crimson</strong> — Alternative Pop
              <br />
              Genre-defying pop with artistic depth
            </p>
          </section>

          <section className="label-section" id="contact">
            <h2>GET IN TOUCH</h2>

            <div className="contact-item">
              <h3>General Inquiries</h3>
              <a href="mailto:info@luckystar.icu">info@luckystar.icu</a>
              <br />
              <span className="opacity-60">+44 20 1234 5678</span>
            </div>

            <div className="contact-item">
              <h3>Demo Submissions</h3>
              <a href="mailto:demos@luckystar.icu">demos@luckystar.icu</a>
              <br />
              <span className="opacity-60 text-sm">We listen to every submission</span>
            </div>

            <div className="contact-item">
              <h3>Press & Media</h3>
              <a href="mailto:press@luckystar.icu">press@luckystar.icu</a>
            </div>

            <div className="contact-item">
              <h3>Follow Us</h3>
              <div className="flex gap-6">
                <a href="https://instagram.com" className="underline-link">
                  Instagram
                </a>
                <a href="https://twitter.com" className="underline-link">
                  Twitter
                </a>
                <a href="https://spotify.com" className="underline-link">
                  Spotify
                </a>
              </div>
            </div>

            <div className="contact-item mt-8">
              <h3>Offices</h3>
              <p className="opacity-60 text-sm leading-relaxed">
                London, UK
                <br />
                Berlin, Germany
              </p>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs opacity-60">Est. 2020 — Independent Music Label</p>
          </footer>
        </div>
      </div>
    </>
  )
}
