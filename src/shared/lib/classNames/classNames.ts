export type Mods = Record<string, boolean | string | undefined>

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

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    cls,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
    // для фильтрации
    ...additional.filter(Boolean),
].join(' ');

// Пример вызова текущего метода
// classNames('btn', { hovered: true, selectable: true, green: false}, ['withPadding, withDefaultBorderColor'])
// при вызове с текущеми параметрами должны получить  ->  'btn withPadding withDefaultBorderColor hovered selectable '
