import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DataContact from '@/components/DataContact';

describe('DataContact', () => {
    it('renders correctly', () => {
        render(<DataContact />);
        expect(screen.getByText('Información de contacto')).toBeInTheDocument();
        expect(screen.getByText('Contacto de emergencia')).toBeInTheDocument();
        expect(screen.getByText('Preexistencia médica')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Dirección de envio de maletas')).toBeInTheDocument();
    });

    it('handles name input value change', () => {
        render(<DataContact />);
        const nameInput = screen.getByPlaceholderText('Nombre Completo') as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        expect(nameInput.value).toBe('John Doe');
    });

    it('handles phone number input value change', () => {
        render(<DataContact />);
        const phoneInput = screen.getByPlaceholderText('+00 000 000 000') as HTMLInputElement;
        fireEvent.change(phoneInput, { target: { value: '1234567890' } });
        expect(phoneInput.value).toBe('1234567890');
    });

    it('handles medical preexistence select change', () => {
        render(<DataContact />);
        const preexistenceSelect = screen.getByTestId('preexistencia') as HTMLSelectElement;
        fireEvent.change(preexistenceSelect, { target: { value: 'si' } });
        expect(preexistenceSelect.value).toBe('si');
    });

    it('handles illness input value change when preexistence is "si"', () => {
        render(<DataContact />);
        const preexistenceSelect = screen.getByTestId('preexistencia') as HTMLSelectElement;
        fireEvent.change(preexistenceSelect, { target: { value: 'si' } });
        const illnessInput = screen.getByPlaceholderText('Indicar enfermedad') as HTMLInputElement;
        fireEvent.change(illnessInput, { target: { value: 'Asthma' } });
        expect(illnessInput.value).toBe('Asthma');
    });

    it('handles address input value change', () => {
        render(<DataContact />);
        const addressInput = screen.getByPlaceholderText('Dirección de envio de maletas') as HTMLInputElement;
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });
        expect(addressInput.value).toBe('123 Main St');
    });

    it('renders Cancel and Save buttons', () => {
        render(<DataContact />);
        expect(screen.getByText('Cancelar')).toBeInTheDocument();
        expect(screen.getByText('Guardar')).toBeInTheDocument();
    });
});