const getPuzzle = async (wordCount) => {
  const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`;

  const response = await fetch(url, {});
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};

export { getPuzzle as default };
