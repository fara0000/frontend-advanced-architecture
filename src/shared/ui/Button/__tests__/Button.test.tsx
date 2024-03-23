import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button component: ', () => {
    test('render component correctly', () => {
        const testText = 'Test';
        // eslint-disable-next-line i18next/no-literal-string
        const component = <Button>{testText}</Button>;
        render(component);

        expect(screen.getByText(testText)).toBeDefined();
    });

    test('render component correctly', () => {
        const testText = 'Test';
        // eslint-disable-next-line i18next/no-literal-string
        const component = <Button theme={ButtonTheme.CLEAR}>{testText}</Button>;
        render(component);

        expect(screen.getByText(testText)).toHaveClass('clear');
    });
});
