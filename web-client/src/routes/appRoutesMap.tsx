import { Home, Article, Info } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';

export const appRoutesMap = [
  {
    name: <FormattedMessage id="bloodCenters"/>,
    to: '/',
    icon: <Home style={{ width: '24px', height: '24px' }} />
  },
  {
    name: <FormattedMessage id="news"/>,
    to: '/news',
    icon: <Article style={{ width: '24px', height: '24px' }} />
  },
  {
    name: <FormattedMessage id="faq"/>,
    to: '/information',
    icon: <Info style={{ width: '24px', height: '24px' }} />
  }
];