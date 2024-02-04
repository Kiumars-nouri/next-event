export const headerLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Create Event',
        route: '/events/create',
    },
    {
        label: 'My Profile',
        route: '/profile',
    },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}

export const HeroImages = [
    {
        name: "pub",
        url: "/assets/images/pub.webp",
    },
    {
        name: "concert",
        url: "/assets/images/concert.webp",
    },
    {
        name: "festival",
        url: "/assets/images/festival.webp",
    },
    {
        name: "pet",
        url: "/assets/images/pet.webp",
    },
    {
        name: "theatre",
        url: "/assets/images/theatre.webp",
    },
    {
        name: "game",
        url: "/assets/images/game.webp",
    },
]

export const SocialItems = [
    {
        name: "Instagram",
        img: "/assets/images/instagram.jpg",
        url: "https://www.instagram.com/",
    },
    {
        name: "Facfebook",
        img: "/assets/images/facebook.jpg",
        url: "https://www.facebook.com/",
    },
    {
        name: "Twitter",
        img: "/assets/images/twitter.jpg",
        url: "https://www.twitter.com/",
    },
    {
        name: "Youtube",
        img: "/assets/images/youtube.jpg",
        url: "https://www.youtube.com/",
    },
]