import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from "@/components/Main";

describe('Main', () => {
  it('renders correctly', () => {
    render(<Main />);
    expect(screen.getByText('Para iniciar el proceso, ingrese su código de reserva y apellido(s).')).toBeInTheDocument();
  });

  it('renders a reservation input', () => {
    render(<Main />);
    const reservationInput = screen.getByPlaceholderText('Código de reserva');
    expect(reservationInput).toBeInTheDocument();
  });

  it('renders a last name input', () => {
    render(<Main />);
    const lastNameInput = screen.getByPlaceholderText('Apellido(s)');
    expect(lastNameInput).toBeInTheDocument();
  });

  it('handles reservation input value change', () => {
    render(<Main />);
    const reservationInput = screen.getByPlaceholderText('Código de reserva');
    fireEvent.change(reservationInput, { target: { value: '123456' } });
    expect(reservationInput.value).toBe('123456');
  });

  it('handles last name input value change', () => {
    render(<Main />);
    const lastNameInput = screen.getByPlaceholderText('Apellido(s)');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
  });

  it('renders a submit button', () => {
    render(<Main />);
    const submitButton = screen.getByRole('button', { name: /EMPEZAR CHECK-IN/i });    expect(submitButton).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<Main />);
    const reservationInput = screen.getByPlaceholderText('Código de reserva');
    const lastNameInput = screen.getByPlaceholderText('Apellido(s)');
    const submitButton = screen.getByRole('button', { name: /EMPEZAR CHECK-IN/i });    expect(submitButton).toBeInTheDocument();

    fireEvent.change(reservationInput, { target: { value: '123456' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.click(submitButton);
  });

});