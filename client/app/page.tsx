import { ChartLine, ChefHat, Stethoscope } from "lucide-react";
import Image from "next/image";

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path
        fill="currentColor"
        d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.5v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5A11.4 11.4 0 0 0 12 .8Z"
      />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 18-7-7 18-3-8-8-3Z" />
      <path d="m11 14 4-4" />
    </svg>
  );
}

function CookingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10.5V20m10-9.5V20M4 7h6v1a3 3 0 0 1-6 0V7Zm3-4v4m10-4v5m-3-2h6" />
      <path d="M13 20h8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Portfolio / 2026</p>
        <div id="page-title" className="intro-title">
          Thoughtful design,
          <br />
          framed simply.
        </div>
      </section>

      <section className="computer-stage" aria-label="Aashita Jain portfolio preview">
        <div className="monitor">
          <div className="monitor-screen">
            <div className="screen-inner">
              <header className="site-header">
                <div className="brand">Aashita Jain</div>
                <nav className="site-nav" aria-label="Portfolio">
                  <span>Work</span>
                  <span>About</span>
                  <span>Contact</span>
                </nav>
              </header>

              <div className="screen-grid">
                <div className="hero-copy">
                  <p className="screen-kicker">Full-Stack Developer | CS @ UTD</p>
                  <div className="hero-title">
                    I shape ideas
                    <br />
                    into <em>meaningful</em>
                    <br />
                    experiences.
                  </div>
                  <div className="availability">
                    <span className="status-dot" />
                    Looking for Software Engineering roles. Let's connect!
                  </div>
                </div>

                <div className="portrait-frame" aria-hidden="true">
                  <div className="experience-badge experience-badge-left">
                    <span className="experience-icon">
                      <PlaneIcon />
                    </span>
                    <span>Technology Intern @ Southwest Airlines</span>
                  </div>
                  <div className="experience-badge experience-badge-right">
                    <span className="experience-icon">
                      <CookingIcon />
                    </span>
                    <span>AI Voice Recipe Assistant App</span>
                  </div>
                  <div className="portrait-sun" />
                  <div className="portrait-head" />
                  <div className="portrait-hair" />
                  <div className="portrait-neck" />
                  <div className="portrait-body" />
                  <div className="portrait-line portrait-line-one" />
                  <div className="portrait-line portrait-line-two" />
                  <span className="portrait-label">Designer &amp; Engineer</span>
                </div>
              </div>

              <div className="project-strip">
                <a href="https://github.com/aashitajain09" target="_blank" rel="noreferrer" className="project social-project">
                  <GitHubLogo />
                  <span className="social-name">GitHub</span>
                </a>
                <a href="https://devpost.com/jainaashita109?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noreferrer" className="project social-project">
                  <span className="devpost-logo">D</span>
                  <span className="social-name">Devpost</span>
                </a>
                <a href="https://www.linkedin.com/in/aashita-jain9/?isSelfProfile=true" target="_blank" rel="noreferrer" className="project social-project">
                  <span className="linkedin-logo">in</span>
                  <span className="social-name">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="monitor-chin">
            <span className="monitor-mark">AJ</span>
          </div>
        </div>
        <div className="stand-neck" />
        <div className="stand-base" />
      </section>

      <section className="computer-stage about-stage" aria-label="About Aashita">
        <div className="monitor about-monitor">
          <div className="monitor-screen about-screen">
            <div className="about-screen-inner">
              <div className="about-heading">
                <p>learn a little bit about me!</p>
                <div>Aashita</div>
              </div>

              <div className="scrapbook">
                <figure className="memory-frame dance-frame">
                  <span className="tape tape-top" />
                  {/* Ensure you place dance-team.jpg inside public/assets/ or adjust path */}
                  <Image width={400} height={300} src="/assets/dance-team.jpg" alt="Aashita with her dance team" />
                  <figcaption>
                    <span>my dance team</span>
                    <small>the best memories</small>
                  </figcaption>
                </figure>

                <div className="favorites">
                  <figure className="memory-frame mini-frame movie-frame">
                    <span className="tape tape-corner" />
                    <Image width={200} height={260} src="/assets/harry-potter.png" alt="Harry Potter cover" />
                    <figcaption>comfort movie</figcaption>
                  </figure>

                  <figure className="memory-frame mini-frame album-frame">
                    <span className="tape tape-corner" />
                    <Image width={200} height={260} src="/assets/sweetener.png" alt="Sweetener album cover" />
                    <figcaption>always on repeat</figcaption>
                  </figure>
                </div>

                <span className="doodle doodle-one">✦</span>
                <span className="doodle doodle-two">✦</span>
                <span className="doodle-heart">♡</span>
                <span className="scribble">dance · code · create</span>
              </div>
            </div>
          </div>
          <div className="monitor-chin">
            <span className="monitor-mark">AJ</span>
          </div>
        </div>
        <div className="stand-neck" />
        <div className="stand-base" />
      </section>

      <section className="computer-stage about-stage" aria-label="My Projects">
        <div className="monitor about-monitor">
          <div className="monitor-screen about-screen">
            <div className="about-screen-inner">
              <div className="about-heading">
                <p>projects i've worked on</p>
                <div>MY PROJECTS</div>
              </div>

              <div className="scrapbook">
                <figure className="memory-frame dance-frame">
                  <span className="tape tape-top" />

                  <a 
      href="https://devpost.com/software/stock-market-stimulator" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="w-full aspect-[4/3.45] bg-[#f5f4ec] flex flex-col items-center justify-center p-6 transition-transform group-hover:scale-[0.98]">
        <ChartLine className="w-24 h-24 text-[#40533e] stroke-[1.5]" />
      </div>

      <figcaption className="text-center">
        <span className="underline group-hover:text-[#758b70] transition-colors">
          Stock Market Simulation
        </span>
      </figcaption>
    </a>
  </figure>

                <div className="favorites">
                  <figure className="memory-frame mini-frame movie-frame">
                    <span className="tape tape-corner" />

                    <div className="w-full aspect-[2/2.65] bg-[#f5f4ec] flex flex-col items-center justify-center p-4">
                        <ChefHat className="w-16 h-16 text-[#40533e] stroke-[1.5]" />
                    </div>

                    <figcaption>AI Voice Cooking Assistant & Recipe App</figcaption>
                  </figure>

                  <figure className="memory-frame mini-frame album-frame">
                    <span className="tape tape-corner" />

                    <a 
    href="https://devpost.com/software/meditool" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="w-full aspect-[2/2.65] bg-[#f5f4ec] flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-[0.98]">
      <Stethoscope className="w-16 h-16 text-[#40533e] stroke-[1.5]" />
    </div>

    <figcaption className="text-center">
      <span className="underline group-hover:text-[#758b70] transition-colors">
        MediTool
      </span>
    </figcaption>
  </a>
</figure>

                </div>

                <span className="doodle doodle-one">✦</span>
                <span className="doodle doodle-two">✦</span>
                <span className="doodle-heart">♡</span>
                <span className="scribble">dance · code · create</span>
              </div>
            </div>
          </div>
          <div className="monitor-chin">
            <span className="monitor-mark">AJ</span>
          </div>
        </div>
        <div className="stand-neck" />
        <div className="stand-base" />
      </section>

      <footer className="page-footer">
        <span>Selected work &amp; explorations</span>
        <span>Scroll to discover</span>
      </footer>
    </main>
  );
}