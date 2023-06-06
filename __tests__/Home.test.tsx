import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';

describe('Home', () => {
  it('Home', () => {
    render(<Home />);

    const profile = screen.getByLabelText('profile');
    expect(profile).toBeInTheDocument();

    const idols = screen.getByLabelText('idols');
    expect(idols).toBeInTheDocument();

    const cameras = screen.getByLabelText('cameras');
    expect(cameras).toBeInTheDocument();

    const minihome = screen.getByLabelText('minihome');
    expect(minihome).toBeInTheDocument();

    const pentax = screen.getByLabelText('pentax');
    expect(pentax).toBeInTheDocument();

    const mycar = screen.getByLabelText('mycar');
    expect(mycar).toBeInTheDocument();
  });
});
