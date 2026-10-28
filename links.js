// Everything the page shows comes from this file. To add a new reel: copy the
// first entry in CASES, put it at the top, change the fields, commit and push.
// (Steps in README.md. Newest case first.)

window.SITE = {
  brand: ["WEB", "FILES"], // placeholder series name, same as the reels
  title: "Useful websites, explained",
  tagline: "Every website, GitHub repo and AI tool from the reels, in one place.",
  handle: "@useful.cursor",
  instagram: "https://www.instagram.com/useful.cursor/",
  youtube: "https://www.youtube.com/@useful.cursor",
};

// My own things, shown under the case files.
window.EXTRAS = [
  {
    label: "Made by me",
    name: "Hushroom",
    url: "https://play.google.com/store/apps/details?id=com.focufuse.focusage",
    blurb:
      "The focus app I built. A Pomodoro timer with tasks, app blocking and ambient sounds, and habits that grow into a garden.",
    tags: ["Free", "Ad-free", "Android", "Windows", "Web"],
    cta: "Get it on Google Play",
    icon: "hushroom.png",
  },
];

window.CASES = [
  {
    n: 10,
    name: "Chess Coach",
    url: "https://github.com/rkprince101/chess-coach",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "My own chess app that teaches while you play. Every move is graded, a bad one pauses the game while the coach explains it and plays out the punishment, then you retry. Three-step hints, 32 lessons. Android APK in the releases; the AI coach needs your own API key.",
    tags: ["Free", "Open source", "Learn chess"],
    reel: "https://www.instagram.com/reel/DfBpUDisZ03/",
    date: "2026-10-28",
  },
  {
    n: 9,
    name: "Mesh Avatar Studio",
    url: "https://github.com/shinshin86/mesh-avatar-studio",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "Turn one illustration into an animated 2D avatar that blinks, talks, turns its head and sways its hair. A coding agent rigs it, you fix it by dragging dots, and the browser Player moves it with your face and voice (nothing uploaded). Needs Claude Code or Codex to make your own.",
    tags: ["Open source", "MIT", "VTuber"],
    reel: "https://www.instagram.com/reel/DfBcHfQspON/",
    date: "2026-10-28",
  },
  {
    n: 8,
    name: "HTML-Anime",
    url: "https://github.com/blixvip/html-anime",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "Prompt an anime and a coding agent draws it in HTML, no video model. Type one scene, the site turns it into a shot sheet with locked colors, then Claude, Codex, Cursor or Grok draws the film on real anime timing. Needs a coding agent (some are paid).",
    tags: ["Open source", "MIT", "Animation"],
    reel: "https://www.instagram.com/reel/De9BJTysc72/",
    date: "2026-10-26",
  },
  {
    n: 7,
    name: "The Jantar Mantar Run",
    url: "https://the-jantar-mantar-run.vercel.app/",
    kind: "Website", // Website | GitHub repo | AI tool
    blurb:
      "A free comic arcade runner in the browser: pick a protester, then run 1,103 m of Delhi road to Jantar Mantar. Jump the barricades, dodge the water cannon and tear gas, and stay out of the police van. Made by Pratik Mahajan.",
    tags: ["Free", "Browser game", "Works on phone"],
    reel: "https://www.instagram.com/reel/De6cww6s-vn/",
    date: "2026-10-25",
  },
  {
    n: 6,
    name: "Ballpoint Gambit",
    url: "https://ballpoint-gambit.vercel.app/",
    kind: "Website", // Website | GitHub repo | AI tool
    blurb:
      "Free chess in the browser where every piece is a doodle on paper: mushroom pawns, a bee queen, an owl king. A little ink bird called Quill teaches you in 11 lessons, then play at five levels from sleepy to sharp.",
    tags: ["Free", "Browser game", "Learn chess"],
    reel: "https://www.instagram.com/reel/De4GdDLMV3K/",
    date: "2026-10-24",
  },
  {
    n: 5,
    name: "Permit Pending",
    url: "https://permit.petercai.com/",
    kind: "Website", // Website | GitHub repo | AI tool
    blurb:
      "A free city builder where you're the mayor, not a god: every building, bus lane and factory has to get through hearings, objections, appeals and lawsuits. Runs in the browser on a desktop or laptop, no account.",
    tags: ["Free", "Browser game", "No sign-up"],
    reel: "https://www.instagram.com/reel/DeywShWs7lH/",
    date: "2026-10-22",
  },
  {
    n: 4,
    name: "AI Job Search",
    url: "https://github.com/MadsLorentzen/ai-job-search",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "An open-source job application workflow: it reads each posting, scores your fit, tailors your CV and cover letter, and a second agent reviews the draft. Needs Claude Code (paid). Keep your copy private.",
    tags: ["Open source", "MIT", "Careers"],
    reel: "https://www.instagram.com/reel/DeyZHwis8tt/",
    date: "2026-10-22",
  },
  {
    n: 3,
    name: "PhotoCraft",
    url: "https://github.com/storytold/photocraft",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "An open-source rebuild of Photoshop written in Rust: layers, masks, adjustment layers, layer styles, brushes and real PSD files. Runs offline on Windows, Mac and Linux.",
    tags: ["Free", "Open source", "Runs offline"],
    reel: "https://www.instagram.com/reel/DerC49jM-te/",
    date: "2026-10-19",
  },
  {
    n: 2,
    name: "VoiceStudio",
    url: "https://github.com/debpalash/VoiceStudio",
    kind: "GitHub repo", // Website | GitHub repo | AI tool
    blurb:
      "A free, open-source voice studio that runs on your own computer: voice cloning, voice design, video dubbing, audiobooks and dictation in 646 languages. Only clone voices you have permission to use.",
    tags: ["Free", "Open source", "Runs locally"],
    reel: "https://www.instagram.com/reel/DeoqKs9syEV/",
    date: "2026-10-18",
  },
  {
    n: 1,
    name: "Guitoro",
    url: "https://guitoro.com",
    kind: "Website", // Website | GitHub repo | AI tool
    blurb:
      "A real guitar you play with your laptop keyboard. Chords on the letter keys, strum with H and J, and songs wait for you at every chord change.",
    tags: ["Free", "No sign-up", "Music"],
    reel: "https://www.instagram.com/reel/DenuMFDMsBE/",
    date: "2026-10-18",
  },
];
