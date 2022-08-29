export interface Isysinfo {
  description?: string;
  date: string;
  api_version: string;
  target_type: string;
  first_boot: boolean;
  time: string;
  model: string;
  uptime: string;
  loads: number[];
  node: string;
  firmware_version: string;
}
