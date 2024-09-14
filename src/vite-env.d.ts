/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OMDB_API_KEY: string
  readonly VITE_OMDB_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
