import { Home, Article, Info } from '@mui/icons-material';

export const appRoutesMap = [
  {
    name: 'Центри переливання крові',
    to: '/',
    icon: <Home style={{ width: '24px', height: '24px' }} />
  },
  {
    name: 'Новини',
    to: '/news',
    icon: <Article style={{ width: '24px', height: '24px' }} />
  },
  {
    name: 'Додаткова інформація',
    to: '/information',
    icon: <Info style={{ width: '24px', height: '24px' }} />
  }
];