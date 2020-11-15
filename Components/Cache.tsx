import { persistCache } from "apollo3-cache-persist"
import { AppLoading } from "expo"
import { useEffect, useState } from "react"
import { AsyncStorage } from "react-native"
import { cache } from "./ApolloLinks"




export const [loadingCache, setLoadingCache] = useState(true)
  
    useEffect(() => {
      persistCache({
        cache,
        storage: AsyncStorage,
      }).then(() => setLoadingCache(false))
    }, [])
  
/*
if (loadingCache) return (
  <AppLoading />
)
*/