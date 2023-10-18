/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal.js'
import { Timestamp } from '../../../../../google/protobuf/timestamp.pb.js'

export const protobufPackage = 'other'

export interface OtherMessage {
  /** Timestamp is an example of a Date encoding. */
  timestamp: Date | undefined
}

function createBaseOtherMessage(): OtherMessage {
  return { timestamp: undefined }
}

export const OtherMessage = {
  encode(
    message: OtherMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork(),
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OtherMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseOtherMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  // encodeTransform encodes a source of message objects.
  // Transform<OtherMessage, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<OtherMessage | OtherMessage[]>
      | Iterable<OtherMessage | OtherMessage[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (globalThis.Array.isArray(pkt)) {
        for (const p of pkt as any) {
          yield* [OtherMessage.encode(p).finish()]
        }
      } else {
        yield* [OtherMessage.encode(pkt as any).finish()]
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, OtherMessage>
  async *decodeTransform(
    source:
      | AsyncIterable<Uint8Array | Uint8Array[]>
      | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<OtherMessage> {
    for await (const pkt of source) {
      if (globalThis.Array.isArray(pkt)) {
        for (const p of pkt as any) {
          yield* [OtherMessage.decode(p)]
        }
      } else {
        yield* [OtherMessage.decode(pkt as any)]
      }
    }
  },

  fromJSON(object: any): OtherMessage {
    return {
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    }
  },

  toJSON(message: OtherMessage): unknown {
    const obj: any = {}
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString()
    }
    return obj
  },

  create<I extends Exact<DeepPartial<OtherMessage>, I>>(
    base?: I,
  ): OtherMessage {
    return OtherMessage.fromPartial(base ?? ({} as any))
  },
  fromPartial<I extends Exact<DeepPartial<OtherMessage>, I>>(
    object: I,
  ): OtherMessage {
    const message = createBaseOtherMessage()
    message.timestamp = object.timestamp ?? undefined
    return message
  },
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
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000)
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000
  millis += (t.nanos || 0) / 1_000_000
  return new globalThis.Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o
  } else if (typeof o === 'string') {
    return new globalThis.Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number)
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
