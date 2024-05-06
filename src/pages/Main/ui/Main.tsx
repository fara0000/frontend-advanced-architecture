import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <div>
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

export default Main;
