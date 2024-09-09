export interface BinResponse<T> {
  record: T;
  metadata: BinMetadata;
}

export interface BinMetadata {
  id: string;
  createdAt: string;
  private: boolean;
}

export interface BinRecord {
  songName: string;
  artist: string;
  category: string;
  link?: string;
}

export interface BinToken {
  currentBin: string;
}
