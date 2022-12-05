import { useEffect, useState } from 'react'
import { WatchBlocksResponse, watchBlocks } from 'viem/actions'
import { NetworkClient } from 'viem/clients'

export function WatchBlocks({ client }: { client: NetworkClient }) {
  const [block, setBlock] = useState<WatchBlocksResponse>()
  useEffect(() => {
    const unwatch = watchBlocks(client, setBlock, { emitOnBegin: true })
    return unwatch
  }, [client])
  return <div>{block?.hash}</div>
}