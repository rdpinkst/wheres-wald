import { render, screen } from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';

test('renders wheres waldo', () => {
    render(<NavigationBar />)
    const titleElement = screen.getByText(/where's waldo/i);
    expect(titleElement).toBeInTheDocument();
})