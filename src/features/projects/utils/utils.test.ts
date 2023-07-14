import { shortenParagraph, shortenTitle } from './text-format';

describe('shortenParagraph', () => {
  it('returns the original text when it is shorter than the limit', () => {
    const text = 'This is a short paragraph.';
    const limit = 30;
    const result = shortenParagraph(text, limit);
    expect(result).toBe(text);
  });

  it('shortens the text and adds ellipsis when it exceeds the limit', () => {
    const text = 'This is a longer paragraph that needs to be shortened.';
    const limit = 20;
    const expected = 'This is a longer par...';
    const result = shortenParagraph(text, limit);
    expect(result).toBe(expected);
  });
});

describe('shortenTitle', () => {
  it('returns the original title when it is shorter than or equal to the limit', () => {
    const title = 'Short Title';
    const limit = 10;
    const result = shortenTitle(title, limit);
    expect(result).toBe(title);
  });

  it('shortens the title and adds a period when it exceeds the limit', () => {
    const title = 'This is a longer title that needs to be shortened';
    const limit = 21;
    const expected = 'This is a longer titl.';
    const result = shortenTitle(title, limit);
    expect(result).toBe(expected);
  });
});
