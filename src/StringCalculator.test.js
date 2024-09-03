import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StringCalculator from './StringCalculator';

describe('StringCalculator Component', () => {
  test('renders StringCalculator component', () => {
    render(<StringCalculator />);
    expect(screen.getByText(/string calculator/i)).toBeInTheDocument();
  });

  test('calculates the sum of numbers correctly (empty string)', () => {
    render(<StringCalculator />);
    const inputElement = screen.getByPlaceholderText('Enter numbers separated by commas');
    fireEvent.change(inputElement, { target: { value: '' } });

    const buttonElement = screen.getByText('Calculate');
    fireEvent.click(buttonElement);

    expect(screen.getByText('Result: 0')).toBeInTheDocument();
  });

  test('calculates the sum of numbers correctly (single number)', () => {
    render(<StringCalculator />);
    const inputElement = screen.getByPlaceholderText('Enter numbers separated by commas');
    fireEvent.change(inputElement, { target: { value: '1' } });

    const buttonElement = screen.getByText('Calculate');
    fireEvent.click(buttonElement);

    expect(screen.getByText('Result: 1')).toBeInTheDocument();
  });

  test('calculates the sum of numbers correctly (two numbers)', () => {
    render(<StringCalculator />);
    const inputElement = screen.getByPlaceholderText('Enter numbers separated by commas');
    fireEvent.change(inputElement, { target: { value: '1,2' } });

    const buttonElement = screen.getByText('Calculate');
    fireEvent.click(buttonElement);

    expect(screen.getByText('Result: 3')).toBeInTheDocument();
  });
});
