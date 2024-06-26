export async function MorePrompts(journalEntry: string) {
  const url = "https://mood-hjvk7pksba-uc.a.run.app/suggest-continuation";
  const formData = new FormData();
  formData.append("entry", journalEntry);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}
