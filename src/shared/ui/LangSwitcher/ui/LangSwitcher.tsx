import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {useTranslation} from "react-i18next";

interface ThemeSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: ThemeSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('CHANGE_LANGUAGE')}
        </Button>
    );
};

