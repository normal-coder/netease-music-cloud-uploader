import type { ICommonTagsResult } from 'music-metadata/lib/type';

export interface UserInfo {
  code: number;
  account: { id: number } | null;
  profile: { avatarUrl: string; nickname: string } | null;
}

export interface Unikey {
  code: number;
  unikey: string;
}

export interface LoginStatus {
  code: number;
  message: string;
  nickname?: string;
  avatarUrl?: string;
}

export interface CloudSong {
  addTime: number;
  album: string;
  artist: string;
  fileName: string;
  fileSize: number;
  songId: number;
  songName: string;
}

export interface CloudList {
  code: number;
  count: number;
  data: CloudSong[];
  hasMore: boolean;
  maxSize: string;
  size: string;
  upgradeSign: number;
}

export interface UploadFile {
  error?: Error;
  file: File;
  md5: string;
  metadata?: ICommonTagsResult;
}

export interface UploadCheckResult {
  code: number;
  // 如果是 false，说明云上已经有了，不需要再从本地上传了
  needUpload: boolean;
  songId: string;
}

export interface UploadTokenResult {
  code: number;
  message?: string;
  result: {
    objectKey: string;
    resourceId: number;
    token: string;
  };
}
