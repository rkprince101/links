// Everything the page shows comes from this file. To add a new reel: copy the
// first entry in CASES, put it at the top, change the fields, commit and push.
// (Steps in README.md. Newest case first.)

window.SITE = {
  brand: ["WEB", "FILES"], // placeholder series name, same as the reels
  title: "Useful websites, explained",
  tagline: "Every website, GitHub repo and AI tool from the reels, in one place.",
  handle: "@flutter.coder_",
  instagram: "https://www.instagram.com/flutter.coder_/",
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
