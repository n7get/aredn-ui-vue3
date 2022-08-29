export interface Itopology {
  timeSinceStartup: number;
  pid: number;
  topology: [
    {
      ansn: number;
      msgHops: number;
      linkQuality: number;
      validityTime: number;
      lastHopIP: string;
      pathCost: number;
      refCount: number;
      neighborLinkQuality: number;
      ansnEdge: number;
      msgSeq: number;
      errSeq: number;
      destinationIP: string;
      errSeqValid: boolean;
      tcIgnored: number;
      tcEdgeCost: number;
      hops: number;
    }
  ];
  systemTime: number;
  configurationChecksum: string;
}
