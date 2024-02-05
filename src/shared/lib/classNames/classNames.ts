type Mods = Record<string, boolean | string>

/**
 * Функция для удобной работы и манипуляции нескоьких классов
 *
 * @param cls - главный класс
 * @param mods - обьект с нодами которые нужно преобразовать в класс
 * @param additional - массив дополнительных классов
 *
 * Возвращает строку со всеми нужными классами
 * @returns string
 */

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        // для фильтрации
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
};


// Пример вызова текущего метода
// classNames('btn', { hovered: true, selectable: true, green: false}, ['withPadding, withDefaultBorderColor'])
// при вызове с текущеми параметрами должны получить  ->  'btn hovered selectable withPadding withDefaultBorderColor'
