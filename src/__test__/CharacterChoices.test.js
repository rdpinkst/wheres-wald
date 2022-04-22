import { render, screen } from '@testing-library/react';
import CharacterChoices from '../components/CharacterChoices';

test('button has waldo text value', () => {
    render (<CharacterChoices />)
    const buttonText = screen.getByText(/waldo/i);
    expect(buttonText).toBeInTheDocument();
})
test('button has wizard text value', () => {
    render (<CharacterChoices />)
    const buttonText = screen.getByText(/wizard/i);
    expect(buttonText).toBeInTheDocument();
})
test('button has odlaw text value', () => {
    render (<CharacterChoices />)
    const buttonText = screen.getByText(/odlaw/i);
    expect(buttonText).toBeInTheDocument();
})