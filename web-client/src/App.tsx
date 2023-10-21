import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import MainLayout from 'components/MainLayout';
import AppRoutes from 'routes/index';
import {IntlProvider} from 'react-intl';
import messages from 'intl/index';
import settings from 'store/settings';

const App = observer(() => {
const {language} = settings;
const localeMessage: Record<string, string> = messages[language as keyof typeof messages];

  return (
    <BrowserRouter>
    <IntlProvider messages={localeMessage} locale={language} defaultLocale="ua">
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      </IntlProvider>
    </BrowserRouter>
  );
});
export default App;