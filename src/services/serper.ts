
export interface AutocompleteResult {
  q: string;
  gl: string;
}

export interface SerperResponse {
  suggestions: { value: string }[];
}

const API_KEY = import.meta.env.VITE_SERPER_API_KEY;

export const searchAutocomplete = async (query: string): Promise<string[]> => {
  if (!query || !API_KEY) return [];

  try {
    const response = await fetch('https://google.serper.dev/autocomplete', {
      method: 'POST',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: query,
        gl: 'ma' // Defaulting to Morocco as per user context
      })
    });

    if (!response.ok) {
        console.warn(`Serper API error: ${response.statusText}`);
        return [];
    }

    const data: SerperResponse = await response.json();
    return data.suggestions.map(s => s.value);
  } catch (error) {
    console.error("Serper Autocomplete Error:", error);
    return [];
  }
};
