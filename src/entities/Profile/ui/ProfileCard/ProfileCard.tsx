import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Country } from 'entities/Country/model/types/country';
import { Avatar } from 'shared/ui';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={error}
                    theme={TextTheme.ERROR}
                    text={t('REFRESH_PAGE')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.header}>
                <Text title={t('PROFILE')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('EDIT')}
                </Button>
            </div>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('YOUR_NAME')}
                    onChange={onChangeFirstname}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('YOUR_SURNAME')}
                    onChange={onChangeLastname}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('YOUR_AGE')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('CITY')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('ENTER_YOUR_USERNAME')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('ENTER_AVATAR_LINK')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
