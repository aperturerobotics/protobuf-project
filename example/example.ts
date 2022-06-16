/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { Observable } from 'rxjs'
import { OtherMessage } from './other/other'
import { map } from 'rxjs/operators'

export const protobufPackage = 'example'

/** EchoMsg is the message body for Echo. */
export interface EchoMsg {
  /** Body is the body of the message. */
  body: string
  /** OtherMessage is an example of a protobuf imported type. */
  otherMessage: OtherMessage | undefined
}

function createBaseEchoMsg(): EchoMsg {
  return { body: '', otherMessage: undefined }
}

export const EchoMsg = {
  encode(
    message: EchoMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.body !== '') {
      writer.uint32(10).string(message.body)
    }
    if (message.otherMessage !== undefined) {
      OtherMessage.encode(
        message.otherMessage,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseEchoMsg()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string()
          break
        case 2:
          message.otherMessage = OtherMessage.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EchoMsg {
    return {
      body: isSet(object.body) ? String(object.body) : '',
      otherMessage: isSet(object.otherMessage)
        ? OtherMessage.fromJSON(object.otherMessage)
        : undefined,
    }
  },

  toJSON(message: EchoMsg): unknown {
    const obj: any = {}
    message.body !== undefined && (obj.body = message.body)
    message.otherMessage !== undefined &&
      (obj.otherMessage = message.otherMessage
        ? OtherMessage.toJSON(message.otherMessage)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<EchoMsg>, I>>(object: I): EchoMsg {
    const message = createBaseEchoMsg()
    message.body = object.body ?? ''
    message.otherMessage =
      object.otherMessage !== undefined && object.otherMessage !== null
        ? OtherMessage.fromPartial(object.otherMessage)
        : undefined
    return message
  },
}

/** Echoer service returns the given message. */
export interface Echoer {
  /** Echo returns the given message. */
  Echo(request: EchoMsg): Promise<EchoMsg>
  /** EchoServerStream is an example of a server -> client one-way stream. */
  EchoServerStream(request: EchoMsg): Observable<EchoMsg>
  /** EchoClientStream is an example of client->server one-way stream. */
  EchoClientStream(request: Observable<EchoMsg>): Promise<EchoMsg>
  /** EchoBidiStream is an example of a two-way stream. */
  EchoBidiStream(request: Observable<EchoMsg>): Observable<EchoMsg>
}

export class EchoerClientImpl implements Echoer {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Echo = this.Echo.bind(this)
    this.EchoServerStream = this.EchoServerStream.bind(this)
    this.EchoClientStream = this.EchoClientStream.bind(this)
    this.EchoBidiStream = this.EchoBidiStream.bind(this)
  }
  Echo(request: EchoMsg): Promise<EchoMsg> {
    const data = EchoMsg.encode(request).finish()
    const promise = this.rpc.request('example.Echoer', 'Echo', data)
    return promise.then((data) => EchoMsg.decode(new _m0.Reader(data)))
  }

  EchoServerStream(request: EchoMsg): Observable<EchoMsg> {
    const data = EchoMsg.encode(request).finish()
    const result = this.rpc.serverStreamingRequest(
      'example.Echoer',
      'EchoServerStream',
      data
    )
    return result.pipe(map((data) => EchoMsg.decode(new _m0.Reader(data))))
  }

  EchoClientStream(request: Observable<EchoMsg>): Promise<EchoMsg> {
    const data = request.pipe(
      map((request) => EchoMsg.encode(request).finish())
    )
    const promise = this.rpc.clientStreamingRequest(
      'example.Echoer',
      'EchoClientStream',
      data
    )
    return promise.then((data) => EchoMsg.decode(new _m0.Reader(data)))
  }

  EchoBidiStream(request: Observable<EchoMsg>): Observable<EchoMsg> {
    const data = request.pipe(
      map((request) => EchoMsg.encode(request).finish())
    )
    const result = this.rpc.bidirectionalStreamingRequest(
      'example.Echoer',
      'EchoBidiStream',
      data
    )
    return result.pipe(map((data) => EchoMsg.decode(new _m0.Reader(data))))
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case']
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
