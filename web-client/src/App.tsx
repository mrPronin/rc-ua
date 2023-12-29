import { BrowserRouter } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import AppRoutes from 'routes/index';
import {IntlProvider} from 'react-intl';
import messages from 'intl/index';
import  {useSettingsStore}  from 'store/useSettings';

const App = () => {
const {language} = useSettingsStore();
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
};
export default App;