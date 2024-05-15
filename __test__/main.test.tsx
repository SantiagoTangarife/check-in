import React from 'react';
import Enzyme, { shallow } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-18';
import Main from '../components/Main';

describe('Main Component', () => {
  it('renders Main component correctly', () => {
    const wrapper = shallow(<Main />);
    
    // Verifica que el componente se renderice correctamente
    expect(wrapper.exists()).toBe(true);
  });

  it('shows Check-In text', () => {
    const wrapper = shallow(<Main />);
    const checkInText = wrapper.find('h1');

    // Verifica que el componente tenga un elemento <h1> con el texto 'Check-In'
    expect(checkInText.text()).toBe('Check-In');
  });

  it('has required input fields', () => {
    const wrapper = shallow(<Main />);
    const reservationInput = wrapper.find('input[name="reservation"]');
    const lastNameInput = wrapper.find('input[name="lastName"]');

    // Verifica que los campos de entrada sean obligatorios
    expect(reservationInput.prop('required')).toBe(true);
    expect(lastNameInput.prop('required')).toBe(true);
  });

  it('handles Start Check-In button click', () => {
    const wrapper = shallow(<Main />);
    const startCheckInButton = wrapper.find('button');

    // Simula un clic en el botón de inicio de check-in
    startCheckInButton.simulate('click');

    // Verifica que la función handleStartCheckIn se haya llamado
    // Puedes extender esta prueba según las acciones que desees verificar al hacer clic en el botón
    expect(wrapper.state('showDataContact')).toBe(true); // Verifica que showDataContact sea true después del clic
  });
});
