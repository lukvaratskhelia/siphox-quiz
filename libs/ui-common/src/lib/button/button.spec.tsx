import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render Button correctly', () => {
    const { baseElement } = render(<Button label="Next" type="submit" />);
    expect(baseElement).toBeTruthy();
  });
});
