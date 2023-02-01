export enum UserStatusEnum {
  ON_WAITLIST = "on_waitlist",
  DEV_PREVIEW = "dev_preview",
}

export interface IUserModel {
  id: number;
  name: string;
  email: string;
  picture?: string;
  team: ITeamModel | null;
  status?: UserStatusEnum;
}

export interface ITeamModel {
  id: number;
  name: string;
  token?: string;
  refresh_token?: string;
}
