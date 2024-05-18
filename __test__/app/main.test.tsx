import {render, screen} from "@testing-library/react";
import Main from "@/components/Main";

it('renders a Main page', () => {
  render(<Main />);

  expect(screen.getByText('Para iniciar el proceso, ingrese su código de reserva y apellido(s).')).toBeInTheDocument()
});