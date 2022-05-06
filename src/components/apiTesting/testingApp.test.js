import { render, screen } from '@testing-library/react';
import TestingApp from './testingApp';

describe('API component', () => {
  test('renders posts once requested', async () => {
    render(<TestingApp />);

    const listItemElements = await screen.findAllByRole('list');
    expect(listItemElements).not.toHaveLength(0);
  });

  test('renders posts once requested Validated using mocks', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', name: 'First' }]
    });

    render(<TestingApp />);

    const listItemElements = await screen.findAllByRole('list');
    expect(listItemElements).not.toHaveLength(0);
  });
});
