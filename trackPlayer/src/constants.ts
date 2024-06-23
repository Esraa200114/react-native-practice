import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id: 1,
        title: "1. Akın koçovalı",
        artist: "Unknown",
        album: "Çukur müzik",
        artwork: "https://i.ytimg.com/vi/13xo5Zy3zp4/maxresdefault.jpg",
        url: require("./assets/audio/One.mp3")
    },
    {
        id: 2,
        title: "2. Çıkmaz Sokak V2 Hüsran",
        artist: "Unknown",
        album: "Çukur müzik",
        artwork: "https://m.media-amazon.com/images/M/MV5BZTYyZWNmNzctM2JhMS00NjBmLTgxNDMtMTg0YTQ4ZWQ2NWQ5XkEyXkFqcGdeQXVyOTQ1Mzg0Mzg@._V1_.jpg",
        url: require("./assets/audio/Two.mp3")
    },
    {
        id: 3,
        title: "3. Koçovalılar",
        artist: "Unknown",
        album: "Çukur müzik",
        artwork: "https://m.media-amazon.com/images/M/MV5BOWQ5MzgzMGUtMGE3Ny00ZTkxLWFiZjMtMzk4ZmUwZDE2ZDM3XkEyXkFqcGdeQXVyOTQ1Mzg0Mzg@._V1_.jpg",
        url: require("./assets/audio/Three.mp3")
    },
]