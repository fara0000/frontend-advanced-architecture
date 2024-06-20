import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div style={{ color: 'red' }}>
            {t('MAIN_PAGE')}
            {/* <Counter /> */}
            {/* <Input */}
            {/*     value={value} */}
            {/*     placeholder="введите текст" */}
            {/*     onChange={onChange} */}
            {/* /> */}
        </div>
    );
};

export default MainPage;
