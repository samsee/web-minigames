import { render, screen } from '@testing-library/react';
import { LuckyDraw, runDraw } from './LuckyDraw';

test('renders learn react link', () => {
    const result = runDraw(5, 3);
    console.log(result);
    expect(result).toHaveLength(3);
});
