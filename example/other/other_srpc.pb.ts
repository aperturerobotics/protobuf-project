// @generated by protoc-gen-es-starpc none with parameter "target=ts,ts_nocheck=false"
// @generated from file github.com/aperturerobotics/protobuf-project/example/other/other.proto (package other, syntax proto3)
/* eslint-disable */

import { Empty, Message, MethodKind } from '@aptre/protobuf-es-lite'
import { ProtoRpc } from 'starpc'

/**
 * AccessVolumes is a service to access available volumes over RPC.
 *
 * @generated from service other.AccessVolumes
 */
export const AccessVolumesDefinition = {
  typeName: 'other.AccessVolumes',
  methods: {
    /**
     * @generated from rpc other.AccessVolumes.WatchVolumeInfo
     */
    WatchVolumeInfo: {
      name: 'WatchVolumeInfo',
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
  },
} as const

/**
 * AccessVolumes is a service to access available volumes over RPC.
 *
 * @generated from service other.AccessVolumes
 */
export interface AccessVolumes {
  /**
   * @generated from rpc other.AccessVolumes.WatchVolumeInfo
   */
  WatchVolumeInfo(
    request: Message<Empty>,
    abortSignal?: AbortSignal,
  ): Promise<Message<Empty>>
}

export const AccessVolumesServiceName = AccessVolumesDefinition.typeName

export class AccessVolumesClient implements AccessVolumes {
  private readonly rpc: ProtoRpc
  private readonly service: string
  constructor(rpc: ProtoRpc, opts?: { service?: string }) {
    this.service = opts?.service || AccessVolumesServiceName
    this.rpc = rpc
    this.WatchVolumeInfo = this.WatchVolumeInfo.bind(this)
  }
  /**
   * @generated from rpc other.AccessVolumes.WatchVolumeInfo
   */
  async WatchVolumeInfo(
    request: Message<Empty>,
    abortSignal?: AbortSignal,
  ): Promise<Message<Empty>> {
    const requestMsg = Empty.create(request)
    const result = await this.rpc.request(
      this.service,
      AccessVolumesDefinition.methods.WatchVolumeInfo.name,
      Empty.toBinary(requestMsg),
      abortSignal || undefined,
    )
    return Empty.fromBinary(result)
  }
}
