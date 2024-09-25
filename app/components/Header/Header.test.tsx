import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BellIcon } from '../Icons/BellIcon';
import HamburguerMenuIcon from '../Icons/HamburgerMenuIcon';
import { HearIcon } from '../Icons/HearIcon';
import { NacionIconLogo } from '../Icons/NacionIconLogo';
import { SearchInput } from '../Icons/SearchInput';
import { SmileIcon } from '../Icons/SmileIcon';

jest.mock('../Icons/BellIcon', () => ({
  BellIcon: jest.fn(() => <div data-testid="bell-icon" />),
}));
jest.mock('../Icons/HamburgerMenuIcon', () => ({
  HamburguerMenuIcon: jest.fn(() => <div data-testid="hamburger-menu-icon" />),
}));
jest.mock('../Icons/HearIcon', () => ({
  HearIcon: jest.fn(() => <div data-testid="hear-icon" />),
}));
jest.mock('../Icons/NacionIconLogo', () => ({
  NacionIconLogo: jest.fn(() => <div data-testid="nacion-icon-logo" />),
}));
jest.mock('../Icons/SearchInput', () => ({
  SearchInput: jest.fn(() => <div data-testid="search-input" />),
}));
jest.mock('../Icons/SmileIcon', () => ({
  SmileIcon: jest.fn(() => <div data-testid="smile-icon" />),
}));

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('hamburger-menu-icon')).toBeInTheDocument();
    expect(screen.getByTestId('hear-icon')).toBeInTheDocument();
    expect(screen.getByTestId('nacion-icon-logo')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('smile-icon')).toBeInTheDocument();
  });

  test('renders all icons correctly', () => {
    render(<Header />);
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('hamburger-menu-icon')).toBeInTheDocument();
    expect(screen.getByTestId('hear-icon')).toBeInTheDocument();
    expect(screen.getByTestId('nacion-icon-logo')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('smile-icon')).toBeInTheDocument();
  });

  test('has correct class names', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass(
      'absolute top-0 left-0 w-full flex justify-between items-center text-white py-8 px-10 md:px-20 bg-black bg-opacity-70 drop-shadow-md z-10'
    );
  });
});