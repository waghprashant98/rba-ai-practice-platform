export type PracticeComponent = {
  id: string
  name: string
  area: 'mathematics' | 'literacy_language'
}
export type ComponentsResponse = { components: PracticeComponent[] }
