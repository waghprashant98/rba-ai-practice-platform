import type { ComponentsResponse } from '../types'
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000'
export async function getComponents(): Promise<ComponentsResponse> {
  const response = await fetch(`${API_BASE}/api/components`)
  if (!response.ok) throw new Error('Could not load practice components')
  return response.json() as Promise<ComponentsResponse>
}
