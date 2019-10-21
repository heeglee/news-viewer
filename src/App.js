import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback(c => setCategory(c), []);

    return <Route path="/:category?" component={NewsPage} />;
};

export default App;