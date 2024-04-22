import { WebSocketConn, EchoerClient, EchoMsg, messagePushable } from 'starpc'
import WebSocket from '@aptre/it-ws/web-socket'

async function runRPC() {
  const addr = 'ws://localhost:5050/demo'
  console.log(`Connecting to ${addr}`)
  const ws = new WebSocket(addr)
  const channel = new WebSocketConn(ws, 'outbound')
  const client = channel.buildClient()
  const demoServiceClient = new EchoerClient(client)

  console.log('Calling Echo: unary call...')
  let result = await demoServiceClient.Echo({
    body: 'Hello world!',
  })
  console.log('success: output', result.body)

  // observable for client requests
  const clientRequestStream = messagePushable<EchoMsg>()
  clientRequestStream.push({ body: 'Hello world from streaming request.' })
  clientRequestStream.end()

  console.log('Calling EchoClientStream: client -> server...')
  result = await demoServiceClient.EchoClientStream(clientRequestStream)
  console.log('success: output', result.body)

  console.log('Calling EchoServerStream: server -> client...')
  const serverStream = demoServiceClient.EchoServerStream({
    body: 'Hello world from server to client streaming request.',
  })
  for await (const msg of serverStream) {
    console.log('server: output', msg.body)
  }
}

runRPC()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
