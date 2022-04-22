import { render, screen } from '@testing-library/react';
import TargetBox from '../components/TargetBox';

test('renders a box', () => {
    render ( <TargetBox /> )
    const elementText = screen.getByText(/hello world/i)
    expect(elementText).toBeInTheDocument();
})