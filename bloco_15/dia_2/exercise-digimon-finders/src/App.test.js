import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';



describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Verify input and button', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    const button = getByTestId('buttonSearch');

    fireEvent.change(input, { target: { value: 'garurumon' } });
    fireEvent.click(button);
    expect(input).toHaveValue('garurumon');
  });

});