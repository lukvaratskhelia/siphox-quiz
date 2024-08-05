import { sanitizeAnswer } from './sanitize-answer';

describe('function sanitizeAnswer', () => {
  it('should sanitize user input', () => {
    expect(sanitizeAnswer('   text   ')).toEqual('text');
    expect(sanitizeAnswer('   input')).toEqual('input');
    expect(sanitizeAnswer('input  ')).toEqual('input');
  });
});
