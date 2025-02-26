import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({
    className,
    short,
}: ThemeSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {t(!short ? 'CHANGE_LANGUAGE' : 'LANGUAGE_SHORT')}
        </Button>
    );
});
