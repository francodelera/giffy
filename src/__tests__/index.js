import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('home work as expected', async () => {
    render(<App />);
    const title = await screen.findByText(/Última búsqueda/i);
    expect(title).toBeInTheDocument();
});

test('search form could be used', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');

    fireEvent.change(input, { target: { value: 'Matrix' } });
    fireEvent.click(button);

    const title = await screen.findByText("Resultados para: 'Matrix'");
    expect(title).toBeVisible();
})