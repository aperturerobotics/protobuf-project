/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'
import { EchoMsg } from '../../vendor/github.com/aperturerobotics/starpc/echo/echo'

export const protobufPackage = 'other'

export interface OtherMessage {
  /** EchoMsg is the example echo message. */
  echoMsg: EchoMsg | undefined
}

function createBaseOtherMessage(): OtherMessage {
  return { echoMsg: undefined }
}

export const OtherMessage = {
  encode(
    message: OtherMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.echoMsg !== undefined) {
      EchoMsg.encode(message.echoMsg, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OtherMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseOtherMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.echoMsg = EchoMsg.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): OtherMessage {
    return {
      echoMsg: isSet(object.echoMsg)
        ? EchoMsg.fromJSON(object.echoMsg)
        : undefined,
    }
  },

  toJSON(message: OtherMessage): unknown {
    const obj: any = {}
    message.echoMsg !== undefined &&
      (obj.echoMsg = message.echoMsg
        ? EchoMsg.toJSON(message.echoMsg)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<OtherMessage>, I>>(
    object: I
  ): OtherMessage {
    const message = createBaseOtherMessage()
    message.echoMsg =
      object.echoMsg !== undefined && object.echoMsg !== null
        ? EchoMsg.fromPartial(object.echoMsg)
        : undefined
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
