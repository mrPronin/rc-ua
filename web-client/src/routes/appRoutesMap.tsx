import { Home, Article, Info } from '@mui/icons-material';

export const appRoutesMap = [
  {
    name: 'Blood centers',
    to: '/',
    icon: <Home style={{ width: '24px', height: '24px' }} />
  },
  {
    name: 'News',
    to: '/news',
    icon: <Article style={{ width: '24px', height: '24px' }} />
  },
  {
    name: 'FAQ',
    to: '/information',
    icon: <Info style={{ width: '24px', height: '24px' }} />
  }
];