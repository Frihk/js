const neuron = (arg) => {
    const newobj = {};

  for (let line of arg) {
    const [labelPart, responsePart] = line.split(' - Response: ');
    const colonIndex = labelPart.indexOf(':');
    const label = labelPart.slice(0, colonIndex).trim().toLowerCase();
    const content = labelPart.slice(colonIndex + 1).trim();
    const response = responsePart.trim();
    newobj[label] = newobj[label] || {};
    const Key = content
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');
    const typeKey = label === 'questions' ? 'question'
      : label === 'orders' ? 'order'
      : label.endsWith('s') ? label.slice(0, -1)
      : label;
    newobj[label][Key] = newobj[label][Key] || { [typeKey]: content, responses: [] };
    newobj[label][Key].responses.push(response);
  }
  return newobj
}
