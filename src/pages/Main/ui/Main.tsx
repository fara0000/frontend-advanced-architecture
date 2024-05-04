import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Counter } from 'entities/Counter';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('MAIN_PAGE')}
            {/* <Counter /> */}
        </div>
    );
};

export default Main;
