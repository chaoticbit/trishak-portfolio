import location from './assets/icons8-marker-50.png';
import linkedin from './assets/icons8-linkedin-50.png';
import blogger from './assets/icons8-blogger-50.png';
import email from './assets/icons8-new-post-50.png';
import avatar from './assets/avatar.jpg';
import phoenix_and_the_glass from './assets/phoenix_and_the_glass.jpg'; 
import inner_conflict from './assets/inner_conflict.png';
import art_that_infuritates from './assets/art_that_infuritates.jpg';
import home_is_where from './assets/home_is_where.jpg';
import influence_of_Indias_Daughter from './assets/influence_of_Indias_Daughter.jpg';


export const info = {
    name: 'Trishala Kadam',
    aboutMe: 'Trishala is a film and technology zealot, with four years of international experience in media management and film distribution. Her expertise lies in implementing service improvements to enhance consumer engagement and experience. She strongly believes that innovation and creativity are vital for success and therefore learning-unlearning-relearning is the mantra to strongly follow.',
    avatar: avatar,
    nav: [
        { text: '37200 Paseo Padre Pkwy, Fremont. CA - 94536', img: location },
        { text: 'http://trishalak.blogspot.com', link: 'http://trishalak.blogspot.com', img: blogger },
        { text: 'LinkedIn', link: 'https://www.linkedin.com/in/trishalak/', img: linkedin },
        { text: 'kadamtrishala@gmail.com', link: 'mailto:kadamtrishala@gmail.com', img: email }
    ]
}

export const personalIntroduction = {
    category: 'Personal Introduction',
    title: 'Title',
    meta: 'post meta',
    video: {
        title: 'Creatively speaking',
        link: 'https://www.youtube.com/embed/sZ6TZGf50bI',        
        description: 'Justo amet erat vero justo clita at stet ut sit aliquyam, vero diam rebum diam labore est lorem et, kasd.Justo amet erat vero justo clita at stet ut sit aliquyam, vero diam rebum diam labore est lorem et, kasd.'
    }
}

const teachForIndiaDescription = ['Trishala joined a local public school in Pune as a volunteer teacher in 2015. Here, her aim was to join the low-income community, that was culturally, economically, and socially different, but full of opportunities to transform the students into leaders of tomorrow.',
    'Trishala\'s clear vision for lessons, robust plans through every semester showed exceptional results in the students\' growth. This could be achieved by making connections with the students, research and homework before classes and a strong interpersonal skillset.',
    'Students not only discussed courses but interests, goals, dreams and explored a plethora of opportunities through book readings, "Movie Mondays", Football and Cricket matches, dance classes, etc.'];

const algorhythmDescription = [
    'Upon graduation from Maharashtra Institute of Technology, Pune as a Bachelor in Science, Trishala began her career at Algorhythm Tech Pvt Ltd.',
    'Here, she was responsible for product research and development alongside the Chief Technology Officer.',
    'As in a start-up, she embraces various roles to accomplish the goal; A search engine application for Women and Child Development department of Maharashtra. The research revolved around search engines, their evolution, and user experience which was used as guidelines to create a blueprint for the search engine.',
    'Since the data was pulled from multiple governmental departments in large amounts and was being used by clerks, doctors, and police, it was imperative to make the search engine flexible, simple yet effective.'
];

export const experienceInIndia = {
    category: 'Experiences in INDIA',
    exp: [
        {
            title: 'Teach for india',
            meta: '2015',
            description: teachForIndiaDescription
        },
        {
            title: 'Algorhythm',
            meta: '2014',
            description: algorhythmDescription
        }
    ]    
}

export const youtube = {
    category: 'YouTube content',
    videos: [
        {
            title: 'Creatively Speaking, Film Series',
            meta: 'New York, 2017 · Curated and Edited by Trishala Kadam for Creatively Speaking',
            description: 'Magna eos duo accusam diam et ipsum sed consetetur. Tempor et elitr amet stet, sea dolores ipsum lorem erat. No vero sea erat dolore sadipscing.',
            url: 'https://www.youtube.com/embed/sZ6TZGf50bI',            
        },
        {
            title: 'Words of Change: Dr Martin Luther King Jr.',
            meta: 'New York, 2017 · Edited by Trishala Kadam for Creatively Speaking and The New School.',
            description: 'Magna eos duo accusam diam et ipsum sed consetetur. Tempor et elitr amet stet, sea dolores ipsum lorem erat. No vero sea erat dolore sadipscing.',
            url: 'https://www.youtube.com/embed/GMkYfbune1E',            
        }
    ]
}

export const blogs = {
    category: 'Blogs',
    content: [
        {            
            title: 'The Phoenix and glass ceiling',
            url: 'https://trishalak.blogspot.com/2018/05/the-phoenix-and-glass-ceiling.html',
            image: phoenix_and_the_glass
        },
        {
            title: 'The external internal conflict',
            url: 'https://trishalak.blogspot.com/2017/09/the-eternal-internal-conflict.html',
            image: inner_conflict
        },
        {
            title: 'Home is where I left my heart',
            url: 'https://trishalak.blogspot.com/2017/04/home-is-where-i-left-my-heart.html',
            image: home_is_where
        },
        {
            title: 'Art that infuriates',
            url: 'https://trishalak.blogspot.com/2017/04/art-that-infuriates.html',
            image: art_that_infuritates
        },
    ]
}

export const publication = {
    image: influence_of_Indias_Daughter,
    url: 'https://www.google.com/url?q=http://smscommons.newschool.edu/news/2017/06/15/student-work-highlight-the-impact-of-indias-daughter-on-indian-sons/&sa=D&source=hangouts&ust=1593832681175000&usg=AFQjCNHG0a17FHYCRUKge4BDeMpm5vtbzw',
    title: 'The Impact of India\'s Daughter on Indian sons',
    meta: 'Published on Jun 19, 2017',
    description: 'This project was developed in the Media Management track classes, Audience Research (NMDS 5017), with Part-time Assistant Professor Lahuna Ganguly and and in and Media Ethics (NMDM 5312) with Charles Warner. In this class MS student Trishala Kadam investigated the following male views on sexual assault in India.'
}