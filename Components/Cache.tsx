import { persistCache } from "apollo3-cache-persist"
import { useEffect, useState } from "react"
import { AsyncStorage } from "react-native"
import { cache } from "./ApolloLinks"




const [loadingCache, setLoadingCache] = useState(true)
  
    useEffect(() => {
      persistCache({
        cache,
        storage: AsyncStorage,
      }).then(() => setLoadingCache(false))
    }, [])
  
    if (loadingCache) {
      return <AppLoading />
    }
    