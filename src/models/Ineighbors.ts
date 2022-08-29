export interface Ineighbors {
  [ip: string]: {
    helloTime: number;
    lostLinkTime: number;
    linkQuality: number;
    vtime: number;
    linkCost: number;
    linkType: string;
    hostname: string;
    validityTime: number;
    previousLinkStatus: string;
    currentLinkStatus: string;
    rx_rate: number;
    neighborLinkQuality: number;
    noise: number;
    symmetryTime: number;
    seqnoValid: boolean;
    lossMultiplier: number;
    pending: boolean;
    lossHelloInterval: number;
    asymmetryTime: number;
    tx_rate: number;
    hysteresis: number;
    seqno: number;
    lossTime: number;
    expected_throughput: number;
    olsrInterface: string;
    lastHelloTime: number;
    signal: number;
  };
}
