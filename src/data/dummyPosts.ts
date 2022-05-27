import { PostType } from '../interfaces/Post';
import image1 from '../assets/img/image-1.png';
import image2 from '../assets/img/image-2.png';
import image3 from '../assets/img/image-3.png';
import image4 from '../assets/img/image-4.png';
import image5 from '../assets/img/image-5.png';
import image6 from '../assets/img/image-6.jpeg';
import image7 from '../assets/img/image-7.jpeg';
import image8 from '../assets/img/image-8.jpeg';
import image9 from '../assets/img/image-9.jpeg';

import { IoLogoAngular, IoLogoNodejs, IoLogoIonic } from 'react-icons/io';
import { SiFirebase, SiReact } from 'react-icons/si';

const allPosts: PostType[] = [
    {
        id: '12',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image1,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
    {
        id: '33',
        title: 'Why do we use it?',
        coverPhoto: image2,
        content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). `,
        date: 'May 26th 2022'
    },
    {
        id: '98',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image3,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
    {
        id: '78',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image4,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
    {
        id: '45',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image7,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    }, {
        id: '67',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image6,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    }, {
        id: '80',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image9,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
    {
        id: '456',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image8,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
    {
        id: '387',
        title: 'What is Lorem Ipsum?',
        coverPhoto: image5,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        date: 'May 26th 2022'
    },
];

const categories = [
    {id: '23', name: "React", category: "react", icon: SiReact },
    {id: '11', name: "Angular", category: "angular", icon: IoLogoAngular },
    {id: '34', name: "Ionic", category: "ionic", icon: IoLogoIonic },
    {id: '89', name: "Node.js", category: "node", icon: IoLogoNodejs },
    {id: '09', name: "Firebase", category: "firebase", icon: SiFirebase },
];

export { allPosts, categories };