import trackwalk from "../app/assets/portfolio/trackwalk.png";
import katakreatif from "../app/assets/portfolio/katakreatif.png";
import comic from "../app/assets/portfolio/comic.png";
import banper from "../app/assets/portfolio/banper.png";

module.exports = [
  {
    title: "Trackwalk Ticket Scanner",
    description:
      "The TrackWalk Scanner Ticket application is a ticket scanner application specifically developed for the Mandalika Circuit on Lombok Island, Indonesia. The main purpose of this application is to validate tickets using QR code scanners to prevent counterfeiting and to monitor the attendance of spectators in various areas around the circuit. With integration with the circuit's information system, the management can obtain real-time data on ticket sales and area capacities. The application provides user-friendly features for ticket validation officers and offers statistical reporting for evaluation and planning of future events. With TrackWalk Scanner Ticket, the Mandalika Circuit can enhance overall security, efficiency, and spectator experience.",
    tools: ["Flutter"],
    url: "https://docs.google.com/presentation/d/1PxOMKJeeRtHVxKMOH_gitHv2haPFYIgG/edit?usp=drive_link&ouid=109077474950325416670&rtpof=true&sd=true",
    isPrivate: true,
    thumbnail: trackwalk,
  },
  {
    title: "KaTa Kreatif",
    description:
      "KaTa Kreatif is one of the flagship programs of the Ministry of Tourism and Creative Economy/Tourism and Creative Economy Agency (Kemenparekraf/BPEK) to explore, manage and develop the creativity and local potential of districts or cities in Indonesia.",
    tools: ["Nuxt JS", "Node JS"],
    url: "https://katakreatif.kemenparekraf.go.id/",
    isPrivate: false,
    thumbnail: katakreatif,
  },
  {
    title: "Banper",
    description:
      "Banper Kemenparekraf is a project from the Ministry of Tourism and Creative Economy (Kemenparekraf) which is useful for providing services to the Indonesian people in applying for assistance to the government",
    tools: ["Next JS"],
    url: "https://banper.kemenparekraf.go.id/",
    isPrivate: false,
    thumbnail: banper,
  },
  {
    title: "Comic App",
    description:
      "Comic app is an innovative comic application built with Flutter and Node.js technology. This application allows users to explore, read, and download various types of comics from various sources easily. The features of this app are extensive Comic Collection, latest Web Scraping, history last chapter read",
    tools: ["Flutter", "Node JS"],
    url: "https://github.com/Al-Ghozy03/komik_app",
    isPrivate: false,
    thumbnail: comic,
  },
];
