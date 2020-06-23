import secretStashImage from '../../images/compressed/portfolio/secret-stash.webp';
import quizProjectImage from '../../images/compressed/portfolio/quiz-project.webp';
import budgetSmartImage from '../../images/compressed/portfolio/react-budgetsmart.webp';
import githubFinderImage from '../../images/compressed/portfolio/github-finder.webp';
import keeperAppImage from '../../images/compressed/portfolio/react-keeperapp.webp';

const portfolioCompletedData = [
  {
    id: 1,
    title: 'Secret Stash',
    image: secretStashImage,
    link: 'https://secret-stash.herokuapp.com',
    alt: 'Secret Stash home page',
    desc: 'A full stack application to share user secrets anonymously.',
    sourceURL: 'https://github.com/Andrew2432/secret-stash-node-materialize',
  },

  {
    id: 2,
    title: 'Quiz Project',
    image: quizProjectImage,
    link: 'https://quizproject.netlify.app',
    alt: 'Quiz Project home page',
    desc:
      'A quiz project developed using ES6 JavaScript, Ajax and OpenTriviaDB API.',
    sourceURL: 'https://github.com/Andrew2432/Quiz-API-Project',
  },
  {
    id: 3,
    title: 'Budget Smart',
    image: budgetSmartImage,
    link: 'https://react-budgetsmart.netlify.app/',
    alt: 'Budget Smart home page',
    desc: 'A React app to track your expenses, in a smart way.',
    sourceURL: 'https://github.com/Andrew2432/react-budgetsmart',
  },
  {
    id: 4,
    title: 'GitHub Finder',
    image: githubFinderImage,
    link: 'https://github-find-profiles.netlify.app/',
    alt: 'Github Finder project',
    desc: 'A React application to fetch and display GitHub profiles',
    sourceURL: 'https://github.com/Andrew2432/github-finder',
  },
  {
    id: 5,
    title: 'KeeperApp',
    image: keeperAppImage,
    link: 'https://react-keeperapp.netlify.app/',
    alt: 'KeeperApp project',
    desc: 'A React application to implement Google keep like notes',
    sourceURL: 'https://github.com/Andrew2432/react-keeperapp',
  },
];

export default portfolioCompletedData;
