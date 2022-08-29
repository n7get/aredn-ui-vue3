import { defineStore } from "pinia";

import { Ialerts } from "@/models/Ialert";
import { Ineighbors } from "@/models/Ineighbors";
import { Ifreqlist } from "@/models/Ifreqlist";
import { Ihost } from "@/models/Ihost";
import { Iip } from "@/models/Iip";
import { Ilocalhost } from "@/models/Ilocalhost";
import { Ilocation } from "@/models/Ilocation";
import { Imemory } from "@/models/Imemory";
import { Imeshrf } from "@/models/Imeshrf";
import { Iolsr } from "@/models/Iolsr";
import { Iremotenode } from "@/models/Iremotenode";
import { Iservice } from "@/models/Iservice";
import { Istorage } from "@/models/Istorage";
import { Isysinfo } from "@/models/Isysinfo";
import { Itopology } from "@/models/Itopology";

import alerts from "@/data/alerts.json";
import allhosts from "@/data/allhosts.json";
// import bynode from "@/data/bynode.json";
// import byservice from "@/data/byservice.json";
import currentneighbors from "@/data/currentneighbors.json";
import freqlist from "@/data/freqlist.json";
import ip from "@/data/ip.json";
import localhosts from "@/data/localhosts.json";
import location from "@/data/location.json";
import memory from "@/data/memory.json";
import meshrf from "@/data/meshrf.json";
import olsr from "@/data/olsr.json";
// import previousneighbors from "@/data/previousneighbors.json";
import remotenodes from "@/data/remotenodes.json";
import services from "@/data/services.json";
import storage from "@/data/storage.json";
import sysinfo from "@/data/sysinfo.json";
// import topology from "@/data/topology.json";

export const useNodeStore = defineStore("NodeStore", {
  state() {
    return {
      alerts: alerts as Ialerts,
      allhosts: allhosts as Ihost[],
      // bynode,
      // byservice,
      currentneighbors: currentneighbors as Ineighbors,
      freqlist: freqlist as Ifreqlist[],
      ip: ip as Iip,
      localhosts: localhosts as Ilocalhost[],
      location: location as Ilocation,
      memory: memory as Imemory,
      meshrf: meshrf as Imeshrf,
      olsr: olsr as Iolsr,
      previousneighbors: {} as Ineighbors,
      remotenodes: remotenodes as Iremotenode[],
      services: services as Iservice[],
      storage: storage as Istorage,
      sysinfo: sysinfo as Isysinfo,
      topology: {} as Itopology,
    };
  },
});
