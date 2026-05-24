const getJSON = async (path, params) => {
  const url = params ? `${path}?${new URLSearchParams(params)}` : path;
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  if (json.data) return json.data;
  if (json.error) throw new Error(json.error);
};
