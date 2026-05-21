const pronoun = (arg) => {
  const pronouns = new Set(['i', 'you', 'he', 'she', 'it', 'they', 'we']);
  const words = arg.toLowerCase().match(/[a-z]+/g) || [];
  const newob = {};

  for (let i = 0; i < words.length; i++) {
    const Key = words[i];
    if (!pronouns.has(Key)) continue;

    // Streamlined initialization using logical OR
    newob[Key] = newob[Key] || { word: [], count: 0 };
    newob[Key].count++;

    const next = words[i + 1];
    if (next && !pronouns.has(next)) {
      newob[Key].word.push(next);
    }
  }

  return newob;
}