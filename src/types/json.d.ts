declare module '*.json' {
  const value: { [key: string]: string } | Record<string, any>
  export default value
}
