export function shortenParagraph(text: string, limit: number) {
  if (text.length < limit) return text;
  return text.slice(0, limit).trim().concat('...');
}

export function shortenTitle(title: string, limit = 20) {
  if (title.length <= 20) return title;
  return title.slice(0, limit).trim().concat('.');
}
