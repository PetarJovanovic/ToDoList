import { render, screen } from '@testing-library/react';
import App from './App';

describe('render tests', () => {
  test('renders header', () => {
    render(<App />);
    const header = screen.getByText('Todo List');
    expect(header).toBeInTheDocument();
  });
  test('render add button', () => {
    render(<App />);
    const addButton = screen.getByText('Add Todo');
    expect(addButton).toBeInTheDocument();
  });
});