import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        const actual = classNames('someClass', {}, ['additionalClass1', 'additionalClass2']);
        const expected = 'someClass additionalClass1 additionalClass2';

        expect(actual).toBe(expected);
    });
    test('with mods and additional classes', () => {
        const actual = classNames('someClass', { hovered: true, selectable: true }, ['additionalClass1', 'additionalClass2']);
        const expected = 'someClass hovered selectable additionalClass1 additionalClass2';

        expect(actual).toBe(expected);
    });
    test('with false mode and additional classes', () => {
        const actual = classNames('someClass', { hovered: true, selectable: false }, ['additionalClass1', 'additionalClass2']);
        const expected = 'someClass hovered additionalClass1 additionalClass2';

        expect(actual).toBe(expected);
    });
    test('with undefined mode and additional classes', () => {
        const actual = classNames('someClass', { hovered: true, selectable: undefined }, ['additionalClass1', 'additionalClass2']);
        const expected = 'someClass hovered additionalClass1 additionalClass2';

        expect(actual).toBe(expected);
    });
});
