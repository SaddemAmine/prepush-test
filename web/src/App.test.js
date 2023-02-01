import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import App from './App'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('App', () => {
  it('should match the snapshot', async () => {
    const tree = renderer.create(<App />).toJSON()
    await waitFor(() => {
      expect(tree).toMatchSnapshot()
    })
  })
})
