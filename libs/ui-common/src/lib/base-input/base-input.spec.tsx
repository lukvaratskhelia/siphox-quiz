import { render } from '@testing-library/react';
import { BaseInput } from './base-input';

describe('BaseInput', () => {
  it('should render BaseInput correctly', () => {
    const { baseElement } = render(
      <BaseInput type="radio" className="root-test-123" />
    );
    expect(baseElement).toBeTruthy();
  });
});
