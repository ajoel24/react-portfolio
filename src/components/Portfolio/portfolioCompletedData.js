import quizProjectImage from '../../images/compressed/portfolio/quiz-project.webp';
import budgetSmartImage from '../../images/compressed/portfolio/budget-smart.webp';
import nodeBlogImage from '../../images/compressed/portfolio/node-blog.webp';
import emojiPediaImage from '../../images/compressed/portfolio/emoji-pedia.webp';

const portfolioCompletedData = [
  {
    id: 1,
    title: 'Quiz Project',
    image: quizProjectImage,
    link: 'https://quizproject.netlify.app',
    alt: 'Quiz Project home page',
    desc:
      'A quiz project developed using ES6 JavaScript, Ajax and OpenTriviaDB API.',
    sourceURL: 'https://github.com/Andrew2432/Quiz-API-Project',
  },
  {
    id: 2,
    title: 'Budget Smart',
    image: budgetSmartImage,
    link: 'https://budgetsmart.netlify.app/',
    alt: 'Budget Smart home page',
    desc: 'An expense tracker project developed using ES6 JavaScript',
    sourceURL: 'https://github.com/Andrew2432/BudgetSmart',
  },
  {
    id: 3,
    title: 'Mini Blog',
    image: nodeBlogImage,
    link: 'https://github.com/Andrew2432/NodeBlog',
    alt: 'Mini Blog project',
    desc: 'A blog application developed using Node.js and EJS.',
    sourceURL: 'https://github.com/Andrew2432/NodeBlog',
  },
  {
    id: 4,
    title: 'Emojipedia',
    image: emojiPediaImage,
    link: 'https://emojireactapp.netlify.app/',
    alt: 'EmojiPedia project',
    desc: 'My first React application to denote the meaning of emojis',
    sourceURL: 'https://github.com/Andrew2432/emojipedia',
  },
];

export default portfolioCompletedData;
