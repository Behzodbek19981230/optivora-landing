export type AiResponseType<T>={
    
  "pagination": {
    "currentPage": number
    "lastPage": number
    "perPage": number
    "total": number
  },
  "results": T[],
  "filters": null
}