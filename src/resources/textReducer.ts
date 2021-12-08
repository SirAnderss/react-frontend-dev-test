export default function textReducer(str: string, length: number): string {
  return str.length > length
    ? `${str.slice(0, length).slice(0, -1).trim()}...`
    : str;
}
